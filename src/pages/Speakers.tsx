import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Sparkles, ArrowRight, Mic, Calendar, Globe } from 'lucide-react';

const Speakers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>STESI 2027 Keynote Sessions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 font-heading">
              Plenary & Keynote Speakers
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              World-renowned authorities in green hydrogen, intelligent energy systems, and sustainable technology.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
              <Calendar className="h-4 w-4" />
              <span>Conference Dates: August 5–6, 2027</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2027 Announcement Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border border-border/70 shadow-card p-8 sm:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <Mic className="h-10 w-10" />
              </div>
              <Badge variant="outline" className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
                Lineup Under Finalization
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                STESI 2027 Keynote Lineup Coming Soon
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Distinguished researchers, global academicians, and senior industry pioneers in Green Hydrogen, Smart Grids, Electric Mobility, and AI for Energy Systems will deliver plenary addresses at STESI 2027. Full speaker profiles, topics, and session schedules will be published shortly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/call-for-papers">
                    Submit Paper for STESI 2027
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/stesi-2026?tab=speakers" className="flex items-center gap-2">
                    <span>View STESI 2026 Keynote Speakers</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Archive Callout Banner */}
      <section className="py-12 bg-muted/40 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary text-primary-foreground shrink-0">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Looking for the STESI 2026 Speaker Archive?
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Explore keynote topics and bios from international experts from Brazil, Spain, South Africa, Egypt, and India.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0 font-semibold">
              <Link to="/stesi-2026?tab=speakers" className="flex items-center gap-2">
                <span>Open 2026 Archive</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
