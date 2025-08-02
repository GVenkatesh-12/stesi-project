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
      name: "Dr. Elena Rodriguez",
      title: "Chief Technology Officer",
      organization: "Global Energy Solutions Inc.",
      image: "/api/placeholder/300/300",
      bio: "Dr. Rodriguez is a leading expert in renewable energy systems with over 15 years of experience in sustainable technology development. She has published over 100 papers and holds 25 patents in energy storage and smart grid technologies.",
      topic: "The Future of Sustainable Energy: From Grid to Edge",
      expertise: ["Renewable Energy", "Smart Grids", "Energy Storage"],
      awards: ["IEEE Fellow", "Energy Innovator Award 2023"]
    },
    {
      name: "Prof. David Kim",
      title: "Director of AI Research",
      organization: "Stanford University",
      image: "/api/placeholder/300/300",
      bio: "Professor Kim is renowned for his groundbreaking work in signal processing and machine learning. His research has revolutionized the field of adaptive signal processing with applications in telecommunications and biomedical engineering.",
      topic: "AI-Driven Signal Processing: Opportunities and Challenges",
      expertise: ["Machine Learning", "Signal Processing", "Neural Networks"],
      awards: ["Turing Award Nominee", "IEEE Signal Processing Society Award"]
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Cybersecurity Research Lead",
      organization: "Microsoft Research",
      image: "/api/placeholder/300/300",
      bio: "Dr. Mitchell is a globally recognized cybersecurity expert specializing in quantum-resistant cryptography and secure communications. She has advised governments and Fortune 500 companies on cybersecurity strategy.",
      topic: "Quantum-Safe Cybersecurity for Critical Infrastructure",
      expertise: ["Quantum Cryptography", "Network Security", "Critical Infrastructure"],
      awards: ["Cybersecurity Excellence Award", "NSF CAREER Award"]
    }
  ];

  const invitedSpeakers = [
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
    },
    {
      name: "Prof. Maria Santos",
      organization: "University of São Paulo",
      topic: "IoT Security in Smart Cities",
      expertise: "IoT Security"
    },
    {
      name: "Dr. James Wilson",
      organization: "Google DeepMind",
      topic: "Neural Signal Processing Applications",
      expertise: "Neural Networks"
    },
    {
      name: "Prof. Anna Kowalski",
      organization: "Warsaw University of Technology",
      topic: "Renewable Energy Grid Integration",
      expertise: "Power Systems"
    }
  ];

  const schedule = [
    {
      day: "Day 1 - November 6, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Dr. Elena Rodriguez",
          topic: "Opening Keynote: The Future of Sustainable Energy"
        },
        {
          time: "2:00 PM",
          speaker: "Dr. Ahmed Hassan",
          topic: "Blockchain Applications in Energy Trading"
        }
      ]
    },
    {
      day: "Day 2 - November 7, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Prof. David Kim",
          topic: "AI-Driven Signal Processing: Opportunities and Challenges"
        },
        {
          time: "2:00 PM",
          speaker: "Prof. Lisa Chen",
          topic: "5G Signal Processing Architectures"
        }
      ]
    },
    {
      day: "Day 3 - November 8, 2025",
      sessions: [
        {
          time: "9:00 AM",
          speaker: "Dr. Sarah Mitchell",
          topic: "Quantum-Safe Cybersecurity for Critical Infrastructure"
        },
        {
          time: "2:00 PM",
          speaker: "Dr. Robert Taylor",
          topic: "Edge Computing Security Frameworks"
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
              Distinguished Speakers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from world-renowned experts and thought leaders in sustainable energy, signal processing, and cybersecurity at iSSSC 2025.
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
            <h2 className="text-3xl font-bold text-primary mb-4">Keynote Speakers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our keynote speakers are industry pioneers who will share cutting-edge insights and future directions in their respective fields.
            </p>
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
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <User className="h-24 w-24 text-muted-foreground" />
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
      <section className="py-16 bg-muted/30">
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
      </section>

      {/* Speaking Schedule */}
      <section className="py-16">
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
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;