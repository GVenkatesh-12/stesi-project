import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
  Maximize2,
  User,
  MapPin,
  CheckCircle2,
  BookOpen,
  Layers,
  Globe,
  Building2,
  Users,
  Eye,
  ArrowRight,
  Mic,
  Cpu,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const galleryPhotos = [
  'STESI-1.webp',
  'DSC_6722.webp',
  'DSC_6753.webp',
  'DSC_6760.webp',
  'DSC_6819.webp',
  'DSC_6822.webp',
  'DSC_6855.webp',
  'DSC_6858.webp',
  'DSC_6867.webp',
  'DSC_6884.webp',
  'DSC_6905.webp',
  'DSC_6909.webp',
  'Stesi1-6.webp',
  'Stesi1-35.webp',
  'Stesi1-69.webp',
  'Stesi1-80.webp',
  'Stesi1-84.webp',
  'Stesi1-96.webp',
  'Stesi1-102.webp',
  'Stesi1-110.webp',
  'Stesi1-183.webp',
  'Stesi1-191.webp',
  'Stesi1-214.webp',
  'Stesi1-219.webp',
  'Stesi1-224.webp',
  'Stesi1-226.webp',
  'Stesi1-228.webp',
  'Stesi1-237.webp',
  'Stesi1-240.webp',
  'Stesi1-241.webp',
  'Stesi1-245.webp',
  'Stesi1-246.webp',
  'Stesi1-247.webp',
  'Stesi1-316.webp',
  'Stesi1-320.webp',
  'Stesi1-326.webp',
  'Stesi2-23.webp',
  'Stesi2-128.webp',
  '42999be4-0141-43b7-ba9b-dc8dd13714c2.webp',
  'f11861c8-5272-4969-9060-d68e7cc60721.webp',
];

const keynoteSpeakers = [
  {
    name: 'Dr. André Eugenio Lazzaretti',
    title: 'Professor',
    organization: 'Federal University of Technology - Paraná (UTFPR), Brazil',
    image: '/speaker1.png',
    bio: 'Dr. André Eugenio Lazzaretti is a distinguished researcher and professor at UTFPR, specializing in pattern recognition, machine learning, digital signal processing, embedded systems, and instrumentation. He has published extensively in top-tier journals with over 100 peer-reviewed articles focusing on innovative algorithms for power grid monitoring and biomedical automation.',
    topic: 'AI for High-Frequency Power-Grid Data: Sensor Technologies, Data Quality, and Learning Frameworks',
    expertise: ['Pattern Recognition', 'Machine Learning', 'Signal Processing', 'Embedded Systems', 'Sensor Tech'],
    awards: ['IEEE Senior Member', 'Distinguished Researcher Award UTFPR', 'Best Paper Award IEEE SPS'],
  },
  {
    name: 'Dr. Fausto Pedro García Márquez',
    title: 'Professor & Director of Ingenium Research Group',
    organization: 'University of Castilla-La Mancha (UCLM), Ciudad Real, Spain',
    image: '/speaker2.png',
    bio: 'Fausto Pedro García Márquez is an internationally acclaimed authority in Artificial Intelligence, Renewable Energy Optimization, Smart Maintenance, and Advanced Analytics. He has authored over 200 high-impact journal articles and led numerous multinational European research projects.',
    topic: 'AI-Driven Solutions for Renewable Energy and Smart Transportation Systems',
    expertise: ['Artificial Intelligence', 'Renewable Energy', 'Smart Transport', 'Data Science', 'Maintenance Systems'],
    awards: ['Research Excellence Award UCLM', 'AI Innovation Prize', 'IEEE Senior Member', '200+ Publications'],
  },
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Professor (SMIEEE, Fellow IET, Fellow IE, Fellow IETE)',
    organization: 'University of Johannesburg, South Africa & Department of Electrical Engineering, MNIT Jaipur, India',
    image: '/speaker3.png',
    bio: 'Dr. Rajesh Kumar is a Professor of Artificial Intelligence at the University of Johannesburg and Professor of Electrical Engineering at MNIT Jaipur. He holds 20 patents, has published over 750 research articles, supervised 28 Ph.D. scholars, and delivered over 350 keynote addresses worldwide. He serves as an IEEE IAS Distinguished Lecturer.',
    topic: 'Intelligent Systems, Data Driven Algorithms, Computational Neuroscience, Energy, and Healthcare',
    expertise: ['Intelligent Systems', 'Data-Driven Algorithms', 'Power Systems', 'Computational Neuroscience', 'AI in Energy'],
    awards: ['SMIEEE', 'Fellow IET (UK)', 'Fellow IE (India)', 'IEEE IAS Distinguished Lecturer 2024-25', '20 Patents', '750+ Articles'],
  },
  {
    name: 'Dr. Almoataz Youssef Abdelaziz Mohamed',
    title: 'Professor',
    organization: 'Ain Shams University & Future University in Egypt, Cairo, Egypt',
    image: '/speaker4.png',
    bio: 'Dr. Almoataz Youssef is a globally recognized scholar in artificial intelligence, evolutionary algorithms, and heuristic optimization for power system operations, smart grids, and renewable integration. He ranks among Stanford University’s World Top 2% Scientists with over 400 published articles.',
    topic: 'Applications of Artificial Intelligence and Optimization in Modern Power Systems',
    expertise: ['Power System Planning', 'Evolutionary Algorithms', 'Smart Grids', 'Renewable Integration', 'Heuristic Optimization'],
    awards: ['Senior Member IEEE', 'Egyptian State Recognition Prize', 'Stanford World Top 2% Scientist', '400+ Publications'],
  },
  {
    name: 'Dr. Rajeeb Dey',
    title: 'Professor',
    organization: 'Department of Electrical Engineering, National Institute of Technology (NIT) Silchar, Assam, India',
    image: '/speaker5.png',
    bio: 'Dr. Rajeeb Dey is an expert in time-delay systems, robust control theory, and smart grid stability. He has served as General Secretary of the Automatic Control and Dynamic Optimization Society (ACDOS, IFAC-affiliated) and is an Associate Editor for IEEE Access and Scientific Reports.',
    topic: 'Delays in Power Systems: Stability, Control, and Real-World Applications',
    expertise: ['Time-Delay Systems', 'Robust Control', 'Power System Dynamics', 'Smart Grid Stability', 'ACDOS General Secretary'],
    awards: ['Senior Member IEEE', 'Fellow Institution of Engineers (India)', 'TWAS Postdoctoral Fellowship', 'Associate Editor IEEE Access'],
  },
  {
    name: 'Dr. Shubhendu Bhasin',
    title: 'Professor',
    organization: 'Department of Electrical Engineering, Indian Institute of Technology (IIT) Delhi, India',
    image: '/speaker6.png',
    bio: 'Dr. Shubhendu Bhasin is a Professor at IIT Delhi specializing in nonlinear, adaptive, and learning-based control with applications to robotics and human rehabilitation. He received his Ph.D. from the University of Florida and serves as an Associate Editor for IEEE AESS.',
    topic: 'Wearable Robotics for Human Assistance, Augmentation and Rehabilitation: Key Challenges and Opportunities',
    expertise: ['Nonlinear Control', 'Adaptive Control', 'Reinforcement Learning', 'Wearable Robotics', 'Autonomous Systems'],
    awards: ['Associate Editor IEEE AESS', 'Ph.D. University of Florida', '110+ Publications', '2500+ Citations'],
  },
  {
    name: 'Dr. Apurti Jain',
    title: 'Global Services Engineer - Inverter Controls',
    organization: 'GE Vernova, Chennai, India',
    image: '/speaker7.png',
    bio: 'Dr. Apurti Jain is an industry pioneer at GE Vernova Power Conversion and Storage, focusing on inverter controls and grid stability for international renewable fleets. She completed her Ph.D. at IIT Roorkee and contributed to the DST-funded international D-SIDES smart cities initiative.',
    topic: 'Virtual Synchronous Generator and Advanced Inverter Controls for Utility Grids',
    expertise: ['Inverter Controls', 'Virtual Synchronous Generators', 'Grid Stability', 'Power Electronics', 'Energy Storage'],
    awards: ['Member IEEE', 'Multiple GE Impact Awards', 'IEEE Smart Cities Award 2022', 'Best Paper Award IEEE ETFG-2023'],
  },
];

const proceedingsItems = [
  {
    title: 'Best Paper Award',
    category: 'Awards',
    description: 'Official recognition of outstanding peer-reviewed research papers presented at STESI 2026 based on novelty, rigor, and industrial relevance.',
    href: '/Best%20Paper_STESI2026.pdf',
    fileName: 'Best Paper_STESI2026.pdf',
    badge: 'Honors',
    badgeVariant: 'default' as const,
    icon: Award,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Best Poster Award',
    category: 'Awards',
    description: 'Honoring top technical poster presentations, visual methodology displays, and student research contributions.',
    href: '/Best%20Poster_STESI2026.pdf',
    fileName: 'Best Poster_STESI2026.pdf',
    badge: 'Honors',
    badgeVariant: 'default' as const,
    icon: Award,
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Master Program Schedule',
    category: 'Schedules',
    description: 'Comprehensive day-by-day timetable of inauguration, keynote addresses, parallel oral sessions, poster exhibits, and valedictory ceremony.',
    href: '/program%20schedule_STESI2026.pdf',
    fileName: 'program schedule_STESI2026.pdf',
    badge: 'Schedule',
    badgeVariant: 'secondary' as const,
    icon: Calendar,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Detailed Technical Session Schedule',
    category: 'Schedules',
    description: 'Track-wise paper presentation sequence, chair allocations, evaluator lists, and timing details across all conference tracks.',
    href: '/Detail_Technical%20Session_STESI2026.pdf',
    fileName: 'Detail_Technical Session_STESI2026.pdf',
    badge: 'Technical Sessions',
    badgeVariant: 'secondary' as const,
    icon: FileText,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Room-Wise Presentation Venues',
    category: 'Venues',
    description: 'Paper ID assignments to specific physical lecture rooms, seminar halls, and smart classrooms at Manipal University Jaipur.',
    href: '/paper-id_list_venue.pdf',
    fileName: 'paper-id_list_venue.pdf',
    badge: 'Venues',
    badgeVariant: 'outline' as const,
    icon: MapPin,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Virtual Keynote & Oral Session Links',
    category: 'Virtual',
    description: 'Official virtual meeting links and access guidelines for international authors, keynote speakers, and remote attendees.',
    href: '/Links%20of%20Keynote%20and%20Oral%20sessions.pdf',
    fileName: 'Links of Keynote and Oral sessions.pdf',
    badge: 'Hybrid / Online',
    badgeVariant: 'outline' as const,
    icon: ExternalLink,
    color: 'from-cyan-500 to-blue-600',
    opensInNewTab: true,
  },
  {
    title: 'Accepted & Registered Papers Catalogue',
    category: 'Publications',
    description: 'Full official roster of peer-reviewed papers accepted and registered for inclusion in the STESI 2026 conference proceedings.',
    href: '/Accepted%20and%20Registered%20papers.pdf',
    fileName: 'Accepted and Registered papers.pdf',
    badge: 'Proceedings',
    badgeVariant: 'default' as const,
    icon: CheckCircle2,
    color: 'from-indigo-600 to-blue-700',
  },
  {
    title: 'STESI 2026 Call For Papers Brochure',
    category: 'Publications',
    description: 'Archived conference brochure outlining the original submission guidelines, scopes, track descriptions, and IEEE sponsorship info.',
    href: '/STESI-Call_for_Paper.pdf',
    fileName: 'STESI-Call_for_Paper.pdf',
    badge: 'Brochure',
    badgeVariant: 'outline' as const,
    icon: BookOpen,
    color: 'from-teal-600 to-emerald-700',
  },
];

const specialSessions = [
  { id: 'SS-01', title: 'Special Session on Smart Energy Systems', chair: 'Dr. Sachidananda Sen', file: '/SS_01_Sachidananda_Sen.pdf' },
  { id: 'SS-02', title: 'Special Session on Power Electronics Applications', chair: 'Dr. Subhendu Sahoo', file: '/SS_02_Subhendu_Sahoo.pdf' },
  { id: 'SS-03', title: 'Special Session on Renewable Energy Integration', chair: 'Dr. Satyendra Singh', file: '/SS_03_Satyendra_Singh.pdf' },
  { id: 'SS-04', title: 'Special Session on Intelligent Control Systems', chair: 'Dr. Saurav Raj', file: '/SS_04_Saurav_Raj.pdf' },
  { id: 'SS-05', title: 'Special Session on EV & Battery Management', chair: 'Dr. Nishant Kumar', file: '/SS_05_Nishant_Kumar.pdf' },
  { id: 'SS-06', title: 'Special Session on AI in Power Grid Dynamics', chair: 'Dr. Nirmalya Mallick', file: '/SS_06_Nirmalya_Mallick.pdf' },
  { id: 'SS-07', title: 'Special Session on Industrial Automation & IoT', chair: 'Dr. Amit Yadav', file: '/SS_07_Amit_Yadav.pdf' },
];

const keynoteLinksFile = '/links%20of%20keynote%20speakers.xlsx';
const urlPattern = /^https?:\/\/\S+$/i;

type KeynoteLinkCell = {
  value: string;
  colSpan: number;
  rowSpan: number;
  isHeader: boolean;
};

const Stesi2026 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get('tab');
  const validTabs = ['overview', 'gallery', 'proceedings', 'speakers'];
  const activeTab = validTabs.includes(rawTab || '') ? rawTab! : 'overview';

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keynote schedule preview dialog state
  const [isLinksPreviewOpen, setIsLinksPreviewOpen] = useState(false);
  const [keynoteLinksRows, setKeynoteLinksRows] = useState<KeynoteLinkCell[][]>([]);
  const [isLoadingLinks, setIsLoadingLinks] = useState(false);
  const [linksPreviewError, setLinksPreviewError] = useState('');

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev! + 1) % galleryPhotos.length);
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

  useEffect(() => {
    if (!isLinksPreviewOpen || keynoteLinksRows.length > 0) {
      return;
    }

    let isMounted = true;

    async function loadKeynoteLinks() {
      setIsLoadingLinks(true);
      setLinksPreviewError('');

      try {
        const [xlsx, response] = await Promise.all([
          import('xlsx'),
          fetch(keynoteLinksFile),
        ]);

        if (!response.ok) {
          throw new Error('Unable to load the keynote speaker links file.');
        }

        const data = await response.arrayBuffer();
        const workbook = xlsx.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = xlsx.utils.decode_range(firstSheet['!ref'] ?? 'A1:A1');
        const merges = firstSheet['!merges'] ?? [];
        const occupiedCells = new Set<string>();
        const skippedCells = new Set<string>();

        for (let rowIndex = range.s.r; rowIndex <= range.e.r; rowIndex += 1) {
          for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex += 1) {
            const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: colIndex });
            const cellValue = firstSheet[cellAddress]?.v;

            if (cellValue !== undefined && cellValue !== null && String(cellValue).trim()) {
              occupiedCells.add(cellAddress);
            }
          }
        }

        const visibleMerges = merges.filter((merge) => {
          const startAddress = xlsx.utils.encode_cell(merge.s);
          return occupiedCells.has(startAddress);
        });

        const minRow = Math.min(
          ...Array.from(occupiedCells).map((address) => xlsx.utils.decode_cell(address).r)
        );
        const maxRow = Math.max(
          ...Array.from(occupiedCells).map((address) => xlsx.utils.decode_cell(address).r)
        );
        const minCol = Math.min(
          ...Array.from(occupiedCells).map((address) => xlsx.utils.decode_cell(address).c)
        );
        const maxCol = Math.max(
          ...Array.from(occupiedCells).map((address) => xlsx.utils.decode_cell(address).c)
        );

        const mergeByStart = new Map<string, { colSpan: number; rowSpan: number }>();
        visibleMerges.forEach((merge) => {
          const startAddress = xlsx.utils.encode_cell(merge.s);
          mergeByStart.set(startAddress, {
            colSpan: merge.e.c - merge.s.c + 1,
            rowSpan: merge.e.r - merge.s.r + 1,
          });

          for (let rowIndex = merge.s.r; rowIndex <= merge.e.r; rowIndex += 1) {
            for (let colIndex = merge.s.c; colIndex <= merge.e.c; colIndex += 1) {
              const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: colIndex });
              if (cellAddress !== startAddress) {
                skippedCells.add(cellAddress);
              }
            }
          }
        });

        const rows: KeynoteLinkCell[][] = [];
        for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex += 1) {
          const row: KeynoteLinkCell[] = [];

          for (let colIndex = minCol; colIndex <= maxCol; colIndex += 1) {
            const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: colIndex });

            if (skippedCells.has(cellAddress)) {
              continue;
            }

            const merge = mergeByStart.get(cellAddress);
            const cell = firstSheet[cellAddress];
            row.push({
              value: cell ? String(xlsx.utils.format_cell(cell)).trim() : '',
              colSpan: merge?.colSpan ?? 1,
              rowSpan: merge?.rowSpan ?? 1,
              isHeader: rowIndex === minRow,
            });
          }

          if (row.length > 0) {
            rows.push(row);
          }
        }

        if (isMounted) {
          setKeynoteLinksRows(rows);
        }
      } catch (error) {
        if (isMounted) {
          setLinksPreviewError(
            error instanceof Error ? error.message : 'Failed to parse keynote schedule spreadsheet.'
          );
        }
      } finally {
        if (isMounted) {
          setIsLoadingLinks(false);
        }
      }
    }

    loadKeynoteLinks();

    return () => {
      isMounted = false;
    };
  }, [isLinksPreviewOpen, keynoteLinksRows.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/15 via-background to-background border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Official Conference Archive & Retrospective</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-3 font-heading tracking-tight">
              STESI 2026 Archive
            </h1>
            <p className="text-lg sm:text-xl text-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
              1st International Conference on Smart Technologies for Energy, Sustainability & Industry
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                July 22–23, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Manipal University Jaipur, Rajasthan, India
              </span>
              <span>•</span>
              <Badge variant="secondary" className="font-semibold text-xs">
                IEEE Technically Sponsored
              </Badge>
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-8">
              <div className="p-3.5 rounded-xl bg-card border border-border/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">400+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Submissions Received</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">7</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Global Keynote Experts</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">6 + 7</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Tracks & Special Sessions</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">150+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Accepted & Published Papers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Tabs Navigation Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 sm:grid-cols-4 p-1.5 bg-muted/80 backdrop-blur rounded-xl border border-border/60 shadow-sm h-auto gap-1">
                <TabsTrigger
                  value="overview"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="gallery"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <Camera className="h-4 w-4" />
                  <span>Photo Gallery</span>
                </TabsTrigger>
                <TabsTrigger
                  value="proceedings"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>Proceedings</span>
                </TabsTrigger>
                <TabsTrigger
                  value="speakers"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <Mic className="h-4 w-4" />
                  <span>Keynote Speakers</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: OVERVIEW & IMPACT */}
            <TabsContent value="overview" className="space-y-10 focus-visible:outline-none">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Inaugural Edition Snapshot
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Relive the milestone inaugural edition of STESI, held at Manipal University Jaipur in technical co-sponsorship with IEEE Delhi Section and IEEE PES Delhi Chapter.
                </p>
              </div>

              {/* Overview Narrative Card */}
              <Card className="border border-border/60 bg-gradient-card shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-wider text-xs">
                      Conference Mission & Summary
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Pioneering Smart Technologies for a Sustainable Industrial Future
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      The 1st International Conference on Smart Technologies for Energy, Sustainability & Industry (STESI 2026) brought together visionary scientists, researchers, industry practitioners, and policymakers on July 22–23, 2026 at Manipal University Jaipur. The conference served as a premier multidisciplinary platform addressing urgent technological challenges across clean energy transformation, artificial intelligence for electrical systems, smart microgrids, electric vehicle integration, robotics, and industrial automation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-lg bg-background/60 border border-border/50">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Zap className="h-4 w-4" />
                        <span>Clean Energy Transition</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        In-depth presentations on solar, wind, green hydrogen, and advanced microgrid energy storage architectures.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/60 border border-border/50">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Cpu className="h-4 w-4" />
                        <span>AI & Smart Systems</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        High-frequency power grid data analytics, machine learning control, wearable robotics, and intelligent algorithms.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/60 border border-border/50">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Globe className="h-4 w-4" />
                        <span>Global Collaboration</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Hybrid global exchange linking keynote speakers and authors across India, Spain, Brazil, Egypt, and South Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Technical Tracks Breakdown */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>STESI 2026 Core Technical Tracks</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      num: 'Track 1',
                      title: 'Smart Grid Technologies & Renewable Energy Systems',
                      desc: 'Microgrid operation, renewable energy integration, distribution systems, solar/wind power generation.',
                    },
                    {
                      num: 'Track 2',
                      title: 'Power Electronics, Electric Vehicles & Energy Storage',
                      desc: 'Converter architectures, battery management systems, EV charging stations, virtual synchronous machines.',
                    },
                    {
                      num: 'Track 3',
                      title: 'AI, IoT & Machine Learning for Energy Systems',
                      desc: 'Deep learning for load forecasting, smart meters, high-frequency grid analytics, edge AI monitoring.',
                    },
                    {
                      num: 'Track 4',
                      title: 'Industrial Automation, Robotics & Control Systems',
                      desc: 'Wearable assistive robotics, nonlinear and adaptive control theory, industrial IoT, cyber-physical automation.',
                    },
                    {
                      num: 'Track 5',
                      title: 'Sustainable Materials & Green Technologies',
                      desc: 'Eco-friendly materials, energy harvesting, circular economy frameworks, carbon neutrality technologies.',
                    },
                    {
                      num: 'Track 6',
                      title: 'Communications, Cybersecurity & Cloud Infrastructure',
                      desc: 'Substation security, secure industrial protocols, cloud data platforms, resilient control architectures.',
                    },
                  ].map((track) => (
                    <Card key={track.num} className="bg-card border border-border/60 p-5">
                      <Badge variant="outline" className="mb-2 text-xs font-semibold text-primary border-primary/30">
                        {track.num}
                      </Badge>
                      <h4 className="font-bold text-foreground text-sm mb-1.5">{track.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{track.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Action Hub */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <Card
                  onClick={() => handleTabChange('gallery')}
                  className="cursor-pointer group hover:border-primary/50 transition-all p-5 bg-card hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Camera className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-foreground text-base">Photo Gallery</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Keynote addresses, technical sessions, poster exhibits, and networking moments.
                  </p>
                </Card>

                <Card
                  onClick={() => handleTabChange('proceedings')}
                  className="cursor-pointer group hover:border-primary/50 transition-all p-5 bg-card hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-foreground text-base">Proceedings & Documents</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Download Best Paper awards, schedules, accepted papers list, and session files.
                  </p>
                </Card>

                <Card
                  onClick={() => handleTabChange('speakers')}
                  className="cursor-pointer group hover:border-primary/50 transition-all p-5 bg-card hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Mic className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-foreground text-base">Keynote Speakers</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Meet the 7 plenary speakers from Brazil, Spain, South Africa, Egypt, and India.
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* TAB 2: PHOTO GALLERY (Optimized WebP, Dual Resolution, Zero Lag) */}
            <TabsContent value="gallery" className="space-y-8 focus-visible:outline-none">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  <Camera className="h-3.5 w-3.5" />
                  <span>Conference Gallery</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Glimpses of STESI 2026
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Moments from keynote sessions, technical oral presentations, poster evaluations, award ceremonies, and banquet networking.
                </p>
              </div>

              {/* Photo Grid with Lazy Loading and WebP Thumbnails */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {galleryPhotos.map((photo, index) => (
                  <motion.div
                    key={photo}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-muted border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-white/5">
                      <img
                        src={`/gallery-2026/thumbs/${photo}`}
                        alt={`STESI 2026 conference photo ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* TAB 3: PROCEEDINGS & DOCUMENTS */}
            <TabsContent value="proceedings" className="space-y-10 focus-visible:outline-none">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Official Downloads & Records</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Conference Proceedings & Documents
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Access official documents, awards, schedules, accepted paper registers, and special session tracks from STESI 2026.
                </p>
              </div>

              {/* Main Documents Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proceedingsItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                    >
                      <Card className="h-full flex flex-col justify-between overflow-hidden border border-border/60 bg-gradient-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className={`h-2.5 w-full bg-gradient-to-r ${item.color}`} />
                        <CardContent className="p-6 flex flex-col flex-1 justify-between gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-6 w-6" />
                              </div>
                              <Badge variant={item.badgeVariant}>
                                {item.badge}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold text-foreground leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-2">
                            <Button
                              asChild
                              className="w-full font-semibold shadow-sm text-xs sm:text-sm"
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

              {/* Special Sessions Section */}
              <div className="mt-12 pt-8 border-t border-border/60">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <span>STESI 2026 Special Session Brochures</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Download call brochures for the 7 specialized tracks organized by distinguished session chairs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {specialSessions.map((session) => (
                    <Card key={session.id} className="p-4 bg-card border border-border/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30">
                            {session.id}
                          </Badge>
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground mb-1 line-clamp-1">
                          {session.chair}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                          {session.title}
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="w-full text-xs">
                        <a href={session.file} download={`${session.id}.pdf`} className="flex items-center justify-center gap-1.5">
                          <Download className="h-3.5 w-3.5" />
                          <span>Download Track PDF</span>
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* TAB 4: KEYNOTE SPEAKERS */}
            <TabsContent value="speakers" className="space-y-10 focus-visible:outline-none">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  <Mic className="h-3.5 w-3.5" />
                  <span>Plenary & Keynote Addresses</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  STESI 2026 Keynote Speakers
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  World-renowned authorities from Brazil, Spain, South Africa, Egypt, and India who shared breakthrough research at STESI 2026.
                </p>
              </div>

              {/* Action Bar for Schedule Spreadsheet */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pb-2">
                <Button
                  variant="outline"
                  onClick={() => setIsLinksPreviewOpen(true)}
                  className="flex items-center gap-2 w-full sm:w-auto"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview Keynote Schedule Spreadsheet</span>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="flex items-center gap-2 w-full sm:w-auto"
                >
                  <a href={keynoteLinksFile} download="links of keynote speakers.xlsx">
                    <Download className="h-4 w-4" />
                    <span>Download Schedule (.xlsx)</span>
                  </a>
                </Button>
              </div>

              {/* Speakers Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {keynoteSpeakers.map((speaker, index) => (
                  <motion.div
                    key={speaker.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <Card className="h-full bg-card border border-border/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
                      <div className="p-6 space-y-5">
                        {/* Speaker Header with Avatar & Details */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="relative shrink-0">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              loading="lazy"
                              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-primary/30 shadow-md"
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground">
                              {speaker.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-primary">
                              {speaker.title}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Building2 className="h-3.5 w-3.5 shrink-0" />
                              <span>{speaker.organization}</span>
                            </p>
                          </div>
                        </div>

                        {/* Presentation Topic Box */}
                        <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/15">
                          <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                            Keynote Address Topic
                          </span>
                          <p className="text-sm font-medium text-foreground">
                            "{speaker.topic}"
                          </p>
                        </div>

                        {/* Bio Text */}
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {speaker.bio}
                        </p>

                        {/* Research Expertise Tags */}
                        <div>
                          <span className="text-[11px] font-semibold text-muted-foreground block mb-2">
                            Research Areas:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {speaker.expertise.map((area) => (
                              <Badge key={area} variant="secondary" className="text-[11px] py-0.5">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Awards & Honors */}
                        <div>
                          <span className="text-[11px] font-semibold text-muted-foreground block mb-2">
                            Recognitions & Honors:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {speaker.awards.map((award) => (
                              <Badge key={award} variant="outline" className="text-[11px] py-0.5 border-primary/20 text-foreground/90">
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal (Full Screen with Display-Resolution WebP) */}
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
              <div className="bg-black/60 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur border border-white/10">
                {activePhotoIndex + 1} / {galleryPhotos.length}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`/gallery-2026/display/${galleryPhotos[activePhotoIndex]}`}
                  download={galleryPhotos[activePhotoIndex]}
                  className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors backdrop-blur border border-white/10 focus:outline-none"
                  aria-label="Download photo"
                  title="Download photo"
                >
                  <Download className="h-5 w-5" />
                </a>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors backdrop-blur border border-white/10 focus:outline-none"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all backdrop-blur z-10 focus:outline-none border border-white/10"
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
                src={`/gallery-2026/display/${galleryPhotos[activePhotoIndex]}`}
                alt={`STESI 2026 conference highlight ${activePhotoIndex + 1}`}
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
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white/20 text-white transition-all backdrop-blur z-10 focus:outline-none border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keynote Schedule Spreadsheet Preview Dialog */}
      <Dialog open={isLinksPreviewOpen} onOpenChange={setIsLinksPreviewOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] flex flex-col p-6">
          <DialogHeader className="shrink-0 pb-4 border-b border-border/60">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pr-6">
              <div>
                <DialogTitle className="text-xl font-bold">
                  STESI 2026 Keynote Schedule & Session Links
                </DialogTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Table parsed directly from the official keynote sessions spreadsheet.
                </p>
              </div>
              <Button asChild size="sm" variant="outline" className="shrink-0">
                <a href={keynoteLinksFile} download="links of keynote speakers.xlsx" className="flex items-center gap-1.5">
                  <Download className="h-4 w-4" />
                  <span>Download .xlsx</span>
                </a>
              </Button>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-auto mt-4">
            {isLoadingLinks && (
              <div className="py-12 text-center text-sm text-muted-foreground">
                Loading schedule spreadsheet data...
              </div>
            )}

            {linksPreviewError && (
              <div className="py-8 text-center text-sm text-destructive">
                {linksPreviewError}
              </div>
            )}

            {!isLoadingLinks && !linksPreviewError && keynoteLinksRows.length > 0 && (
              <div className="rounded-md border border-border/60 overflow-hidden">
                <Table>
                  <TableBody>
                    {keynoteLinksRows.map((row, rowIndex) => (
                      <TableRow key={rowIndex} className={row.some((c) => c.isHeader) ? 'bg-muted/50 font-semibold' : ''}>
                        {row.map((cell, colIndex) => {
                          const isUrl = urlPattern.test(cell.value);
                          return (
                            <TableCell
                              key={colIndex}
                              colSpan={cell.colSpan}
                              rowSpan={cell.rowSpan}
                              className="p-3 text-xs sm:text-sm border border-border/40 align-top"
                            >
                              {isUrl ? (
                                <a
                                  href={cell.value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary underline flex items-center gap-1 break-all"
                                >
                                  <span>{cell.value}</span>
                                  <ExternalLink className="h-3 w-3 shrink-0" />
                                </a>
                              ) : (
                                <span className="whitespace-pre-line">{cell.value}</span>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Stesi2026;
