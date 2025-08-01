import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, User } from 'lucide-react';

const Committee = () => {
  const organizingCommittee = [
    {
      name: "Dr. Rajesh Kumar",
      title: "General Chair",
      affiliation: "GIET University",
      email: "rajesh@giet.edu",
      expertise: "Sustainable Energy Systems"
    },
    {
      name: "Prof. Sarah Johnson",
      title: "Program Chair",
      affiliation: "MIT",
      email: "sarah.johnson@mit.edu",
      expertise: "Signal Processing"
    },
    {
      name: "Dr. Michael Chen",
      title: "Technical Chair",
      affiliation: "Stanford University",
      email: "mchen@stanford.edu",
      expertise: "Cybersecurity"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Publication Chair",
      affiliation: "IIT Delhi",
      email: "priya@iitd.ac.in",
      expertise: "Digital Signal Processing"
    },
    {
      name: "Prof. James Wilson",
      title: "Finance Chair",
      affiliation: "UC Berkeley",
      email: "jwilson@berkeley.edu",
      expertise: "Energy Economics"
    },
    {
      name: "Dr. Lisa Zhang",
      title: "Local Arrangements Chair",
      affiliation: "GIET University",
      email: "lisa@giet.edu",
      expertise: "Event Management"
    }
  ];

  const technicalCommittee = [
    {
      name: "Dr. Ahmed Hassan",
      affiliation: "Cairo University",
      expertise: "Renewable Energy"
    },
    {
      name: "Prof. Emma Thompson",
      affiliation: "Oxford University",
      expertise: "Machine Learning"
    },
    {
      name: "Dr. Hiroshi Tanaka",
      affiliation: "Tokyo Institute of Technology",
      expertise: "IoT Security"
    },
    {
      name: "Prof. Maria Rodriguez",
      affiliation: "Universidad Politécnica de Madrid",
      expertise: "Smart Grids"
    },
    {
      name: "Dr. Robert Lee",
      affiliation: "Carnegie Mellon University",
      expertise: "Cryptography"
    },
    {
      name: "Prof. Anita Patel",
      affiliation: "IIT Bombay",
      expertise: "Power Electronics"
    },
    {
      name: "Dr. Klaus Mueller",
      affiliation: "Technical University of Munich",
      expertise: "Energy Storage"
    },
    {
      name: "Prof. Jennifer Wu",
      affiliation: "Tsinghua University",
      expertise: "Network Security"
    }
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
              Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished experts leading iSSSC 2025, bringing together top researchers and industry leaders from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Organizing Committee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The organizing committee is responsible for the overall planning and execution of the symposium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {organizingCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">{member.title}</Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                    <p className="text-xs text-primary font-medium">{member.expertise}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span>{member.email}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Program Committee */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Program Committee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technical program committee comprises leading experts who ensure the quality and relevance of conference content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{member.affiliation}</p>
                    <Badge variant="outline" className="text-xs">{member.expertise}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Committee;