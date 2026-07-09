import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const acceptedPapersFile = {
  href: '/Accepted%20and%20Registered%20papers.pdf',
  name: 'Accepted and Registered papers.pdf',
};

const showAcceptedPapersDownload = false;

const AcceptedPapers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary mb-5">
              Accepted and Registered Papers
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The list of accepted and registered papers for STESI 2026 has been uploaded.
            </p>
            {showAcceptedPapersDownload && (
              <div className="mx-auto flex max-w-2xl flex-col items-center rounded-lg border border-primary/15 bg-background/80 p-6 shadow-card sm:p-8">
                <Button
                  size="lg"
                  variant="conference"
                  className="h-auto w-full px-4 py-3 text-sm font-bold leading-snug whitespace-normal sm:w-auto sm:px-8 sm:text-base"
                  asChild
                >
                  <a
                    href={acceptedPapersFile.href}
                    download={acceptedPapersFile.name}
                    className="inline-flex flex-wrap items-center justify-center gap-2 text-center"
                  >
                    <Download className="h-5 w-5 shrink-0" />
                    <span>Download Accepted and Registered Papers</span>
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcceptedPapers;
