import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  CreditCard,
  Users,
  FileText,
  Coffee,
  Wifi,
  CalendarClock,
  Sparkles,
  Mail,
  Info,
  ExternalLink,
  Clock
} from 'lucide-react';

const Registration = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Conference Proceedings",
      description: "Eligible accepted and registered papers will be submitted for inclusion into IEEE Xplore proceedings."
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with global researchers, industry leaders, and pioneers in green hydrogen and smart energy systems."
    },
    {
      icon: Coffee,
      title: "Conference Kit & Sessions",
      description: "Access to all keynote addresses, technical oral tracks, poster presentations, and interactive discussions."
    },
    {
      icon: Wifi,
      title: "Digital Certificate",
      description: "Official presentation and participation certificates for registered delegates."
    }
  ];

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
              <span>STESI 2027 Registration</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 font-heading">
              Conference Registration
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              2nd International Conference on Smart Technologies for Energy, Sustainability & Industry (STESI 2027)
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 text-foreground">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Registration Starts: <strong>May 5, 2027</strong>
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 text-foreground">
                <CalendarClock className="h-4 w-4 mr-2 text-red-500" />
                Registration Deadline: <strong>July 5, 2027</strong>
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Status Banner */}
      <section className="py-8 bg-muted/40 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <CreditCard className="h-8 w-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Online Registration Portal Coming Soon
                </h2>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Pricing (From Draft Todo) */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">Registration Fee Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Tentative budget estimates and registration categories for STESI 2027. Discounted rates apply for IEEE members.
            </p>
          </motion.div>

          {/* Pricing Table */}
          <div className="overflow-x-auto bg-card rounded-xl shadow-card border border-border/70 max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-left font-bold text-primary-foreground text-sm sm:text-base py-4 px-6 border-r border-white/20">
                    Category
                  </TableHead>
                  <TableHead className="text-center font-bold text-primary-foreground text-sm sm:text-base py-4 px-6 border-r border-white/20">
                    IEEE Member
                  </TableHead>
                  <TableHead className="text-center font-bold text-primary-foreground text-sm sm:text-base py-4 px-6">
                    Non-IEEE Member
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Indian Participants Header */}
                <TableRow className="bg-muted/70 hover:bg-muted/70">
                  <TableCell colSpan={3} className="text-center font-bold text-primary py-2.5 px-4 text-xs uppercase tracking-wider border-b border-border">
                    Indian Participants (Offline Mode)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-muted/50 border-b border-border/60">
                  <TableCell className="font-semibold text-foreground pl-6 py-4 px-4 border-r border-border/60">
                    Student Member
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-4 px-4 border-r border-border/60">
                    ₹8,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-foreground text-base py-4 px-4">
                    ₹10,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-muted/50 border-b border-border/60 bg-muted/20">
                  <TableCell className="font-semibold text-foreground pl-6 py-4 px-4 border-r border-border/60">
                    Academician
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-4 px-4 border-r border-border/60">
                    ₹11,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-foreground text-base py-4 px-4">
                    ₹13,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-muted/50 border-b border-border/60">
                  <TableCell className="font-semibold text-foreground pl-6 py-4 px-4 border-r border-border/60">
                    Industry Professional
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-4 px-4 border-r border-border/60">
                    ₹13,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-foreground text-base py-4 px-4">
                    ₹15,000
                  </TableCell>
                </TableRow>

                {/* Foreign Participants Header */}
                <TableRow className="bg-muted/70 hover:bg-muted/70">
                  <TableCell colSpan={3} className="text-center font-bold text-primary py-2.5 px-4 text-xs uppercase tracking-wider border-b border-border">
                    International Participants (Online Presentation Allowed)
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-semibold text-foreground pl-6 py-4 px-4 border-r border-border/60">
                    International Author / Participant
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-4 px-4 border-r border-border/60">
                    $200 USD
                  </TableCell>
                  <TableCell className="text-center font-bold text-foreground text-base py-4 px-4">
                    $300 USD
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Registration Notes */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="border border-border/60 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-primary font-bold">
                  <Info className="h-5 w-5" />
                  <span>Important Notes</span>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">•</span>
                    <span><strong>Presentation Mode:</strong> The conference is in <strong>Offline Mode</strong> for all national authors. Online presentation is permitted exclusively for international authors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">•</span>
                    <span><strong>Registration Coverage:</strong> At least one author must register with Full Author Registration and present the accepted paper for inclusion in the proceedings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">•</span>
                    <span><strong>Multiple Papers:</strong> One full author offline registration allows presentation of up to 2 accepted papers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">•</span>
                    <span><strong>Accommodation:</strong> Accommodation is not included in the registration fee and has to be managed independently by participants.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">•</span>
                    <span><strong>Queries:</strong> For any registration or fee related questions, please write to <a href="mailto:stesi@jaipur.manipal.edu" className="text-primary underline">stesi@jaipur.manipal.edu</a>.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">What's Included in Registration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Every registered attendee gains complete access to technical sessions, keynotes, and academic networking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="text-center pb-2">
                      <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                      {benefit.description}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
