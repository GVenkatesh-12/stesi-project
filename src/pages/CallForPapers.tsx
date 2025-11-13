import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, Users, Award, Download, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';

const CallForPapers = () => {
  const submissionGuidelines = [
    {
      icon: Award,
      title: 'IEEE Xplore Publication',
      description: 'Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore\'s scope and quality requirements.',
    },
    {
      icon: Users,
      title: 'Single-Blind Review',
      description: 'All submissions undergo single-blind peer review by three expert reviewers.',
    },
    {
      icon: FileText,
      title: 'IEEE Paper Format',
      description: 'Papers must follow IEEE conference format with maximum 6 pages including references. Use official IEEE templates.',
    },
    {
      icon: Calendar,
      title: 'Presentation Requirement',
      description: 'Authors of accepted papers must register and present their work at the conference.',
    },
  ];

  const detailedRequirements = [
    {
      category: "Paper Formatting",
      requirements: [
        "IEEE conference format (two-column layout)",
        "Maximum 6 pages including references",
        "Times New Roman, 10pt font for body text",
        "Single line spacing with 0.75 inch margins",
        "No page numbers, headers, or footers",
        "Figures and tables must be high resolution (300 DPI minimum)"
      ]
    },
    {
      category: "Submission Requirements",
      requirements: [
        "Submit via Microsoft CMT submission system",
        "PDF format only (no Word documents)",
        "Remove author names and affiliations for blind review",
        "Include complete references in IEEE citation style",
        "Minimum 15 references recommended",
        "Abstract: 150-200 words maximum"
      ]
    },
    {
      category: "Review Process",
      requirements: [
        "Single-blind peer review by three experts",
        "Plagiarism check via Turnitin (max 15% similarity)",
        "Technical quality and relevance assessment",
        "Notification of acceptance/rejection with feedback",
        "Camera-ready submission after acceptance"
      ]
    },
    {
      category: "Publication Standards",
      requirements: [
        "IEEE Xplore Digital Library publication",
        "IEEE conference proceedings indexing",
        "DOI assignment for each paper",
        "Copyright transfer to IEEE required",
        "Open access through IEEE Xplore",
        "Professional indexing in major databases"
      ]
    }
  ];

  const tracks = [
    'Smart Grids & Green Energy',
    'Smart Technologies for Industries',
    'IOT and Automation',
    'Signal Processing & Intelligent Systems',
    'Advanced Computing and Intelligent Technologies ',
    'Materials Science and Engineering',
    'Energy Policy, Regulation, and Electricity Markets',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Call for Papers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your research contributions to STESI 2026 and join the global community of researchers advancing Smart Technologies for Energy, Sustainability & Industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Important Submission Dates
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Paper Submission Deadline', date: 'February 15, 2026', color: 'text-red-500' },
              { title: 'Notification of Acceptance', date: 'April 15, 2026', color: 'text-orange-500' },
              { title: 'Camera Ready Submission', date: 'April 30, 2026', color: 'text-blue-500' },
              { title: 'Conference Dates', date: 'July 22-23, 2026', color: 'text-green-500' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${item.color}`}>
                      {item.date}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Submission Guidelines
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {submissionGuidelines.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Detailed Submission Requirements
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {detailedRequirements.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-card border border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{section.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Plagiarism Policy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-card border border-border/50 shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  <CardTitle className="text-xl text-primary">Plagiarism Policy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    All submitted papers will undergo plagiarism detection using Turnitin. Papers with similarity index exceeding <strong>15%</strong> will be rejected automatically.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive">Maximum Similarity: 15%</Badge>
                    <Badge variant="secondary">Tool: Turnitin</Badge>
                    <Badge variant="outline">Automatic Rejection</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Self-citations and common phrases are excluded from similarity calculations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submission Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-lg p-8 shadow-card mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Conference Tracks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tracks.map((track, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{track}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Templates and Submission Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-lg p-8 shadow-card mb-12"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Templates & Submission System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3">IEEE Paper Templates</h4>
                <p className="text-muted-foreground mb-4">
                  Download official IEEE templates to ensure proper formatting
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/templates" className="flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Templates
                  </a>
                </Button>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3">Microsoft CMT Submission</h4>
                <p className="text-muted-foreground mb-4">
                  Submit your paper through our official submission system
                </p>
                <Button className="w-full" asChild>
                  <a href="https://cmt3.research.microsoft.com/STESI2026" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Submit Paper
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div> */}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <Button size="lg" variant="conference" className="w-full sm:w-auto" asChild>
              <a href="https://cmt3.research.microsoft.com/STESI2026" target="_blank" rel="noopener noreferrer">
                Submit Paper via CMT
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/templates">
                Download IEEE Templates
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Microsoft CMT Acknowledgment */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForPapers;