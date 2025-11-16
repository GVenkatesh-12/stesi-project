import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Download, Calendar, Users, FileText, CheckCircle, AlertTriangle, UserCheck, Sparkles, ClipboardCheck, Gift, UserCog, ShieldAlert, Target } from 'lucide-react';

const SpecialSessions = () => {
  const reviewers = [
    { name: 'Dr. Vedik Basetti', affiliation: 'SR University, Warangal', email: 'b.vedik@sru.edu.in' },
    { name: 'Dr. Chandan Kr. Shiva', affiliation: 'SR University, Warangal', email: 'chandan.kumar@sru.edu.in' },
    { name: 'Dr. Pulakraj Aryan', affiliation: 'Manipal University Jaipur', email: 'pulakraj.aryan@jaipur.manipal.edu' },
    { name: 'STESI 2026', affiliation: '', email: 'stesi@jaipur.manipal.edu' },
  ];

  const importantDates = [
    { title: 'Last date Submission of proposals', date: 'Coming soon...' },
    { title: 'Notification of acceptance', date: 'Coming soon...' },
  ];

  const proposalContent = [
    'Title of the Special Session',
    'A brief description of the area of concern (approx. 300 words), with special focus on why we should believe this is an interesting and significant topic?',
    'The name and contact information of maximum special session chairs, who are willing to promote and organize a sufficient amount of quality submissions to the special session. Please also indicate the background of the organizers.',
    'A list of potential authors and their affiliation & other details (minimum 10)',
    'A list of potential reviewers and their affiliation & other details (minimum 10)',
  ];

  const restrictions = [
    'An individual cannot be (co-) author of more than two papers submitted to the same Special Session.',
    'From one organizations maximum 2 organizers can be participated in one special session',
    'Maximum number of organizers in one session can be 4 and minimum 2',
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <img 
                src="/muj-logo-nbg.png" 
                alt="Manipal University Jaipur Logo"
                className="h-24 sm:h-28 lg:h-32 w-auto"
              />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Call for Special Session Proposals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join STESI 2026 in Jaipur, India during 22nd-23rd July 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-card border border-border/50 shadow-card">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The organizing team invites professionals in the area of Conference Topics to propose Special Sessions (SS) to be held on IEEE International Conference on Smart Technologies for Energy, Sustainability & Industry (STESI 2026) in Jaipur, India during 22nd-23rd July 2026.
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Benefit of SS:</h3>
                      <p className="text-muted-foreground">
                        Special sessions provide the opportunity to focus in detail on particular emerging topics, which are not reflected in the list of conference tracks or represent specific working fields where researchers would like to meet and discuss advances.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submission Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-card border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <span>Submission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Please send your proposal in MS Word format to:
                </p>
                <ul className="space-y-3 list-none">
                  {reviewers.map((reviewer, index) => (
                    <li key={index} className="p-3 bg-background rounded-lg border border-border/50">
                      <p className="font-medium text-foreground mb-1">
                        <span className="text-primary mr-2">•</span>
                        {reviewer.name}
                        {reviewer.affiliation && (
                          <span className="text-muted-foreground font-normal">, {reviewer.affiliation}</span>
                        )}
                      </p>
                      <a 
                        href={`mailto:${reviewer.email}`}
                        className="text-primary hover:underline text-sm ml-6"
                      >
                        {reviewer.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Template Download */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <Button size="lg" variant="conference" className="w-full sm:w-auto" asChild>
              <a 
                href="/STESI 2026 - Special Session Proposal Template.docx" 
                download="STESI 2026 - Special Session Proposal Template.docx"
              >
                <Download className="mr-2 h-5 w-5" />
                Download STESI 2026 - Special Session Proposal Template
              </a>
            </Button>
          </motion.div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
              IMPORTANT DATES for Special Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantDates.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {item.date}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Proposal Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-card border border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                  <FileText className="h-6 w-6" />
                  <span>Proposal Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you intend to propose and organize a special session, please provide us with a proposal using the following information:
                </p>
                <ul className="space-y-3">
                  {proposalContent.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Special Session Organization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
              Special Session Organization
            </h2>
            <div className="space-y-6">
              {/* Review Process */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <ClipboardCheck className="h-5 w-5" />
                    <span>Review Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Papers submitted to special sessions will undergo the same review process as regular papers. The special session chairs of the respective special session are responsible for organizing the review process, assuring at least three reviews per paper. This includes a selection of reviewers from their peers.
                  </p>
                </CardContent>
              </Card>

              {/* Conflict of Interest */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Conflict of Interest</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Before starting the review process, special session organizers must explicitly declare papers, which present a conflict of interest for them. A conflict of interest arises where the judgment of a paper quality can be influenced by the organizers being authors or knowing some of the authors. To ensure independent reviews, this conflict must be marked as such in the submission system and the SS chairs notified so that they can arrange the review process.
                  </p>
                </CardContent>
              </Card>

              {/* Minimum Papers Requirement */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Minimum Papers Requirement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A minimum of 6 accepted and registered papers with authors from at least 4 different institutions is required for each session. If a session has too few papers, accepted papers will be allocated to regular sessions wherever possible. In case of indication of weakly organized special sessions, the conference organizers will support the organizers with advice but reserve measures including cancellation of the respective special session.
                  </p>
                </CardContent>
              </Card>

              {/* Complimentary Conference Registration */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Gift className="h-5 w-5" />
                    <span>Complimentary Conference Registration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    At least one organizer of the successful Special Sessions is expected to register for and attend the conference, as well as chair the corresponding sessions. Organizers of a successful Special Session will get one free full registration (per at least 6 accepted and registered papers not authored by the any of the organizers)
                  </p>
                </CardContent>
              </Card>

              {/* Session Chairs */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <UserCog className="h-5 w-5" />
                    <span>Session Chairs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When a special session is finally accepted by the conference, SS organizers will serve as Session chairs in the conference. In some extenuated circumstance, Technical Program chairs and Conference General Chairs might take up the full control of appointing the Session Chairs, in case of SS organizers unable to participate in the conference.
                  </p>
                </CardContent>
              </Card>

              {/* Restrictions */}
              <Card className="bg-gradient-card border border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <ShieldAlert className="h-5 w-5" />
                    <span>Restrictions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    During the review process, Special Session Organizers must consider that:
                  </p>
                  <ul className="space-y-2">
                    {restrictions.map((restriction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="font-semibold text-primary mt-0.5">{String.fromCharCode(65 + index)})</span>
                        <span className="text-muted-foreground">{restriction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialSessions;
