import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConferenceTracksSection = () => {
  const tracks = [
    {
      title: 'TRACK I: PROTOTYPE & PRODUCT MODELS',
      topics: [
        'IoT and AI-Enabled Smart Products',
        'Prototypes in Renewable Energy and Sustainability',
        'AI and Machine Learning in Product Design',
        'Smart Materials for Innovative Products',
        'Biotechnological Prototyping and Applications',
        'Agricultural Prototyping and Applications',
        'Waste to Wealth',
        'Prototypes for Space and Aeronautical Engineering',
        'Open-Source Prototyping Platforms',
        'Multi-Disciplinary Collaboration in Prototyping',
        'Simulation and Virtual Prototyping',
        'AR/VR Technologies in Product Prototyping',
        'Digital Twins in Design and Prototyping',
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      accent: 'border-blue-200 dark:border-blue-800',
    },
    {
      title: 'TRACK II: SUSTAINABLE ENERGY SYSTEMS AND TECHNOLOGIES',
      topics: [
        'Renewable Energy Integration and Grid Management',
        'Energy Storage Innovations',
        'AI and IoT in Energy Systems',
        'Sustainable Transportation and Green Mobility',
        'Energy Policy, Economics, and Market Trends',
        'Sustainable & Smart Buildings',
        'Energy Efficiency and Demand-Side Management',
        'Green Hydrogen Technologies',
        'Carbon Capture, Utilization, and Storage (CCUS)',
        'Emerging Renewable Energy Technologies',
        'Climate Resilience and the Energy-Water Nexus',
        'Sustainable Energy Access and Off-Grid Solutions',
        'Any other relevant fields',
      ],
      gradient: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      accent: 'border-green-200 dark:border-green-800',
    },
    {
      title: 'TRACK III: SIGNAL PROCESSING AND APPLICATIONS',
      topics: [
        'Advanced signal processing for 5G/6G communications',
        'Digital Signal Processing (DSP) Algorithms and Implementations',
        'Image and Video Signal Processing',
        'Biomedical Signal Processing',
        'Machine Learning for Signal Processing',
        'IoT and Embedded Signal Processing',
        'Signal Processing for Remote Sensing and Geosciences',
        'Signal Processing in Cyber-Physical Systems',
        'Quantum Signal Processing',
        'Emerging Signal Processing Paradigms',
        'Signal Processing in Big Data Analytics',
        'Biomedical Image processing',
      ],
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
      accent: 'border-purple-200 dark:border-purple-800',
    },
    {
      title: 'TRACK IV: CYBERSECURITY AND APPLICATIONS',
      topics: [
        'Network Security and Intrusion Detection',
        'Cryptography and Data Protection',
        'IoT Security and Privacy',
        'Blockchain and Distributed Security',
        'AI and Machine Learning in Cybersecurity',
        'Mobile and Wireless Security',
        'Cloud Security and Virtualization',
        'Cyber-Physical Systems Security',
        'Digital Forensics and Incident Response',
        'Security Risk Assessment and Management',
        'Human Factors in Cybersecurity',
        'Emerging Cybersecurity Threats and Solutions',
      ],
      gradient: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900',
      accent: 'border-red-200 dark:border-red-800',
    },
    {
      title: 'TRACK V: AI AND MACHINE LEARNING',
      topics: [
        'Deep Learning and Neural Networks',
        'Natural Language Processing',
        'Computer Vision and Image Recognition',
        'Reinforcement Learning',
        'Federated Learning and Privacy-Preserving ML',
        'Explainable AI and Interpretability',
        'AI Ethics and Fairness',
        'Edge AI and Mobile Intelligence',
        'AI for Healthcare and Biomedical Applications',
        'AI in Robotics and Autonomous Systems',
        'Generative AI and Large Language Models',
        'AI for Climate and Environmental Solutions',
      ],
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900',
      accent: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      title: 'TRACK VI: EMERGING TECHNOLOGIES',
      topics: [
        'Quantum Computing and Communications',
        'Edge Computing and Fog Networks',
        'Augmented and Virtual Reality',
        'Digital Twins and Simulation',
        'Metaverse and Immersive Technologies',
        '6G Networks and Beyond',
        'Neuromorphic Computing',
        'Advanced Materials and Nanotechnology',
        'Biotechnology and Bioinformatics',
        'Space Technology and Satellite Communications',
        'Sustainable Technology Solutions',
        'Innovation in Smart Cities',
      ],
      gradient: 'from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900',
      accent: 'border-amber-200 dark:border-amber-800',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Conference Tracks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of research tracks covering cutting-edge topics in sustainable energy, signal processing, and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${track.gradient} border-2 ${track.accent} shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-primary leading-tight">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                    <ul className="space-y-2">
                      {track.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-sm text-foreground flex items-start"
                        >
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{topic}</span>
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
    </section>
  );
};

export default ConferenceTracksSection;