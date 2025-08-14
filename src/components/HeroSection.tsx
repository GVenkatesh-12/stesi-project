import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeBackground } from './ThreeBackground';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeBackground />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      
      {/* University Logo - Top Left Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-8 left-8 z-20"
      >
        <img 
          src="/mug-logo-nbg-white.png" 
          alt="Manipal University Jaipur Logo"
          className="h-20 sm:h-20 lg:h-20 filter brightness-0 invert mt-10"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Conference Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 font-heading leading-tight">
            <span className="bg-gradient-to-r from-white via-conference-accent to-white bg-clip-text text-transparent">
              STESI 2026
            </span>
          </h1>
          
          {/* Main Conference Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white/95 mb-2 font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            International Conference
          </motion.h2>
          
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-2 font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            on
          </motion.h3>
          
          <motion.h3 
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/90 mb-2 font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Smart Technologies for Energy,
          </motion.h3>
          
          <motion.h3 
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/90 mb-6 font-medium leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Sustainability & Industry
          </motion.h3>
          
          {/* Event Dates and Mode */}
          <motion.div 
            className="text-lg sm:text-xl text-conference-accent font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            July 22-23, 2026
          </motion.div>
          
          <motion.div 
            className="text-base sm:text-lg text-white/80 font-medium mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            (Hybrid Mode)
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={goToAbout}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;