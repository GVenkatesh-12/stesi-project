import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Camera,
  FileText,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Award,
  Calendar,
  Sparkles,
  Maximize2
} from 'lucide-react';

const galleryPhotos = [
  'STESI-1.jpg',
  'DSC_6722.JPG',
  'DSC_6753.JPG',
  'DSC_6760.JPG',
  'DSC_6819.JPG',
  'DSC_6822.JPG',
  'DSC_6855.JPG',
  'DSC_6858.JPG',
  'DSC_6867.JPG',
  'DSC_6884.JPG',
  'DSC_6905.JPG',
  'DSC_6909.JPG',
  'Stesi1-6.jpg',
  'Stesi1-35.jpg',
  'Stesi1-69.jpg',
  'Stesi1-80.jpg',
  'Stesi1-84.jpg',
  'Stesi1-96.jpg',
  'Stesi1-102.jpg',
  'Stesi1-110.jpg',
  'Stesi1-183.jpg',
  'Stesi1-191.jpg',
  'Stesi1-214.jpg',
  'Stesi1-219.jpg',
  'Stesi1-224.jpg',
  'Stesi1-226.jpg',
  'Stesi1-228.jpg',
  'Stesi1-237.jpg',
  'Stesi1-240.jpg',
  'Stesi1-241.jpg',
  'Stesi1-245.jpg',
  'Stesi1-246.jpg',
  'Stesi1-247.jpg',
  'Stesi1-316.jpg',
  'Stesi1-320.jpg',
  'Stesi1-326.jpg',
  'Stesi2-23.jpg',
  'Stesi2-128.jpg',
  '42999be4-0141-43b7-ba9b-dc8dd13714c2.jfif',
  'f11861c8-5272-4969-9060-d68e7cc60721.jfif',
];

const proceedingsItems = [
  {
    title: 'Best Paper Award',
    description: 'Recognition of outstanding research contributions presented at STESI 2026.',
    href: '/Best%20Paper_STESI2026.pdf',
    fileName: 'Best Paper_STESI2026.pdf',
    badge: 'Award',
    badgeVariant: 'default' as const,
    icon: Award,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Best Poster Award',
    description: 'Honoring top technical poster presentations and visual research demonstrations.',
    href: '/Best%20Poster_STESI2026.pdf',
    fileName: 'Best Poster_STESI2026.pdf',
    badge: 'Award',
    badgeVariant: 'default' as const,
    icon: Award,
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Program Schedule',
    description: 'Detailed day-by-day timetable and event schedule for STESI 2026 (July 22-23, 2026).',
    href: '/program%20schedule_STESI2026.pdf',
    fileName: 'program schedule_STESI2026.pdf',
    badge: 'Schedule',
    badgeVariant: 'secondary' as const,
    icon: Calendar,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Technical Session Schedule',
    description: 'Complete session timings, track divisions, session chairs, and paper allocations.',
    href: '/Detail_Technical%20Session_STESI2026.pdf',
    fileName: 'Detail_Technical Session_STESI2026.pdf',
    badge: 'Sessions',
    badgeVariant: 'secondary' as const,
    icon: FileText,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Room-Wise Presentation Schedule',
    description: 'Paper ID assignments and physical venue room allocations across campus.',
    href: '/paper-id_list_venue.pdf',
    fileName: 'paper-id_list_venue.pdf',
    badge: 'Venues',
    badgeVariant: 'outline' as const,
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Keynote and Oral Session Links',
    description: 'Virtual meeting links and session details for remote keynote addresses and presentations.',
    href: '/Links%20of%20Keynote%20and%20Oral%20sessions.pdf',
    fileName: 'Links of Keynote and Oral sessions.pdf',
    badge: 'Virtual',
    badgeVariant: 'outline' as const,
    icon: ExternalLink,
    color: 'from-cyan-500 to-blue-600',
    opensInNewTab: true,
  },
  {
    title: 'Accepted & Registered Papers List',
    description: 'Official roster of peer-reviewed papers accepted and registered for STESI 2026 proceedings.',
    href: '/Accepted%20and%20Registered%20papers.pdf',
    fileName: 'Accepted and Registered papers.pdf',
    badge: 'Papers',
    badgeVariant: 'default' as const,
    icon: FileText,
    color: 'from-blue-600 to-indigo-700',
  },
];

const Stesi2026 = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => ((prev! + 1) % galleryPhotos.length));
    }
  }, [activePhotoIndex]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, nextPhoto, prevPhoto]);

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
              <span>Conference Archive</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 font-heading">
              STESI 2026
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              1st International Conference on Smart Technologies for Energy, Sustainability & Industry
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              July 22–23, 2026 • Manipal University Jaipur, Rajasthan, India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Tabs Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="gallery" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-md grid-cols-2 p-1.5 bg-muted/80 backdrop-blur rounded-xl border border-border/60 shadow-sm h-auto">
                <TabsTrigger
                  value="gallery"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <Camera className="h-4 w-4" />
                  <span>Photo Gallery</span>
                </TabsTrigger>
                <TabsTrigger
                  value="proceedings"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>Proceedings & Schedules</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: PHOTO GALLERY */}
            <TabsContent value="gallery" className="space-y-8 focus-visible:outline-none">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Glimpses of STESI 2026
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Memorable moments from keynote addresses, technical oral sessions, poster exhibits, discussions, and networking banquets.
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {galleryPhotos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-muted border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-white/5">
                      <img
                        src={`/gallery-2026/${photo}`}
                        alt={`STESI 2026 moment ${index + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur px-2.5 py-1 rounded-md">
                        Photo {index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* TAB 2: PROCEEDINGS & SCHEDULES */}
            <TabsContent value="proceedings" className="space-y-8 focus-visible:outline-none">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Conference Proceedings & Documents
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Access official documents, awards, schedules, and publication records from STESI 2026.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proceedingsItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Card className="h-full flex flex-col justify-between overflow-hidden border border-border/60 bg-gradient-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className={`h-2.5 w-full bg-gradient-to-r ${item.color}`} />
                        <CardContent className="p-6 flex flex-col flex-1 justify-between gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className={`p-2.5 rounded-lg bg-primary/10 text-primary`}>
                                <Icon className="h-6 w-6" />
                              </div>
                              <Badge variant={item.badgeVariant}>
                                {item.badge}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-2">
                            <Button
                              asChild
                              className="w-full font-semibold shadow-sm"
                              variant="outline"
                            >
                              <a
                                href={item.href}
                                download={item.opensInNewTab ? undefined : item.fileName}
                                target={item.opensInNewTab ? '_blank' : undefined}
                                rel={item.opensInNewTab ? 'noopener noreferrer' : undefined}
                                className="flex items-center justify-center gap-2"
                              >
                                {item.opensInNewTab ? (
                                  <>
                                    <span>Open Document</span>
                                    <ExternalLink className="h-4 w-4" />
                                  </>
                                ) : (
                                  <>
                                    <Download className="h-4 w-4" />
                                    <span>Download PDF</span>
                                  </>
                                )}
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black/60 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur">
                Photo {activePhotoIndex + 1} of {galleryPhotos.length}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors backdrop-blur focus:outline-none"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all backdrop-blur z-10 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Main Image */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/gallery-2026/${galleryPhotos[activePhotoIndex]}`}
                alt={`STESI 2026 preview ${activePhotoIndex + 1}`}
                className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all backdrop-blur z-10 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Stesi2026;
