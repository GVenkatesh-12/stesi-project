import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Globe, Zap, Leaf, Building, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To present a unified platform for advanced and multi-disciplinary research towards design of smart power and automated systems.',
    },
    {
      icon: Users,
      title: 'Global Collaboration',
      description: 'Bringing together leading academic scientists, researchers, and research scholars from around the world.',
    },
    {
      icon: Award,
      title: 'Innovation Focus',
      description: 'Exploring emerging technologies, strategies, and policies that enhance grid resilience, efficiency, and reliability.',
    },
    {
      icon: Globe,
      title: 'Sustainable Development',
      description: 'Embracing United Nations Sustainable Development Goals for overall societal development.',
    },
  ];

  const sdgGoals = [
    {
      icon: Zap,
      title: 'SDG 7',
      description: 'Affordable and Clean Energy',
      color: 'text-yellow-500',
    },
    {
      icon: Building,
      title: 'SDG 9',
      description: 'Industry, Innovation, and Infrastructure',
      color: 'text-orange-500',
    },
    {
      icon: Leaf,
      title: 'SDG 11',
      description: 'Sustainable Cities and Communities',
      color: 'text-green-500',
    },
    {
      icon: Shield,
      title: 'SDG 12',
      description: 'Responsible Consumption and Production',
      color: 'text-blue-500',
    },
    {
      icon: Globe,
      title: 'SDG 13',
      description: 'Climate Action',
      color: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'SDG 17',
      description: 'Partnerships for the Goals',
      color: 'text-red-500',
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
              About STESI 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              International Conference on Smart Technologies for Energy, Sustainability & Industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-card rounded-lg p-8 shadow-card">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Conference Overview
              </h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  The aim of this conference is to present a unified platform for advanced and multi-disciplinary research towards design of smart power and automated systems. As global energy systems transition toward sustainability, the integration of renewable energy sources, electric vehicles (EVs), and battery energy storage systems (BESS) is becoming increasingly crucial.
                </p>
                <p>
                  This conference will provide a platform for exploring emerging technologies, strategies, and policies that enhance grid resilience, efficiency, and reliability. To forge interactions among active researchers, the department of Electrical Engineering, Faculty of Science, Technology and Architecture, Manipal University Jaipur, is proposing to organize a multidisciplinary International Conference on Smart Technologies for Energy, Sustainability & Industry (STESI 2026) on 22nd-23rd July 2026.
                </p>
              </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-lg p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Conference Details</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-conference-secondary">22nd-23rd</div>
                  <div className="text-sm text-muted-foreground">July 2026</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-conference-secondary">Manipal University Jaipur</div>
                  <div className="text-sm text-muted-foreground">Department of Electrical Engineering</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-conference-secondary">6</div>
                  <div className="text-sm text-muted-foreground">Conference Tracks</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Conference Aims and Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Conference Aims and Objectives
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-border/50">
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  This Conference aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of future ready innovations and ideas. It will offer a forum on which all the attendees can address a variety of subject matter for environmental sustainability as well as their knowledge, opportunities, and challenges in the fields of Green Energy, Automation, Electric Vehicle Technology, Intelligent Computing Techniques, and Industry.
                </p>
                <p>
                  Advancements in renewable energy, smart grid technology, micro grids, distributed energy sources, home automation, applications of intelligent computing, robotics & smart machines, and environmental sustainability are among the many fields that make up the Sustainable Energy Development. Energy systems driven by global, social, environmentally friendly factors combined with specialized intelligence will revolutionize the business, industry, and society.
                </p>
                <p>
                  The event will include keynote speeches from renowned experts, technical paper presentations, and panel discussions. It will serve as a platform for interdisciplinary collaboration, fostering innovation in smart grid technologies and sustainable energy solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SDG Goals */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              United Nations Sustainable Development Goals
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              The conference embraces the United Nations Sustainable Development Goals (SDGs) for overall societal development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdgGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <IconComponent className={`h-10 w-10 mx-auto mb-3 ${goal.color}`} />
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center text-sm">
                          {goal.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

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