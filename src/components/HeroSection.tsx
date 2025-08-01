import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeBackground } from './ThreeBackground';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('countdown-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeBackground />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Conference Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading">
            <span className="bg-gradient-to-r from-white via-conference-accent to-white bg-clip-text text-transparent">
              iSSSC 2025
            </span>
          </h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            2025 IEEE 3rd International Symposium
          </motion.h2>
          
          <motion.h3 
            className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            on Sustainable Energy, Signal Processing and Cybersecurity
          </motion.h3>
          
          {/* Event Dates */}
          <motion.div 
            className="text-lg sm:text-xl text-conference-accent font-semibold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            November 06–08, 2025 • GIET University, Gunupur, Odisha
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToNext}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Learn More
              <ChevronDown className="ml-2 h-5 w-5" />
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