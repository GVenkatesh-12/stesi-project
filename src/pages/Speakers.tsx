import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, User, ExternalLink } from 'lucide-react';

const Speakers = () => {
  const keynoteSpeakers = [
    {
      name: "Prof. Dr. André Eugenio Lazzaretti",
      title: "Professor",
      organization: "Federal University of Technology - Paraná (UTFPR), Brazil",
      image: "/speaker1.png",
      bio: "Prof. Dr. André Eugenio Lazzaretti is a distinguished researcher and professor at UTFPR, specializing in pattern recognition, machine learning, digital signal processing, embedded systems, and instrumentation. He has published extensively in top-tier journals and conferences, with over 100 peer-reviewed publications. His research focuses on developing innovative algorithms for signal processing applications, particularly in biomedical engineering and industrial automation. Dr. Lazzaretti has supervised numerous Ph.D. and M.Sc. students and has been actively involved in international research collaborations.",
      topic: "Advances in Pattern Recognition and Machine Learning for Signal Processing",
      expertise: ["Pattern Recognition", "Machine Learning", "Digital Signal Processing", "Embedded Systems", "Instrumentation", "Biomedical Engineering"],
      awards: ["IEEE Senior Member", "Distinguished Researcher Award UTFPR", "Best Paper Award IEEE SPS", "Research Excellence Award"]
    },
    {
      name: "Fausto Pedro García Márquez",
      title: "Professor",
      organization: "University of Castilla-La Mancha, Spain",
      image: "/speaker2.png",
      bio: "Fausto Pedro García Márquez is a leading expert in Artificial Intelligence, Maintenance, Management, Renewable Energy, Transport, Advanced Analytics, and Data Science. He holds a Ph.D. in Industrial Engineering and has published over 200 research papers in high-impact journals. His work focuses on integrating AI technologies across multiple domains to create sustainable and efficient solutions. Dr. García Márquez has led numerous international research projects and has been recognized for his contributions to renewable energy optimization and smart transportation systems.",
      topic: "AI-Driven Solutions for Renewable Energy and Smart Transportation Systems",
      expertise: ["Artificial Intelligence", "Maintenance", "Management", "Renewable Energy", "Transport", "Advanced Analytics", "Data Science", "Industrial Engineering"],
      awards: ["Research Excellence Award UCLM", "AI Innovation Prize", "Best Researcher Award", "IEEE Senior Member", "Outstanding Contribution Award"]
    },
    {
      name: "Prof Rajesh Kumar",
      title: "Professor",
      organization: "Malaviya National Institute of Technology Jaipur, India",
      image: "/speaker3.png",
      bio: "Prof Rajesh Kumar is a renowned researcher in Artificial Intelligence, Machine Intelligence, Bio and Nature inspired Algorithms, Healthcare, and Energy. He has published over 150 research papers in international journals and conferences. His research spans across multiple disciplines, focusing on innovative AI solutions for real-world challenges. Prof. Kumar has supervised more than 25 Ph.D. students and has been actively involved in developing bio-inspired algorithms for healthcare applications and energy optimization. He has received several national and international awards for his contributions to AI research.",
      topic: "Bio-Inspired AI Algorithms for Healthcare and Energy Applications",
      expertise: ["Artificial Intelligence", "Machine Intelligence", "Bio-inspired Algorithms", "Healthcare", "Energy", "Optimization", "Neural Networks"],
      awards: ["Distinguished Professor Award MNIT", "AI Research Excellence Award", "Best Teacher Award", "IEEE Senior Member", "Outstanding Researcher Award"]
    },
    {
      name: "Almoataz Youssef Abdelaziz Mohamed",
      title: "Professor",
      organization: "Future University in Egypt, Cairo, Egypt",
      image: "/speaker4.png",
      bio: "Almoataz Youssef Abdelaziz Mohamed is a leading expert in applications of artificial intelligence, evolutionary and heuristic optimization techniques applied to power systems operation, planning, and control. He has published extensively in top-tier power systems journals and has been recognized for his innovative approaches to power system optimization. His research has revolutionized power system management through AI integration, particularly in renewable energy integration and smart grid applications. Dr. Mohamed has supervised numerous graduate students and has been involved in several international research collaborations.",
      topic: "AI and Evolutionary Optimization in Power System Operation and Control",
      expertise: ["Artificial Intelligence", "Evolutionary Algorithms", "Heuristic Optimization", "Power Systems", "Power System Operation", "Power System Planning", "Power System Control", "Smart Grids"],
      awards: ["Power Systems Excellence Award", "AI in Energy Innovation Prize", "Best Researcher Award", "IEEE Senior Member", "Outstanding Contribution to Power Systems"]
    }
  ];

  const invitedSpeakers = [
    {
      name: "Dr. Elena Rodriguez",
      organization: "Global Energy Solutions Inc.",
      topic: "The Future of Sustainable Energy: From Grid to Edge",
      expertise: "Renewable Energy"
    },
    {
      name: "Prof. David Kim",
      organization: "Stanford University",
      topic: "AI-Driven Signal Processing: Opportunities and Challenges",
      expertise: "Machine Learning"
    },
    {
      name: "Dr. Sarah Mitchell",
      organization: "Microsoft Research",
      topic: "Quantum-Safe Cybersecurity for Critical Infrastructure",
      expertise: "Cybersecurity"
    },
    {
      name: "Dr. Ahmed Hassan",
      organization: "Cairo University",
      topic: "Blockchain Applications in Energy Trading",
      expertise: "Blockchain Technology"
    },
    {
      name: "Prof. Lisa Chen",
      organization: "MIT",
      topic: "5G Signal Processing Architectures",
      expertise: "Wireless Communications"
    },
    {
      name: "Dr. Robert Taylor",
      organization: "IBM Research",
      topic: "Edge Computing Security Frameworks",
      expertise: "Edge Computing"
    }
  ];

  const schedule = [
    {
      day: "Day 1 - November 6, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Prof. Dr. André Eugenio Lazzaretti",
          topic: "Advances in Pattern Recognition and Machine Learning for Signal Processing"
        },
        {
          time: "2:00 PM",
          speaker: "Fausto Pedro García Márquez",
          topic: "AI-Driven Solutions for Renewable Energy and Smart Transportation Systems"
        }
      ]
    },
    {
      day: "Day 2 - November 7, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Prof Rajesh Kumar",
          topic: "Bio-Inspired AI Algorithms for Healthcare and Energy Applications"
        },
        {
          time: "2:00 PM",
          speaker: "Almoataz Youssef Abdelaziz Mohamed",
          topic: "AI and Evolutionary Optimization in Power System Operation and Control"
        }
      ]
    },
    {
      day: "Day 3 - November 8, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Dr. Elena Rodriguez",
          topic: "The Future of Sustainable Energy: From Grid to Edge"
        },
        {
          time: "2:00 PM",
          speaker: "Prof. David Kim",
          topic: "AI-Driven Signal Processing: Opportunities and Challenges"
        }
      ]
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
              Plenary Speakers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from world-renowned experts and thought leaders in artificial intelligence, machine learning, power systems, and sustainable energy at STESI 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* <h2 className="text-3xl font-bold text-primary mb-4">Keynote Speakers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our keynote speakers are industry pioneers who will share cutting-edge insights and future directions in artificial intelligence, machine learning, and power systems.
            </p> */}
          </motion.div>

          <div className="space-y-12">
            {keynoteSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                      {/* Speaker Image */}
                      <div className="lg:col-span-1">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-icon');
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                          <div className="fallback-icon hidden w-full h-full flex items-center justify-center">
                            <User className="h-24 w-24 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Speaker Info */}
                      <div className="lg:col-span-3 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{speaker.name}</h3>
                          <p className="text-lg text-muted-foreground">{speaker.title}</p>
                          <p className="text-conference-secondary font-medium">{speaker.organization}</p>
                        </div>

                        <div className="bg-primary/5 rounded-lg p-4">
                          <h4 className="font-semibold text-primary mb-2">Keynote Topic:</h4>
                          <p className="text-lg">{speaker.topic}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">Biography:</h4>
                          <p className="text-muted-foreground leading-relaxed">{speaker.bio}</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Expertise:</h4>
                            <div className="flex flex-wrap gap-2">
                              {speaker.expertise.map((skill) => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Awards:</h4>
                            <div className="flex flex-wrap gap-2">
                              {speaker.awards.map((award) => (
                                <Badge key={award} variant="outline">{award}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Speakers */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Invited Speakers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished researchers and industry experts presenting specialized topics across our conference tracks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitedSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{speaker.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{speaker.organization}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div>
                      <h4 className="font-medium text-primary text-sm mb-1">Presentation Topic:</h4>
                      <p className="text-sm">{speaker.topic}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{speaker.expertise}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Speaking Schedule */}
      {/* <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Speaking Schedule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Plan your conference experience with our comprehensive speaking schedule featuring keynotes and invited presentations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{day.day}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {day.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="text-primary border-primary">
                              {session.time}
                            </Badge>
                            <div>
                              <p className="font-medium">{session.speaker}</p>
                              <p className="text-sm text-muted-foreground">{session.topic}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Speakers;