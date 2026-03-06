import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ConferenceOversightCommittee = () => {
  const conferenceOversightCommittee = [
    { name: "Prof. Vivek Shrivastava", title: "IEEE Delhi Section" },
    { name: "Prof. Rajnish Sharma", title: "IEEE Delhi Section" },
    { name: "Dr. Ekta Gandotra", title: "IEEE Delhi Section" },
    { name: "Prof. Sneha Kabra", title: "IEEE Delhi Section" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Conference Oversight Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished members providing oversight and guidance for STESI 2026.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Committee Members
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {conferenceOversightCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">
                    <CardTitle className="text-lg mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-teal-100 text-teal-800">Conference Oversight</Badge>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
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

export default ConferenceOversightCommittee;
