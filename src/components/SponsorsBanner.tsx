import { motion } from 'framer-motion';

const SponsorsBanner = () => {
  const sponsors = [
    {
      name: 'IEEE',
      logo: '/IEEE_logo.png',
    },
    {
      name: 'IEEE Delhi Section',
      logo: '/IEEE_Delhi_Section_Logo.png',
    },
    {
      name: 'IEEE Power & Energy Society',
      logo: '/IEEE-PES-Logo.png',
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-primary/5 via-secondary/10 to-background border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-2">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-[120px] w-auto object-contain"
                style={{ maxWidth: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsBanner;

