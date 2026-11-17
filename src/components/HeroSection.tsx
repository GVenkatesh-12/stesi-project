import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="stesi-hero relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <div className="stesi-hero__grid" aria-hidden="true" />
      <div className="stesi-hero__glow stesi-hero__glow--cyan" aria-hidden="true" />
      <div className="stesi-hero__glow stesi-hero__glow--violet" aria-hidden="true" />
      <div className="stesi-hero__orbit stesi-hero__orbit--one" aria-hidden="true" />
      <div className="stesi-hero__orbit stesi-hero__orbit--two" aria-hidden="true" />

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
            Theme: Green Hydrogen and Intelligent Energy Systems: Powering Sustainable Energy and Future Mobility
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
