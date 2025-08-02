import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster collaboration and innovation in sustainable energy, signal processing, and cybersecurity research.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Bringing together researchers, engineers, and industry experts from around the world.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Promoting high-quality research and technological advancements in key interdisciplinary fields.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating solutions that address real-world challenges and drive sustainable development.',
    },
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
              About iSSSC 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The premier international symposium bringing together cutting-edge research in sustainable energy systems, advanced signal processing, and cybersecurity innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Conference Overview
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The 2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing, and Cybersecurity (iSSSC 2025) is a leading forum for researchers, engineers, and industry experts to share innovations, research, and challenges in these key interdisciplinary fields.
                </p>
                <p>
                  The symposium promotes collaboration and idea exchange through keynote talks, technical presentations, and specialized workshops focused on the latest advancements and future trends in sustainable technologies.
                </p>
                <p>
                  Hosted at GIET University in Gunupur, Odisha, this prestigious event will feature presentations from leading researchers, interactive sessions, and networking opportunities that foster international collaboration.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-lg p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Conference Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-conference-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Expected Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-conference-secondary">6</div>
                  <div className="text-sm text-muted-foreground">Conference Tracks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-conference-secondary">30+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-conference-secondary">3</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
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
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;