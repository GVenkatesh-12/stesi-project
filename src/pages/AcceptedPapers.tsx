import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const AcceptedPapers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4">
              <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
              Coming Soon
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
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
