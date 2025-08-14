import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, User } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: ["stesi@jaipur.manipal.edu", "Registration: stesi@jaipur.manipal.edu"],
      description: "For general conference information and registration support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91-141-3999100", "+91-141-3999200"],
      description: "Available Monday to Friday, 9:00 AM - 6:00 PM IST"
    },
    {
      icon: MapPin,
      title: "Conference Venue",
      details: ["Manipal University Jaipur", "Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007, India"],
      description: "Beautiful campus with state-of-the-art conference facilities"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      description: "Our team is available during these hours for immediate assistance"
    }
  ];

  const departments = [
    {
      department: "Technical Program Committee",
      contact: "Dr. Neeraj Kanwar",
      email: "technical@stesi2026.org",
      responsibilities: ["Paper submissions", "Review process", "Technical content"]
    },
    {
      department: "Registration & Finance",
      contact: "Dr. Amit Saraswat",
      email: "register@stesi2026.org",
      responsibilities: ["Registration queries", "Payment issues", "Invoices"]
    },
    {
      department: "Local Arrangements",
      contact: "Dr. Divya Rishi Shrivastava",
      email: "venue@stesi2026.org",
      responsibilities: ["Accommodation", "Transportation", "Local tours"]
    },
    {
      department: "Publicity & Media",
      contact: "Dr. Bishwajit Dey",
      email: "media@stesi2026.org",
      responsibilities: ["Press relations", "Marketing", "Sponsorship"]
    }
  ];

  const faqs = [
    {
      question: "What is the registration deadline?",
      answer: "Early bird registration ends on March 31, 2026. Regular registration continues until June 15, 2026."
    },
    {
      question: "Are virtual presentations allowed?",
      answer: "Yes, we offer hybrid participation options. Virtual presenters can join remotely with full technical support."
    },
    {
      question: "What is included in the registration fee?",
      answer: "Registration includes access to all sessions, conference proceedings, meals, networking events, and a certificate of participation."
    },
    {
      question: "Is there support for visa applications?",
      answer: "Yes, we provide invitation letters and documentation support for visa applications. Contact us at least 8 weeks before the conference."
    }
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with the STESI 2026 organizing team. We're here to help with any questions about the conference, registration, or submissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach out to us through any of the following channels for assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Department Contacts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For specific inquiries, you can reach out directly to the relevant department heads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.department}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{dept.department}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{dept.contact}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-primary">{dept.email}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {dept.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {responsibility}
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
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about STESI 2026.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Social Media and Emergency Contact */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Stay Connected</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow us for the latest updates and announcements about STESI 2026.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-medium">Emergency Contact (During Conference)</p>
                <p className="text-muted-foreground">+91-9876-543210 (24/7 Support)</p>
              </div>
              <div>
                <p className="font-medium">Social Media</p>
                <p className="text-muted-foreground">Follow @STESI2026 for updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;