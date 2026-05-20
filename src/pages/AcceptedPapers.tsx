import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const AcceptedPapers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Poster Template Download */}
      <section className="pt-24 pb-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="conference"
              className="h-auto w-full px-8 py-4 text-base font-bold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 sm:w-auto sm:text-lg"
              asChild
            >
              <a
                href="/STESI-2026 POSTER TEMPLATE.pptx"
                download="STESI-2026 POSTER TEMPLATE.pptx"
              >
                <Download className="mr-2 h-5 w-5 animate-pulse" />
                A0 size (2.76×3.90 feet) POSTER TEMPLATE
              </a>
            </Button>
            <hr className="mt-8 border-0 h-0.5 bg-neutral-400 dark:bg-neutral-600" />
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="pb-12 bg-gradient-to-b from-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
