import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const AcceptedPapers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Coming Soon Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <FileText className="h-24 w-24 text-primary mx-auto mb-6" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The list of accepted papers will be published after the review process is complete. Please check back later.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcceptedPapers;