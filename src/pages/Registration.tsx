import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, CreditCard, Users, FileText, Coffee, Wifi } from 'lucide-react';

const Registration = () => {
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
    { event: "Early Bird Registration", date: "March 31, 2026", status: "open" },
    { event: "Regular Registration", date: "May 31, 2026", status: "upcoming" },
    { event: "Late Registration", date: "June 15, 2026", status: "upcoming" },
    { event: "On-site Registration", date: "July 22-23, 2026", status: "upcoming" }
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
              Secure your spot at STESI 2026. Choose from our flexible registration options and join the premier conference on Smart Technologies for Energy, Sustainability & Industry.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Registration Starts on May 5, 2026
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

          <div className="overflow-x-auto bg-white mb-3 rounded-lg shadow-lg border border-gray-200 max-w-5xl mx-auto">
            <Table className="mb-8">
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-left font-bold text-white text-base py-3 px-4 border-r border-white/20">
                    Participant Category
                  </TableHead>
                  <TableHead className="text-center font-bold text-white text-base py-3 px-3 border-r border-white/20" colSpan={2}>
                    IEEE Member
                  </TableHead>
                  <TableHead className="text-center font-bold text-white text-base py-3 px-3" colSpan={2}>
                    Non IEEE Member
                  </TableHead>
                </TableRow>
                <TableRow className="bg-primary/90 hover:bg-primary/90">
                  <TableHead className="text-left font-semibold text-white py-2 px-4 border-r border-white/20"></TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Online
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Offline
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Online
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3">
                    Offline
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Indian Participants Section */}
                <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300">
                  <TableCell colSpan={5} className="text-center text-base font-bold text-blue-900 py-3 px-4 border-b-2 border-blue-400">
                    Indian Participants
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Student
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹6,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹8,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300">
                    ₹8,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    ₹10,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Academician
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹11,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹13,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Industry
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹13,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹15,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Attendee
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹2,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    ₹5,000
                  </TableCell>
                </TableRow>

                {/* Foreign Participants Section */}
                <TableRow className="bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300">
                  <TableCell colSpan={5} className="text-center text-base font-bold text-green-900 py-3 px-4 border-b-2 border-green-400">
                    Foreign Participants
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Student
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $100
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $120
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300">
                    $120
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    $150
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Academician
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    $200
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    $250
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Attendee
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $50
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    $100
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-8">
            <div className="bg-card rounded-lg border border-border/50 p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-primary">Note</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">1.</span>
                  <span>Rates are inclusive of GST 18%</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">2.</span>
                  <span>One full author registration can present upto 2 papers</span>
                </p>
              </div>
            </div>
          </div>

          {/* <Button size="lg" className="px-8 py-3">
            <CreditCard className="h-5 w-5 mr-2" />
            Register Now
          </Button> */}
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
      {/* <section className="py-16">
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
      </section> */}

      {/* Contact Information */}
      {/* <section className="py-16 bg-muted/30">
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
                <p className="text-muted-foreground">stesi2026.muj@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-muted-foreground">+91-141-3999100 (9 AM - 6 PM IST)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Registration;