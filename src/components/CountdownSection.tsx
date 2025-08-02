import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ months: 0, days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-07-22T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ months, days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Months', value: timeLeft.months },
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
  ];

  return (
    <section id="countdown-section" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            STESI 2026
          </h2>
          <p className="text-2xl text-blue-900 font-bold">
            July 22, 2026
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 sm:gap-8 mb-16"
        >
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <Card className="p-6 sm:p-8 bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-bold text-primary mb-2">
                    {unit.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {unit.label}
                  </div>
                </div>
              </Card>
              {index < timeUnits.length - 1 && (
                <div className="mx-2 sm:mx-4 text-2xl sm:text-3xl text-muted-foreground font-light">
                  |
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;