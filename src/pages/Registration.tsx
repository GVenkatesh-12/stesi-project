import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard, Users, FileText, Coffee, Wifi } from 'lucide-react';

const Registration = () => {
  const registrationTypes = [
    {
      title: "IEEE Member",
      price: "$450",
      originalPrice: "$550",
      category: "Professional",
      features: [
        "Access to all technical sessions",
        "Conference proceedings (digital)",
        "Welcome reception",
        "Coffee breaks and networking",
        "Lunch for all days",
        "Certificate of participation",
        "IEEE member discount applied"
      ],
      popular: true
    },
    {
      title: "Non-IEEE Member",
      price: "$550",
      category: "Professional",
      features: [
        "Access to all technical sessions",
        "Conference proceedings (digital)",
        "Welcome reception",
        "Coffee breaks and networking",
        "Lunch for all days",
        "Certificate of participation"
      ],
      popular: false
    },
    {
      title: "Student (IEEE)",
      price: "$250",
      originalPrice: "$350",
      category: "Student",
      features: [
        "Access to all technical sessions",
        "Conference proceedings (digital)",
        "Welcome reception",
        "Coffee breaks and networking",
        "Lunch for all days",
        "Student ID required"
      ],
      popular: false
    },
    {
      title: "Student (Non-IEEE)",
      price: "$350",
      category: "Student",
      features: [
        "Access to all technical sessions",
        "Conference proceedings (digital)",
        "Welcome reception",
        "Coffee breaks and networking",
        "Lunch for all days",
        "Student ID required"
      ],
      popular: false
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
    { event: "On-site Registration", date: "November 06, 2025", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <h2 className="text-3xl font-bold text-primary mb-4">Registration Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the registration type that best fits your needs. All registrations include full conference access and materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {registrationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${type.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50'} bg-gradient-card transition-all duration-300 hover:shadow-lg`}>
                  <CardHeader className="text-center">
                    <Badge variant="outline" className="mx-auto mb-2">{type.category}</Badge>
                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">{type.price}</div>
                      {type.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{type.originalPrice}</div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={type.popular ? "default" : "outline"}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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