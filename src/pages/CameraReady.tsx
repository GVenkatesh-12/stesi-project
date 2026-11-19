import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Upload,
  FileText,
  Calendar,
  AlertCircle,
  Download,
  Clock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const CameraReady = () => {
  const timeline = [
    {
      date: "December 1, 2026",
      milestone: "First Call for Papers",
      description: "Submissions open for STESI 2027 across 7 conference tracks",
      status: "upcoming"
    },
    {
      date: "March 15, 2027",
      milestone: "Paper Submission Deadline",
      description: "Final date to submit original manuscripts via CMT portal",
      status: "upcoming"
    },
    {
      date: "April 15, 2027",
      milestone: "Notification of Acceptance",
      description: "Authors receive peer-review outcomes and reviewer comments",
      status: "upcoming"
    },
    {
      date: "April 30, 2027",
      milestone: "Camera-Ready Submission Deadline",
      description: "Submission of revised, camera-ready papers and IEEE copyright clearance",
      status: "upcoming"
    },
    {
      date: "July 5, 2027",
      milestone: "Registration Deadline",
      description: "Author registration must be completed for inclusion in proceedings",
      status: "upcoming"
    },
    {
      date: "August 5–6, 2027",
      milestone: "STESI 2027 Conference",
      description: "Hybrid oral presentations, keynote talks, and awards at MUJ",
      status: "upcoming"
    }
  ];

  const requirements = [
    {
      title: "Page Limit",
      description: "4 to 6 pages maximum (strict IEEE two-column conference format).",
      icon: FileText
    },
    {
      title: "IEEE Template",
      description: "Must strictly adhere to official IEEE conference templates (Word/LaTeX).",
      icon: FileText
    },
    {
      title: "Plagiarism Threshold",
      description: "Must be less than 15% similarity index (checked via standard tools).",
      icon: ShieldCheck
    },
    {
      title: "Author Registration & Multiple Papers",
      description: "At least one author must register and present the paper. If registering two papers (max limit per author), the second paper fee is 50% of the applicable rate.",
      icon: Upload
    }
  ];

  const checklist = [
    "Paper follows official IEEE two-column conference format",
    "Length is strictly between 4 and 6 pages (including figures and references)",
    "Maximum limit of two papers per author across all authorship roles is respected",
    "All reviewer comments and feedback have been addressed",
    "All author names, affiliations, and emails are verified and up to date",
    "References follow IEEE citation format",
    "Figures, graphs, and tables are high resolution (300 DPI minimum)",
    "IEEE copyright clearance code is added as per upcoming instructions",
    "PDF is verified through IEEE PDF eXpress (details provided on acceptance)"
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
              <span>STESI 2027 Author Guidelines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 font-heading">
              Camera-Ready Submission
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Guidelines for preparing and submitting the final version of your accepted paper for STESI 2027.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/30">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Camera-Ready Deadline: <strong>April 30, 2027</strong>
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                IEEE Format Required
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status Notice */}
      <section className="py-8 bg-muted/30 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 dark:text-amber-200 text-base mb-1">
                    Portal Instructions Under Preparation
                  </h3>
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                    The final camera-ready submission system, IEEE PDF eXpress conference code, and electronic copyright transfer (eCF) portal for STESI 2027 will be communicated directly to corresponding authors upon notification of paper acceptance on <strong>April 15, 2027</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">Key Milestones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Important dates for paper submission, acceptance, camera-ready preparation, and conference presentation.
            </p>
          </motion.div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border border-border/60 hover:border-primary/40 transition-colors shadow-sm">
                  <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base">{item.milestone}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit font-semibold text-primary border-primary/30 shrink-0">
                      {item.date}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">Manuscript Formatting Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              All camera-ready submissions must satisfy standard IEEE publication standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <motion.div
                  key={req.title}
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
                      <CardTitle className="text-lg font-bold">{req.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                      {req.description}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-Submission Checklist */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">Pre-Submission Checklist</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Verify your final manuscript against these guidelines before uploading.
            </p>
          </motion.div>

          <Card className="bg-card border border-border/60 shadow-card">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="outline">
                  <a href="/templates" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Download IEEE Templates</span>
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-primary text-primary-foreground">
                  <a href="mailto:stesi@jaipur.manipal.edu" className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>Queries: stesi@jaipur.manipal.edu</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CameraReady;
