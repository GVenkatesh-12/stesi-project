import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════════════════
   Hero Bubble & Pill-Orbit Particle System
   - Small translucent bubbles drift upward with smooth sinusoidal sway.
   - When a visible bubble drifts near one of the two rotated background
     pill outlines (.stesi-hero__orbit), it smoothly slingshots onto the
     exact capsule border and glides along it like a tiny planet with a
     delicate tapered light trace, before gently fading out.
   - Anti-clustering caps (max 2 per pill on desktop, 1 on mobile, with
     minimum perimeter spacing and capture cooldown) keep it clean.
   ═══════════════════════════════════════════════════════════════════════ */

interface TrailPoint {
  x: number;
  y: number;
  t: number; // timestamp in seconds
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  fadeAlpha: number;
  age: number;
  swayAmp: number;
  swayFreq: number;
  swayPhase: number;
  state: 'floating' | 'attracted' | 'orbiting' | 'fading';
  ringIdx: number;
  s: number; // arc-length position along capsule perimeter (px)
  radialOffset: number; // residual perpendicular offset that smoothly decays to 0
  orbitSpeed: number; // linear speed along perimeter (px/sec)
  orbitDist: number; // arc length traveled so far (px)
  orbitLife: number; // target arc length before fading (px)
  orbitBlend: number; // 0 → 1 blend for orbit trace & subtle rim boost
  attractAge: number; // safety timer in attracted state (sec)
  dir: 1 | -1; // +1 clockwise, -1 counter-clockwise along capsule
  isCyan: boolean;
  attractTrail: TrailPoint[];
}

interface PillGeometry {
  cx: number;
  cy: number;
  hl: number; // half-length of straight horizontal segments
  r: number; // radius of semicircular endcaps
  L: number; // full straight segment length (2 * hl)
  arc: number; // semicircle arc length (π * r)
  P: number; // total perimeter (2 * L + 2 * arc)
}

// Matches CSS `.stesi-hero__orbit { transform: rotate(-24deg); }`
const ROT = -24 * (Math.PI / 180);
const COS_R = Math.cos(ROT);
const SIN_R = Math.sin(ROT);

const toLocal = (wx: number, wy: number) => ({
  x: wx * COS_R + wy * SIN_R,
  y: -wx * SIN_R + wy * COS_R,
});

const toWorld = (lx: number, ly: number) => ({
  x: lx * COS_R - ly * SIN_R,
  y: lx * SIN_R + ly * COS_R,
});

const wrapS = (s: number, P: number) => ((s % P) + P) % P;

const arcDistance = (s1: number, s2: number, P: number) => {
  const diff = Math.abs(wrapS(s1, P) - wrapS(s2, P));
  return Math.min(diff, P - diff);
};

/** Exact world position, unit tangent (+s), and outward unit normal on capsule border */
const samplePill = (pill: PillGeometry, rawS: number) => {
  const { cx, cy, hl, r, L, arc, P } = pill;
  const s = wrapS(rawS, P);

  let lx = 0;
  let ly = 0;
  let tx = 1;
  let ty = 0;
  let nx = 0;
  let ny = -1;

  if (s < L) {
    // Top straight edge (left → right)
    lx = -hl + s;
    ly = -r;
    tx = 1;
    ty = 0;
    nx = 0;
    ny = -1;
  } else if (s < L + arc) {
    // Right semicircle (top → bottom)
    const phi = -Math.PI / 2 + (s - L) / r;
    const c = Math.cos(phi);
    const sn = Math.sin(phi);
    lx = hl + r * c;
    ly = r * sn;
    tx = -sn;
    ty = c;
    nx = c;
    ny = sn;
  } else if (s < 2 * L + arc) {
    // Bottom straight edge (right → left)
    lx = hl - (s - (L + arc));
    ly = r;
    tx = -1;
    ty = 0;
    nx = 0;
    ny = 1;
  } else {
    // Left semicircle (bottom → top)
    const phi = Math.PI / 2 + (s - (2 * L + arc)) / r;
    const c = Math.cos(phi);
    const sn = Math.sin(phi);
    lx = -hl + r * c;
    ly = r * sn;
    tx = -sn;
    ty = c;
    nx = c;
    ny = sn;
  }

  const pos = toWorld(lx, ly);
  const tang = toWorld(tx, ty);
  const norm = toWorld(nx, ny);

  return {
    x: cx + pos.x,
    y: cy + pos.y,
    tx: tang.x,
    ty: tang.y,
    nx: norm.x,
    ny: norm.y,
  };
};

/** Exact closest point, arc-length `s`, and signed distance to capsule border */
const nearestOnPill = (pill: PillGeometry, px: number, py: number) => {
  const { cx, cy, hl, r, L, arc } = pill;
  const local = toLocal(px - cx, py - cy);
  const { x: lx, y: ly } = local;

  // Closest point on capsule's central core segment [-hl, +hl]
  const qx = Math.max(-hl, Math.min(hl, lx));
  const distCore = Math.hypot(lx - qx, ly);
  const signedDist = distCore - r;

  let s: number;
  if (lx >= hl) {
    // Right semicircle Voronoi region
    const phi = lx === hl && ly === 0 ? 0 : Math.atan2(ly, lx - hl);
    s = L + (phi + Math.PI / 2) * r;
  } else if (lx <= -hl) {
    // Left semicircle Voronoi region
    let phi = lx === -hl && ly === 0 ? Math.PI : Math.atan2(ly, lx + hl);
    if (phi < 0) phi += Math.PI * 2;
    s = 2 * L + arc + (phi - Math.PI / 2) * r;
  } else if (ly <= 0) {
    // Top straight edge
    s = lx + hl;
  } else {
    // Bottom straight edge
    s = L + arc + (hl - lx);
  }

  const sample = samplePill(pill, s);
  return { s: wrapS(s, pill.P), signedDist, ...sample };
};

// ── Tunables (all time-normalized in px / seconds) ──
const MAX_PARTICLES_DESKTOP = 26;
const MAX_PARTICLES_MOBILE = 14;
const SPAWN_INTERVAL_SEC = 0.45;
const ATTRACT_DIST_PX = 64;
const CAPTURE_LOCK_PX = 2.4;
const CAPTURE_COOLDOWN_SEC = 2.4;
const MIN_SPACING_RATIO = 0.36; // minimum fraction of pill perimeter between orbiters
const ORBIT_TRAIL_PX = 82;
const ORBIT_TRAIL_SEGMENTS = 18;
const ATTRACT_TRAIL_SEC = 0.24;

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

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    if (reducedMotion.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let rings: (PillGeometry | null)[] = [null, null];
    let particles: Particle[] = [];
    let raf = 0;
    let isVisible = true;
    let lastTime = 0;
    let elapsed = 0;
    let spawnTimer = 0;
    const lastCaptureAt = [-10, -10];

    const readPill = (
      ref: React.RefObject<HTMLDivElement | null>,
      heroRect: DOMRect,
    ): PillGeometry | null => {
      const el = ref.current;
      if (!el || el.offsetWidth === 0 || el.offsetHeight === 0) return null;
      const rect = el.getBoundingClientRect();
      // Subtract 1px so path centers cleanly on the 1px CSS border
      const bw = Math.max(2, el.offsetWidth - 1);
      const bh = Math.max(2, el.offsetHeight - 1);
      const r = bh / 2;
      const hl = Math.max(0, bw / 2 - r);
      const L = 2 * hl;
      const arc = Math.PI * r;
      return {
        cx: rect.left - heroRect.left + rect.width / 2,
        cy: rect.top - heroRect.top + rect.height / 2,
        hl,
        r,
        L,
        arc,
        P: 2 * L + 2 * arc,
      };
    };

    const syncLayout = () => {
      const heroRect = hero.getBoundingClientRect();
      W = heroRect.width;
      H = heroRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rings = [readPill(ring1Ref, heroRect), readPill(ring2Ref, heroRect)];
    };

    const createBubble = (initialY?: number): Particle => {
      const swayAmp = 8 + Math.random() * 16;
      const swayFreq = 0.65 + Math.random() * 0.75;
      const swayPhase = Math.random() * Math.PI * 2;
      const vy = -(30 + Math.random() * 34); // px/sec upward
      return {
        x: 12 + Math.random() * Math.max(1, W - 24),
        y: initialY ?? H + 8 + Math.random() * 12,
        vx: Math.cos(swayPhase) * swayAmp * swayFreq,
        vy,
        size: 1.8 + Math.random() * 2.2, // 1.8 – 4.0 px
        baseOpacity: 0.28 + Math.random() * 0.28,
        fadeAlpha: initialY !== undefined ? 0 : 1,
        age: 0,
        swayAmp,
        swayFreq,
        swayPhase,
        state: 'floating',
        ringIdx: -1,
        s: 0,
        radialOffset: 0,
        orbitSpeed: 125 + Math.random() * 30,
        orbitDist: 0,
        orbitLife: 0,
        orbitBlend: 0,
        attractAge: 0,
        dir: 1,
        isCyan: Math.random() > 0.36,
        attractTrail: [],
      };
    };

    syncLayout();

    // Pre-seed floating bubbles so the hero feels alive immediately
    const initialCount = W < 640 ? 7 : 13;
    for (let i = 0; i < initialCount; i++) {
      const y = H * (0.14 + Math.random() * 0.8);
      particles.push(createBubble(y));
    }

    const resizeObserver = new ResizeObserver(() => {
      syncLayout();
    });
    resizeObserver.observe(hero);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !raf) {
          lastTime = 0;
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.01 },
    );
    intersectionObserver.observe(hero);

    const drawBubble = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      rgb: string,
      orbitBlend: number,
    ) => {
      if (alpha <= 0.005) return;

      // Subtle tight glow only when captured/orbiting — never bloated
      if (orbitBlend > 0.02) {
        const glowR = size * 2.1;
        const glow = ctx.createRadialGradient(x, y, size * 0.3, x, y, glowR);
        glow.addColorStop(0, `rgba(${rgb},${alpha * 0.28 * orbitBlend})`);
        glow.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Hollow glass-bubble interior (clearer center, softly tinted rim)
      const bodyGrad = ctx.createRadialGradient(
        x - size * 0.25,
        y - size * 0.25,
        size * 0.1,
        x,
        y,
        size,
      );
      bodyGrad.addColorStop(0, `rgba(255,255,255,${alpha * 0.04})`);
      bodyGrad.addColorStop(0.68, `rgba(${rgb},${alpha * 0.09})`);
      bodyGrad.addColorStop(
        1,
        `rgba(${rgb},${alpha * (0.3 + 0.15 * orbitBlend)})`,
      );

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Delicate bubble rim
      ctx.strokeStyle = `rgba(${rgb},${alpha * (0.58 + 0.3 * orbitBlend)})`;
      ctx.lineWidth = 0.75;
      ctx.stroke();

      // Crisp tiny specular glint
      ctx.beginPath();
      ctx.arc(
        x - size * 0.3,
        y - size * 0.3,
        Math.max(0.55, size * 0.24),
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = `rgba(255,255,255,${alpha * (0.65 + 0.2 * orbitBlend)})`;
      ctx.fill();
    };

    const drawOrbitTrace = (
      pill: PillGeometry,
      p: Particle,
      alpha: number,
      rgb: string,
    ) => {
      const trailLen = ORBIT_TRAIL_PX * p.orbitBlend;
      if (trailLen < 4 || alpha <= 0.005) return;

      ctx.lineCap = 'round';
      let prev = samplePill(pill, p.s);
      let prevX = prev.x + prev.nx * p.radialOffset;
      let prevY = prev.y + prev.ny * p.radialOffset;

      for (let i = 1; i <= ORBIT_TRAIL_SEGMENTS; i++) {
        const frac = i / ORBIT_TRAIL_SEGMENTS; // 0 at head → 1 at tail
        const fade = (1 - frac) * (1 - frac);
        const sampleS = p.s - p.dir * frac * trailLen;
        const curr = samplePill(pill, sampleS);
        const offset = p.radialOffset * (1 - frac);
        const currX = curr.x + curr.nx * offset;
        const currY = curr.y + curr.ny * offset;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = `rgba(${rgb},${alpha * fade * 0.55 * p.orbitBlend})`;
        ctx.lineWidth = Math.max(0.35, p.size * 0.65 * (1 - frac * 0.75));
        ctx.stroke();

        prev = curr;
        prevX = currX;
        prevY = currY;
      }
    };

    const drawAttractTrace = (p: Particle, alpha: number, rgb: string) => {
      if (p.attractTrail.length < 2 || alpha <= 0.005) return;
      ctx.lineCap = 'round';
      for (let i = 1; i < p.attractTrail.length; i++) {
        const a = p.attractTrail[i - 1];
        const b = p.attractTrail[i];
        const frac = i / p.attractTrail.length;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${rgb},${alpha * frac * frac * 0.3})`;
        ctx.lineWidth = Math.max(0.35, p.size * 0.5 * frac);
        ctx.stroke();
      }
    };

    const tick = (now: number) => {
      if (!isVisible) {
        raf = 0;
        return;
      }

      const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 1 / 60;
      lastTime = now;
      elapsed += dt;

      ctx.clearRect(0, 0, W, H);

      const isMobile = W < 640;
      const maxParticles = isMobile
        ? MAX_PARTICLES_MOBILE
        : MAX_PARTICLES_DESKTOP;
      const maxPerRing = isMobile ? 1 : 2;

      spawnTimer += dt;
      if (spawnTimer >= SPAWN_INTERVAL_SEC) {
        spawnTimer -= SPAWN_INTERVAL_SEC;
        if (particles.length < maxParticles) {
          particles.push(createBubble());
        }
      }

      // Count captured particles per pill
      const taken = [0, 0];
      for (const p of particles) {
        if (p.ringIdx >= 0 && p.state !== 'floating') {
          taken[p.ringIdx]++;
        }
      }

      const alive: Particle[] = [];

      for (const p of particles) {
        p.age += dt;

        switch (p.state) {
          case 'floating': {
            // Smooth initial fade-in for pre-seeded bubbles
            if (p.fadeAlpha < 1) {
              p.fadeAlpha = Math.min(1, p.fadeAlpha + dt * 1.4);
            }

            // Buoyant upward rise + smooth sinusoidal sway
            p.vx =
              Math.cos(p.age * p.swayFreq + p.swayPhase) *
              p.swayAmp *
              p.swayFreq;
            p.x += p.vx * dt;
            p.y += p.vy * dt;

            // Only capture bubbles clearly visible inside the viewport
            const inViewport =
              p.x > 18 && p.x < W - 18 && p.y > 24 && p.y < H - 30;

            if (inViewport && p.fadeAlpha > 0.6) {
              for (let i = 0; i < rings.length; i++) {
                const pill = rings[i];
                if (!pill) continue;
                if (taken[i] >= maxPerRing) continue;
                if (elapsed - lastCaptureAt[i] < CAPTURE_COOLDOWN_SEC) continue;

                const near = nearestOnPill(pill, p.x, p.y);
                if (Math.abs(near.signedDist) > ATTRACT_DIST_PX) continue;

                // Enforce perimeter spacing so orbiters never cluster
                let tooClose = false;
                for (const other of particles) {
                  if (
                    other !== p &&
                    other.ringIdx === i &&
                    other.state !== 'floating'
                  ) {
                    if (
                      arcDistance(near.s, other.s, pill.P) <
                      pill.P * MIN_SPACING_RATIO
                    ) {
                      tooClose = true;
                      break;
                    }
                  }
                }
                if (tooClose) continue;

                // Align orbit direction with incoming momentum
                const dot = p.vx * near.tx + p.vy * near.ty;
                p.dir =
                  Math.abs(dot) > 4
                    ? dot >= 0
                      ? 1
                      : -1
                    : Math.random() > 0.5
                      ? 1
                      : -1;

                p.state = 'attracted';
                p.ringIdx = i;
                p.s = near.s;
                p.attractAge = 0;
                p.attractTrail = [{ x: p.x, y: p.y, t: elapsed }];
                p.orbitLife = pill.P * (1.75 + Math.random() * 0.65);
                taken[i]++;
                lastCaptureAt[i] = elapsed;
                break;
              }
            }

            if (p.y < -20 || p.x < -40 || p.x > W + 40) continue;
            break;
          }

          case 'attracted': {
            const pill = rings[p.ringIdx];
            p.attractAge += dt;

            if (!pill || p.attractAge > 3.5) {
              p.state = 'fading';
              break;
            }

            const near = nearestOnPill(pill, p.x, p.y);
            p.s = near.s;

            const dx = near.x - p.x;
            const dy = near.y - p.y;
            const dist = Math.hypot(dx, dy);

            // Blend inward pull with tangential orbital velocity for a smooth slingshot
            const proximity = 1 - Math.min(dist / ATTRACT_DIST_PX, 1);
            const pullSpeed = Math.min(185, dist * 3.1 + 32);
            const pullX = dist > 0.01 ? (dx / dist) * pullSpeed : 0;
            const pullY = dist > 0.01 ? (dy / dist) * pullSpeed : 0;

            const tangWeight = 0.25 + 0.75 * proximity;
            const desiredVx = pullX + near.tx * p.dir * p.orbitSpeed * tangWeight;
            const desiredVy = pullY + near.ty * p.dir * p.orbitSpeed * tangWeight;

            const steer = 1 - Math.exp(-6.0 * dt);
            p.vx += (desiredVx - p.vx) * steer;
            p.vy += (desiredVy - p.vy) * steer;
            p.x += p.vx * dt;
            p.y += p.vy * dt;

            p.orbitBlend = Math.min(0.45, proximity * 0.45);
            p.attractTrail.push({ x: p.x, y: p.y, t: elapsed });
            while (
              p.attractTrail.length > 0 &&
              elapsed - p.attractTrail[0].t > ATTRACT_TRAIL_SEC
            ) {
              p.attractTrail.shift();
            }

            // Lock smoothly once right at the border (zero snap)
            if (Math.abs(near.signedDist) <= CAPTURE_LOCK_PX) {
              const locked = nearestOnPill(pill, p.x, p.y);
              p.state = 'orbiting';
              p.s = locked.s;
              p.radialOffset = locked.signedDist;
              p.orbitDist = 0;
            }
            break;
          }

          case 'orbiting': {
            const pill = rings[p.ringIdx];
            if (!pill) {
              p.state = 'fading';
              break;
            }

            const step = p.orbitSpeed * dt;
            p.s = wrapS(p.s + p.dir * step, pill.P);
            p.orbitDist += step;
            p.radialOffset *= Math.exp(-10 * dt);
            p.orbitBlend = Math.min(1, p.orbitBlend + dt * 2.4);

            const pos = samplePill(pill, p.s);
            p.x = pos.x + pos.nx * p.radialOffset;
            p.y = pos.y + pos.ny * p.radialOffset;

            if (p.orbitDist >= p.orbitLife) {
              p.state = 'fading';
            }
            break;
          }

          case 'fading': {
            const pill = rings[p.ringIdx];
            if (pill) {
              const step = p.orbitSpeed * dt;
              p.s = wrapS(p.s + p.dir * step, pill.P);
              p.radialOffset *= Math.exp(-10 * dt);
              const pos = samplePill(pill, p.s);
              p.x = pos.x + pos.nx * p.radialOffset;
              p.y = pos.y + pos.ny * p.radialOffset;
            }
            p.fadeAlpha -= dt * 0.72;
            if (p.fadeAlpha <= 0) continue;
            break;
          }
        }

        // Compute effective opacity (with soft top/bottom edges for floating bubbles)
        let edgeAlpha = 1;
        if (p.state === 'floating') {
          if (p.y < 95) {
            edgeAlpha = Math.max(0, p.y / 95);
          } else if (p.y > H - 24) {
            edgeAlpha = Math.max(0, (H - p.y + 8) / 32);
          }
        }

        const alpha = p.baseOpacity * p.fadeAlpha * edgeAlpha;
        const rgb = p.isCyan ? '143,244,255' : '196,170,255';

        if (p.state === 'attracted') {
          drawAttractTrace(p, alpha, rgb);
        } else if (p.state === 'orbiting' || p.state === 'fading') {
          const pill = rings[p.ringIdx];
          if (pill) drawOrbitTrace(pill, p, alpha, rgb);
        }

        drawBubble(p.x, p.y, p.size, alpha, rgb, p.orbitBlend);
        alive.push(p);
      }

      particles = alive;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="stesi-hero relative flex min-h-screen items-center justify-center overflow-hidden text-white"
    >
      <div className="stesi-hero__grid" aria-hidden="true" />
      <div
        className="stesi-hero__glow stesi-hero__glow--cyan"
        aria-hidden="true"
      />
      <div
        className="stesi-hero__glow stesi-hero__glow--violet"
        aria-hidden="true"
      />

      {/* background pill outlines — tracked by the bubble system */}
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

      {/* bubble & orbit canvas (behind hero text, above background) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      />

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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="stesi-hero__edition-badge absolute z-20 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
      >
        2nd Edition • STESI 2027
      </motion.div>

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
