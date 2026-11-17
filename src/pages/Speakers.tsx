import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navigation />

      <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <Card className="border border-border/60 bg-gradient-card shadow-sm p-8 sm:p-10">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
              <Clock className="h-7 w-7" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 font-heading">
              Keynote Speakers
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-primary mb-3">
              STESI 2027 • August 5–6, 2027
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The plenary and keynote speaker lineup will be announced soon.
            </p>

            <Button asChild variant="outline" className="w-full">
              <Link to="/stesi-2026?tab=speakers" className="flex items-center justify-center gap-2">
                <span>View STESI 2026 Keynote Speakers</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;
