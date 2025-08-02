import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConferenceTracksSection = () => {
  const tracks = [
    {
      title: 'TRACK I: SMART GRIDS & GREEN ENERGY',
      topics: [
        'Clean and Sustainable Energy',
        'Active Distribution Network Management',
        'Energy Storage',
        'Advanced Power Apparatus',
        'Condition Monitoring & Power System Asset Management',
        'Data Analytics & IoT for Power Systems',
        'Optimization for Future Grids',
        'Cyber & System Security in Power Grids',
        'Power System Protection and Stability',
        'Power System Planning & Reliability',
        'Power System Restructuring',
        'Demand Side Management',
        'Renewable Energy Integration',
        'Electric Vehicle Technologies',
      ],
      gradient: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      accent: 'border-green-200 dark:border-green-800',
    },
    {
      title: 'TRACK II: SMART TECHNOLOGIES FOR INDUSTRIES',
      topics: [
        'Smart factory and Industry 5.0',
        'Data analytics and management',
        'Power Converters & Drives',
        'Power Electronics for Hybrid and Electric Vehicles',
        'Internet of Things (IoT) in Industries',
        'Bidirectional Power Converters',
        'Power Quality',
        'Multilevel Inverter Topologies',
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      accent: 'border-blue-200 dark:border-blue-800',
    },
    {
      title: 'TRACK III: IOT AND AUTOMATION',
      topics: [
        'Developments in Automation and Control',
        'Instrumentation and Control Components',
        'Embedded systems',
        'Analytical and Virtual Instrumentation',
        'Biomedical Instrumentation and Applications',
        'Process Control and Instrumentation',
        'Linear and Nonlinear Control Systems',
        'Sampled-Data Control Systems and Digital Control',
        'Advanced Control Techniques',
        'Automated Guided Vehicles',
        'Industrial robotics and Smart manufacturing',
        'Smart Industrial Waste Management',
        'Agriculture 4.0',
        'Farm automation',
      ],
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
      accent: 'border-purple-200 dark:border-purple-800',
    },
    {
      title: 'TRACK IV: SIGNAL PROCESSING & INTELLIGENT SYSTEMS',
      topics: [
        'Signal Processing for Smart Grid and Energy Systems',
        'Audio and Speech Processing in Human-Machine Interfaces',
        'Image and Video Processing in Automation, Robotics, and Surveillance',
        'Signal Processing for Electric Vehicles and Battery Monitoring',
        'Machine Learning-Driven Signal Processing Techniques',
        'Sensor Signal Processing for IoT Applications',
        'Biomedical Signal Processing in Industrial Safety and Monitoring Systems',
        'Wireless Signal Processing for Industry 5.0 Communication',
        'Data Compression and Signal Reconstruction',
        'Real-Time Signal Processing in Cyber-Physical Systems',
      ],
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900',
      accent: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      title: 'TRACK V: ADVANCED COMPUTING AND INTELLIGENT TECHNOLOGIES',
      topics: [
        'Artificial intelligence and machine learning',
        'Computational Intelligence',
        'Big Data Analytics',
        'IoT Architectures & Protocol',
        'Natural Language Processing',
        'Cryptography & Data Security',
        'Cyber-Physical Systems',
        'Smart City Applications',
        'Computer vision and pattern recognition',
        'Data science and big data analytics',
        'Software engineering and programming languages',
        'Quantum Computing',
      ],
      gradient: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900',
      accent: 'border-red-200 dark:border-red-800',
    },
    {
      title: 'TRACK VI: MATERIALS SCIENCE AND ENGINEERING',
      topics: [
        'Nanoscience and Nanotechnology',
        'Biomaterials',
        'Advanced Materials',
        'Solar Energy materials',
        'Composite Materials',
        'Structural and functional materials',
        'Optical materials',
        'Sustainable materials',
        'Sustainable Development Goals',
        'Green economy & Environmental Sustainability',
        'Global Climate Change Impacts & Sustainable Practices',
        'Sustainable consumption and production policies',
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
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of research tracks covering cutting-edge topics in smart grids, IoT, signal processing, and advanced computing
          </p> */}
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