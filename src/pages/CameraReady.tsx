import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Upload, FileText, Calendar, AlertCircle, Download } from 'lucide-react';

const CameraReady = () => {
  const timeline = [
    {
      date: "April 15, 2026",
      milestone: "Notification of Acceptance",
      description: "Authors receive notification of paper acceptance",
      status: "completed"
    },
    {
      date: "April 30, 2026",
      milestone: "Camera-Ready Submission Deadline",
      description: "Final versions of accepted papers must be submitted",
      status: "upcoming"
    },
    {
      date: "Coming Soon",
      milestone: "Copyright Transfer",
      description: "IEEE copyright forms must be completed",
      status: "upcoming"
    },
    {
      date: "Coming Soon",
      milestone: "Final Publication",
      description: "Papers processed for IEEE Xplore publication",
      status: "upcoming"
    }
  ];

  const requirements = [
    {
      title: "Page Limit",
      description: "6 pages maximum for regular papers",
      icon: FileText
    },
    {
      title: "Format",
      description: "IEEE conference template",
      icon: FileText
    },
    {
      title: "File Format",
      description: "PDF format only, with embedded fonts",
      icon: Upload
    },
    {
      title: "File Size",
      description: "Maximum 10 MB per submission",
      icon: Upload
    }
  ];

  const submissionSteps = [
    {
      step: 1,
      title: "Revise Your Paper",
      description: "Address all reviewer comments and suggestions. Ensure your paper follows the camera-ready guidelines.",
      tasks: [
        "Incorporate reviewer feedback",
        "Check formatting requirements",
        "Verify all references are complete",
        "Proofread for language and clarity"
      ]
    },
    {
      step: 2,
      title: "Format According to IEEE Standards",
      description: "Use the official IEEE conference template and follow all formatting guidelines.",
      tasks: [
        "Download the latest IEEE template",
        "Apply the template to your paper",
        "Check margins, fonts, and spacing",
        "Ensure figures and tables are high quality"
      ]
    },
    {
      step: 3,
      title: "Generate PDF",
      description: "Create a final PDF version of your paper with all fonts embedded.",
      tasks: [
        "Export to PDF with embedded fonts",
        "Verify PDF is error-free",
        "Check file size (max 10 MB)",
        "Test PDF compatibility"
      ]
    },
    {
      step: 4,
      title: "Submit Through Portal",
      description: "Upload your camera-ready paper through the conference submission system.",
      tasks: [
        "Log into the submission portal",
        "Upload your final PDF",
        "Complete copyright transfer",
        "Confirm submission receipt"
      ]
    }
  ];

  const checklist = [
    "Paper follows IEEE conference format",
    "All reviewer comments have been addressed",
    "References are complete and properly formatted",
    "Figures and tables are high resolution",
    "Paper is within the page limit",
    "PDF has embedded fonts",
    "File size is under 10 MB",
    "Copyright form is completed",
    "Author information is correct",
    "Final proofread completed"
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
              Camera-Ready Submission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Guidelines for preparing and submitting the final version of your accepted paper for publication in IEEE Xplore.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Deadline: April 30, 2026
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                IEEE Format Required
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Notice</h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                      Only papers that complete the camera-ready submission process and copyright transfer by the deadline will be included in the conference proceedings and IEEE Xplore. Late submissions cannot be accepted.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Submission Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow this timeline to ensure your paper is included in the conference proceedings.
            </p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${item.status === 'completed' ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'bg-gradient-card border-border/50'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.status === 'completed' ? 'bg-green-500' : 'bg-primary'}`}>
                          {item.status === 'completed' ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : (
                            <Calendar className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">{item.milestone}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                      <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                        {item.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Format Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your camera-ready paper must meet these specific requirements for IEEE Xplore publication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{req.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {req.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Submission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to prepare and submit your camera-ready paper.
            </p>
          </motion.div>

          <div className="space-y-8">
            {submissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50 shadow-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="ml-16">
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-submission Checklist */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Pre-Submission Checklist</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use this checklist to ensure your paper meets all requirements before submission.
            </p>
          </motion.div>

          <Card className="bg-gradient-card border border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Templates and Submit */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card border border-border/50 shadow-card">
                <CardHeader className="text-center">
                  <Download className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">Download Templates</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Get the official IEEE conference templates and formatting guidelines.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      LaTeX Template
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Word Template
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Formatting Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card border border-border/50 shadow-card">
                <CardHeader className="text-center">
                  <Upload className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">Submit Your Paper</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Upload your camera-ready paper through the conference submission portal.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Access Submission Portal
                    </Button>
                    <Button className="w-full" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Copyright Form
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Both paper and copyright form required
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Support */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technical support team is available to assist with camera-ready submission questions.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Technical Support</p>
                <p className="text-muted-foreground">technical@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">Publication Queries</p>
                <p className="text-muted-foreground">publications@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">Support Hours</p>
                <p className="text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default CameraReady;