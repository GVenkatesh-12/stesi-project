import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConferenceTracksSection = () => {
  const tracks = [
    {
      title: 'TRACK I: ADVANCED POWER ELECTRONICS AND ENERGY CONVERSION SYSTEMS',
      topics: [
        'Power electronic converters, topologies, modulation, and control strategies',
        'Wide-bandgap semiconductor devices and high-frequency conversion',
        'Multilevel converters, HVDC, FACTS, and power-electronic-based grid technologies',
        'Power quality enhancement, harmonic mitigation, and active power filters',
        'Power electronics for renewable energy, storage, transportation, and industrial applications',
      ],
      gradient: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      accent: 'border-green-200 dark:border-green-800',
    },
    {
      title: 'TRACK II: RENEWABLE ENERGY SYSTEMS, INTEGRATION AND ENERGY STORAGE',
      topics: [
        'Solar, wind, hydro, biomass, and hybrid renewable energy systems',
        'Distributed and utility-scale renewable energy integration',
        'Grid-forming and grid-following renewable energy technologies',
        'Battery, supercapacitor, thermal, and other emerging energy storage technologies',
        'Energy management, forecasting, scheduling, and optimal utilization of renewable resources',
        'Challenges and solutions for high-penetration renewable energy systems',
      ],
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      accent: 'border-blue-200 dark:border-blue-800',
    },
    {
      title: 'TRACK III: SMART GRIDS, MICROGRIDS AND DISTRIBUTED ENERGY SYSTEMS',
      topics: [
        'Planning, design, operation, control, and optimization of AC/DC/hybrid microgrids',
        'Multi-microgrid and networked energy systems',
        'Demand response, demand-side management, and flexible energy resources',
        'Resilience, adaptive protection, and cyber-physical security of smart grids',
        'Peer-to-peer energy trading, transactive energy, blockchain, and local energy markets',
        'Distributed energy resource coordination and energy communities',
      ],
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
      accent: 'border-purple-200 dark:border-purple-800',
    },
    {
      title: 'TRACK IV: HYDROGEN ENERGY SYSTEMS AND POWER-TO-X TECHNOLOGIES',
      topics: [
        'Green, blue, and low-carbon hydrogen production technologies',
        'Electrolyzers, fuel cells, and hydrogen-based energy conversion systems',
        'Hydrogen storage, transportation, distribution, and refueling infrastructure',
        'Renewable-powered hydrogen production and renewable–hydrogen integration',
        'Hydrogen energy management, optimization, and techno-economic analysis',
        'Power-to-Hydrogen, Power-to-Gas, Power-to-Fuels, and Power-to-X pathways',
        'Hydrogen-based microgrids, backup power, mobility, and industrial applications',
        'Hybrid hydrogen–battery energy storage and integrated multi-energy systems',
      ],
      gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900',
      accent: 'border-indigo-200 dark:border-indigo-800',
    },
    {
      title: 'TRACK V: ELECTRIC MOBILITY, VEHICLE-TO-GRID AND INTELLIGENT TRANSPORTATION ELECTRIFICATION',
      topics: [
        'Electric and hybrid-electric vehicle technologies and drivetrains',
        'AC/DC fast charging, wireless charging, and charging infrastructure',
        'Vehicle-to-Grid (V2G), Vehicle-to-Home (V2H), and Vehicle-to-Building (V2B) applications',
        'Coordinated EV charging and charging-station planning',
        'Battery management, degradation, and second-life battery applications',
        'Fuel-cell electric vehicles and hydrogen mobility',
        'EV-grid interaction, transportation-energy integration, standards, policies, and markets',
      ],
      gradient: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900',
      accent: 'border-red-200 dark:border-red-800',
    },
    {
      title: 'TRACK VI: ARTIFICIAL INTELLIGENCE, DIGITALIZATION AND IOT FOR ENERGY SYSTEMS',
      topics: [
        'Machine learning, deep learning, reinforcement learning, and generative AI for energy applications',
        'AI-based forecasting, optimization, control, and energy management',
        'Predictive maintenance, condition monitoring, and fault diagnosis',
        'Digital twins and cyber-physical energy systems',
        'IoT-enabled monitoring, smart metering, and intelligent energy management',
        'Edge, fog, and cloud computing for energy applications',
        'AI-enabled cybersecurity and resilient intelligent energy infrastructure',
      ],
      gradient: 'from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900',
      accent: 'border-amber-200 dark:border-amber-800',
    },
    {
      title: 'TRACK VII: POWER SYSTEM PLANNING, OPERATION, STABILITY AND RESILIENCE',
      topics: [
        'Power system planning, expansion, operation, and optimal power flow',
        'Unit commitment, economic dispatch, and electricity market operation',
        'Power system stability, dynamics, oscillations, and control',
        'Wide-area measurement, monitoring, protection, and control',
        'HVDC, FACTS, and emerging transmission technologies',
        'Renewable-rich power system operation and flexibility management',
        'Grid resilience, restoration, self-healing systems, and disaster management',
      ],
      gradient: 'from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900',
      accent: 'border-teal-200 dark:border-teal-800',
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
            STESI 2027 invites submissions across seven comprehensive tracks focusing on green hydrogen, power systems, clean energy, and intelligent technologies.
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
