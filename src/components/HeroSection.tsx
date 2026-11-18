import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════════════════
   Particle system — small bubbles rise from the bottom. When they drift
   near one of the two background orbit-ellipses ("pill shapes"), they
   get gravitationally sucked in and orbit the ring like a tiny planet
   with a faint comet trail.  Max 2 bubbles per ring to stay clean.
   ═══════════════════════════════════════════════════════════════════════ */

// ── types ──

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  state: 'floating' | 'attracted' | 'orbiting' | 'fading';
  ringIdx: number;
  angle: number;
  orbitTicks: number;
  trail: { x: number; y: number }[];
  isCyan: boolean;
  dir: number; // 1 clockwise, -1 counter-clockwise
}

interface Ring {
  cx: number;
  cy: number;
  a: number; // semi-major (pre-rotation half-width)
  b: number; // semi-minor (pre-rotation half-height)
}

// ── orbit rotation (matches CSS transform: rotate(-24deg)) ──

const ROT = -24 * (Math.PI / 180);
const COS_R = Math.cos(ROT);
const SIN_R = Math.sin(ROT);

/** world-relative → ellipse-local (un-rotate) */
const toLocal = (wx: number, wy: number) => ({
  x: wx * COS_R + wy * SIN_R,
  y: -wx * SIN_R + wy * COS_R,
});

/** ellipse-local → world-relative (apply rotation) */
const toWorld = (lx: number, ly: number) => ({
  x: lx * COS_R - ly * SIN_R,
  y: lx * SIN_R + ly * COS_R,
});

// ── tunables ──

const MAX_PARTICLES = 28;
const SPAWN_MS = 400;
const MAX_PER_RING = 2;
const ATTRACT_INNER = 0.55; // normalised ellipse dist band
const ATTRACT_OUTER = 1.45;
const CAPTURE_INNER = 0.9;
const CAPTURE_OUTER = 1.1;
const ORBIT_SPEED = 0.014;
const ORBIT_LIFE = Math.PI * 4.5; // ~2.25 laps then fade
const TRAIL_LEN = 10;

// ═══════════════════════════════════════════════════════════════════════

const HeroSection = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d')!;
    let W = 0;
    let H = 0;
    let particles: Particle[] = [];
    let lastSpawn = 0;
    let raf = 0;

    /* ── resize ── */
    const resize = () => {
      const r = hero.getBoundingClientRect();
      W = r.width;
      H = r.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── read an orbit element's geometry ── */
    const readRing = (
      ref: React.RefObject<HTMLDivElement | null>,
    ): Ring | null => {
      const el = ref.current;
      if (!el) return null;
      const hr = hero.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return {
        cx: r.left - hr.left + r.width / 2,
        cy: r.top - hr.top + r.height / 2,
        a: el.offsetWidth / 2,
        b: el.offsetHeight / 2,
      };
    };

    /* ── normalised distance to ellipse perimeter (1.0 = on the border) ── */
    const normDist = (ring: Ring, px: number, py: number) => {
      const l = toLocal(px - ring.cx, py - ring.cy);
      return Math.hypot(l.x / ring.a, l.y / ring.b);
    };

    /* ── angle on ellipse nearest to a world point ── */
    const nearAngle = (ring: Ring, px: number, py: number) => {
      const l = toLocal(px - ring.cx, py - ring.cy);
      return Math.atan2(l.y / ring.b, l.x / ring.a);
    };

    /* ── world position on ellipse at angle θ ── */
    const ringPos = (ring: Ring, θ: number) => {
      const w = toWorld(ring.a * Math.cos(θ), ring.b * Math.sin(θ));
      return { x: ring.cx + w.x, y: ring.cy + w.y };
    };

    /* ── world position of nearest point on ellipse ── */
    const nearPoint = (ring: Ring, px: number, py: number) =>
      ringPos(ring, nearAngle(ring, px, py));

    /* ── spawn ── */
    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: H + 8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -(0.55 + Math.random() * 0.9),
      size: 1.5 + Math.random() * 1.5, // 1.5 – 3 px
      opacity: 0.25 + Math.random() * 0.35,
      state: 'floating',
      ringIdx: -1,
      angle: 0,
      orbitTicks: 0,
      trail: [],
      isCyan: Math.random() > 0.35,
      dir: Math.random() > 0.5 ? 1 : -1,
    });

    /* ── main loop ── */
    const tick = (now: number) => {
      ctx.clearRect(0, 0, W, H);

      // spawn
      if (now - lastSpawn > SPAWN_MS && particles.length < MAX_PARTICLES) {
        particles.push(spawn());
        lastSpawn = now;
      }

      const rings = [readRing(ring1Ref), readRing(ring2Ref)];

      // count how many are already captured per ring
      const taken = [0, 0];
      for (const p of particles) {
        if (p.ringIdx >= 0 && p.state !== 'floating') taken[p.ringIdx]++;
      }

      const alive: Particle[] = [];

      for (const p of particles) {
        // trail history
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LEN) p.trail.shift();

        // ── state machine ──────────────────────────────────────────
        switch (p.state) {
          case 'floating': {
            p.x += p.vx;
            p.y += p.vy;
            p.vx += (Math.random() - 0.5) * 0.03;
            p.vx *= 0.995;

            for (let i = 0; i < rings.length; i++) {
              const ring = rings[i];
              if (!ring || taken[i] >= MAX_PER_RING) continue;
              const nd = normDist(ring, p.x, p.y);
              if (nd > ATTRACT_INNER && nd < ATTRACT_OUTER) {
                p.state = 'attracted';
                p.ringIdx = i;
                taken[i]++;
                break;
              }
            }
            if (p.y < -50 || p.x < -50 || p.x > W + 50) continue;
            break;
          }

          case 'attracted': {
            const ring = rings[p.ringIdx];
            if (!ring) {
              p.state = 'floating';
              p.ringIdx = -1;
              break;
            }
            const target = nearPoint(ring, p.x, p.y);
            const dx = target.x - p.x;
            const dy = target.y - p.y;
            const d = Math.hypot(dx, dy);

            const strength = 0.07 + 0.14 * (1 - Math.min(d / 120, 1));
            if (d > 0.1) {
              p.vx += (dx / d) * strength;
              p.vy += (dy / d) * strength;
            }
            p.vx *= 0.955;
            p.vy *= 0.955;
            p.x += p.vx;
            p.y += p.vy;

            const nd = normDist(ring, p.x, p.y);
            if (nd > CAPTURE_INNER && nd < CAPTURE_OUTER) {
              p.state = 'orbiting';
              p.angle = nearAngle(ring, p.x, p.y);
              p.orbitTicks = 0;
              p.trail = [];
            }
            break;
          }

          case 'orbiting': {
            const ring = rings[p.ringIdx];
            if (!ring) {
              p.state = 'fading';
              break;
            }
            p.angle += ORBIT_SPEED * p.dir;
            p.orbitTicks += ORBIT_SPEED;
            const pos = ringPos(ring, p.angle);
            p.x = pos.x;
            p.y = pos.y;
            if (p.orbitTicks > ORBIT_LIFE) p.state = 'fading';
            break;
          }

          case 'fading': {
            const ring = rings[p.ringIdx];
            if (ring) {
              p.angle += ORBIT_SPEED * p.dir;
              const pos = ringPos(ring, p.angle);
              p.x = pos.x;
              p.y = pos.y;
            }
            p.opacity -= 0.012;
            if (p.opacity <= 0) continue;
            break;
          }
        }

        // ── draw ──────────────────────────────────────────────────
        const rgb = p.isCyan ? '143,244,255' : '190,165,255';

        // comet trail (orbit / fade only)
        if (
          (p.state === 'orbiting' || p.state === 'fading') &&
          p.trail.length > 1
        ) {
          for (let i = 0; i < p.trail.length; i++) {
            const t = p.trail[i];
            const frac = i / p.trail.length;
            ctx.beginPath();
            ctx.arc(t.x, t.y, p.size * (0.2 + 0.6 * frac), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${p.opacity * frac * 0.35})`;
            ctx.fill();
          }
        }

        // subtle outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${p.opacity * 0.1})`;
        ctx.fill();

        // bubble ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb},${p.opacity * 0.55})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // translucent fill
        ctx.fillStyle = `rgba(${rgb},${p.opacity * 0.18})`;
        ctx.fill();

        // tiny specular highlight
        ctx.beginPath();
        ctx.arc(
          p.x - p.size * 0.22,
          p.y - p.size * 0.22,
          p.size * 0.28,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(255,255,255,${p.opacity * 0.45})`;
        ctx.fill();

        alive.push(p);
      }

      particles = alive;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ═══════════════════════════ JSX ═══════════════════════════ */
  return (
    <section
      ref={heroRef}
      className="stesi-hero relative flex min-h-screen items-center justify-center overflow-hidden text-white"
    >
      <div className="stesi-hero__grid" aria-hidden="true" />
      <div className="stesi-hero__glow stesi-hero__glow--cyan" aria-hidden="true" />
      <div
        className="stesi-hero__glow stesi-hero__glow--violet"
        aria-hidden="true"
      />

      {/* orbit rings — refs for the particle system */}
      <div
        ref={ring1Ref}
        className="stesi-hero__orbit stesi-hero__orbit--one"
        aria-hidden="true"
      />
      <div
        ref={ring2Ref}
        className="stesi-hero__orbit stesi-hero__orbit--two"
        aria-hidden="true"
      />

      {/* particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      />

      {/* university logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="stesi-hero__university-logo absolute z-20"
      >
        <img
          src="/mug-logo-nbg-white.png"
          alt="Manipal University Jaipur Logo"
          className="h-14 w-auto brightness-0 invert sm:h-20"
        />
      </motion.div>

      {/* edition badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="stesi-hero__edition-badge absolute z-20 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
      >
        2nd Edition • STESI 2027
      </motion.div>

      {/* hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mb-3 font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            <span className="stesi-hero__gradient-text">STESI 2027</span>
          </h1>

          <motion.h2
            className="mb-2 text-2xl font-medium leading-tight text-white/95 sm:text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2nd International Conference
          </motion.h2>

          <motion.h3
            className="mb-2 text-lg font-medium leading-tight text-white/90 sm:text-xl lg:text-2xl xl:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            on
          </motion.h3>

          <motion.h3
            className="mb-2 text-xl font-medium leading-tight text-white/90 sm:text-2xl lg:text-3xl xl:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Smart Technologies for Energy,
          </motion.h3>

          <motion.h3
            className="mb-4 text-xl font-medium leading-tight text-white/90 sm:text-2xl lg:text-3xl xl:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sustainability & Industry
          </motion.h3>

          <motion.p
            className="mx-auto mb-6 max-w-3xl text-sm font-semibold leading-relaxed text-amber-200 sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Theme: Green Hydrogen and Intelligent Energy Systems: Powering
            Sustainable Energy and Future Mobility
          </motion.p>

          <motion.div
            className="mb-2 text-lg font-semibold text-cyan-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            August 5-6, 2027
          </motion.div>

          <motion.div
            className="mb-10 text-sm font-medium text-white/80 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            (Offline Mode — Online for international authors only)
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={() => navigate('/about')}
              size="lg"
              className="border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-glow"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="stesi-hero__scroll absolute"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
