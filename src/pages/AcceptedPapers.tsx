import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, FileText, Users, Calendar, ExternalLink } from 'lucide-react';

const AcceptedPapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  const papers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Renewable Energy Forecasting in Smart Grids",
      authors: ["Dr. Sarah Johnson", "Prof. Michael Chen", "Dr. Emily Davis"],
      track: "Sustainable Energy",
      abstract: "This paper presents novel deep learning methodologies for predicting renewable energy generation in smart grid systems. We propose a hybrid LSTM-CNN architecture that achieves 95% accuracy in solar and wind energy forecasting.",
      keywords: ["Deep Learning", "Smart Grids", "Renewable Energy", "Forecasting"],
      pages: "1-8",
      session: "Track 1, Session A",
      presentationTime: "November 6, 10:30 AM"
    },
    {
      id: 2,
      title: "Quantum-Resistant Cryptographic Protocols for IoT Security",
      authors: ["Prof. David Kim", "Dr. Lisa Zhang", "Dr. Robert Taylor"],
      track: "Cybersecurity",
      abstract: "We introduce a new family of quantum-resistant cryptographic protocols specifically designed for resource-constrained IoT devices. Our approach reduces computational overhead by 40% while maintaining post-quantum security guarantees.",
      keywords: ["Quantum Cryptography", "IoT Security", "Post-Quantum", "Protocols"],
      pages: "9-16",
      session: "Track 2, Session B",
      presentationTime: "November 6, 2:00 PM"
    },
    {
      id: 3,
      title: "Adaptive Signal Processing for 5G Massive MIMO Systems",
      authors: ["Dr. Ahmed Hassan", "Prof. Maria Santos", "Dr. James Wilson"],
      track: "Signal Processing",
      abstract: "This work presents adaptive signal processing techniques for 5G massive MIMO systems that dynamically optimize beamforming patterns based on channel conditions and user mobility patterns.",
      keywords: ["5G", "Massive MIMO", "Adaptive Processing", "Beamforming"],
      pages: "17-24",
      session: "Track 3, Session A",
      presentationTime: "November 7, 9:00 AM"
    },
    {
      id: 4,
      title: "Blockchain-Based Energy Trading Platform for Microgrids",
      authors: ["Prof. Anna Kowalski", "Dr. Elena Rodriguez", "Dr. Thomas Mueller"],
      track: "Sustainable Energy",
      abstract: "We propose a decentralized energy trading platform using blockchain technology that enables peer-to-peer energy transactions in microgrid networks with smart contract automation.",
      keywords: ["Blockchain", "Energy Trading", "Microgrids", "Smart Contracts"],
      pages: "25-32",
      session: "Track 1, Session B",
      presentationTime: "November 7, 11:00 AM"
    },
    {
      id: 5,
      title: "Machine Learning-Based Intrusion Detection for Critical Infrastructure",
      authors: ["Dr. Jennifer Wu", "Prof. Robert Lee", "Dr. Sarah Mitchell"],
      track: "Cybersecurity",
      abstract: "This paper introduces an ensemble machine learning approach for real-time intrusion detection in critical infrastructure systems, achieving 99.2% detection accuracy with minimal false positives.",
      keywords: ["Machine Learning", "Intrusion Detection", "Critical Infrastructure", "Security"],
      pages: "33-40",
      session: "Track 2, Session C",
      presentationTime: "November 7, 3:30 PM"
    },
    {
      id: 6,
      title: "Neuromorphic Signal Processing for Edge Computing Applications",
      authors: ["Dr. Hiroshi Tanaka", "Prof. Lisa Chen", "Dr. Kevin Park"],
      track: "Signal Processing",
      abstract: "We explore neuromorphic computing architectures for signal processing tasks in edge computing environments, demonstrating 10x energy efficiency improvements over traditional digital signal processors.",
      keywords: ["Neuromorphic Computing", "Edge Computing", "Signal Processing", "Energy Efficiency"],
      pages: "41-48",
      session: "Track 3, Session B",
      presentationTime: "November 8, 10:00 AM"
    },
    {
      id: 7,
      title: "AI-Driven Optimization of Wind Farm Layouts for Maximum Energy Harvesting",
      authors: ["Prof. Emma Thompson", "Dr. Carlos Rodriguez", "Dr. Nina Petrov"],
      track: "Sustainable Energy",
      abstract: "This study presents an AI-driven approach for optimizing wind farm layouts using genetic algorithms and reinforcement learning, resulting in 15% increase in energy harvesting efficiency.",
      keywords: ["AI Optimization", "Wind Energy", "Genetic Algorithms", "Energy Harvesting"],
      pages: "49-56",
      session: "Track 1, Session C",
      presentationTime: "November 8, 2:00 PM"
    },
    {
      id: 8,
      title: "Zero-Trust Network Architecture for Industrial Control Systems",
      authors: ["Dr. Mark Anderson", "Prof. Rachel Green", "Dr. Yuki Sato"],
      track: "Cybersecurity",
      abstract: "We propose a zero-trust network architecture specifically designed for industrial control systems, incorporating micro-segmentation and continuous authentication mechanisms.",
      keywords: ["Zero-Trust", "Industrial Control", "Network Security", "Authentication"],
      pages: "57-64",
      session: "Track 2, Session A",
      presentationTime: "November 8, 4:00 PM"
    }
  ];

  const tracks = [
    "all",
    "Sustainable Energy",
    "Signal Processing",
    "Cybersecurity"
  ];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTrack = selectedTrack === 'all' || paper.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

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
              Accepted Papers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the cutting-edge research being presented at iSSSC 2025. Browse papers across sustainable energy, signal processing, and cybersecurity tracks.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>{papers.length} Papers Accepted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>3 Research Tracks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search papers by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by track" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((track) => (
                  <SelectItem key={track} value={track}>
                    {track === 'all' ? 'All Tracks' : track}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPapers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No papers found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filter selection.</p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-primary mb-2 line-clamp-2">
                            {paper.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="secondary">{paper.track}</Badge>
                            <Badge variant="outline">Pages {paper.pages}</Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>{paper.authors.join(', ')}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{paper.presentationTime}</span>
                          </div>
                          <span className="font-medium">{paper.session}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Abstract</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-1">
                          {paper.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Full Paper
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Publication Statistics</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.slice(1).map((track, index) => {
              const trackPapers = papers.filter(paper => paper.track === track);
              return (
                <motion.div
                  key={track}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {trackPapers.length}
                      </div>
                      <div className="text-muted-foreground">{track} Papers</div>
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

export default AcceptedPapers;