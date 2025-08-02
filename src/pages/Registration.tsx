import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, CreditCard, Users, FileText, Coffee, Wifi } from 'lucide-react';

const Registration = () => {
  const registrationPricing = [
    {
      category: "Research Scholars UG and PG Students",
      ieeeMember: "3,500 INR",
      nonIeeeMember: "4,000 INR"
    },
    {
      category: "Academicians",
      ieeeMember: "4,000 INR",
      nonIeeeMember: "4,500 INR"
    },
    {
      category: "Industry",
      ieeeMember: "6,000 INR",
      nonIeeeMember: "6,500 INR"
    },
    {
      category: "Foreign Student Participants",
      ieeeMember: "USD 200",
      nonIeeeMember: "USD 250"
    },
    {
      category: "Foreign Academicians",
      ieeeMember: "USD 300",
      nonIeeeMember: "USD 350"
    }
  ];

  const benefits = [
    {
      icon: FileText,
      title: "IEEE Xplore Publication",
      description: "All accepted papers will be published in IEEE Xplore digital library"
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with leading researchers and industry experts from around the world"
    },
    {
      icon: Coffee,
      title: "Social Events",
      description: "Welcome reception, gala dinner, and networking breaks throughout the conference"
    },
    {
      icon: Wifi,
      title: "Digital Access",
      description: "Access to presentation slides, conference app, and digital proceedings"
    }
  ];

  const importantDates = [
    { event: "Early Bird Registration", date: "August 31, 2025", status: "open" },
    { event: "Regular Registration", date: "September 30, 2025", status: "upcoming" },
    { event: "Late Registration", date: "October 15, 2025", status: "upcoming" },
    { event: "On-site Registration", date: "July 22, 2026", status: "upcoming" }
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
              Registration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Secure your spot at iSSSC 2025. Choose from our flexible registration options and join the premier symposium on sustainable energy, signal processing, and cybersecurity.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Early Bird Pricing Available Until August 31, 2025
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Registration Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the registration category that best fits your profile. IEEE members enjoy discounted rates on all registration categories.
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white mb-3 rounded-lg">
            <Table className="mb-8">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="text-left font-semibold">Category</TableHead>
                  <TableHead className="text-center font-semibold">IEEE Member</TableHead>
                  <TableHead className="text-center font-semibold">Non-IEEE Member</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrationPricing.map((item, index) => (
                  <TableRow key={item.category} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-center font-semibold text-primary">{item.ieeeMember}</TableCell>
                    <TableCell className="text-center font-semibold">{item.nonIeeeMember}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                  </div>

          <div className="text-center">
            <Button size="lg" className="px-8 py-3">
              <CreditCard className="h-5 w-5 mr-2" />
                      Register Now
                    </Button>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your registration includes access to world-class content, networking opportunities, and professional development resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Registration Deadlines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Register early to secure the best rates and guarantee your participation in this prestigious event.
            </p>
          </motion.div>

          <div className="space-y-4">
            {importantDates.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{item.event}</h3>
                        <p className="text-muted-foreground">{item.date}</p>
                      </div>
                      <Badge 
                        variant={item.status === 'open' ? 'default' : 'secondary'}
                        className={item.status === 'open' ? 'bg-green-500' : ''}
                      >
                        {item.status === 'open' ? 'Open Now' : 'Coming Soon'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Need Help with Registration?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our registration team is here to assist you with any questions about pricing, payment methods, or special requirements.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Registration Support</p>
                <p className="text-muted-foreground">register@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-muted-foreground">+91-6860-123456 (9 AM - 6 PM IST)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;