import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ImportantDatesSection = () => {
  const dates = [
    {
      title: 'Paper Submission Deadline',
      date: 'August 15, 2025',
      icon: Calendar,
      color: 'text-red-500',
    },
    {
      title: 'Notification of Acceptance',
      date: 'August 31, 2025',
      icon: Clock,
      color: 'text-orange-500',
    },
    {
      title: 'Camera Ready Submission',
      date: 'September 15, 2025',
      icon: Users,
      color: 'text-blue-500',
    },
    {
      title: 'Conference Dates',
      date: 'November 06–08, 2025',
      icon: MapPin,
      color: 'text-green-500',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Important Dates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with all the key deadlines and conference schedules
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dates.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <IconComponent className={`h-12 w-12 mx-auto ${item.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`text-xl font-bold ${item.color}`}>
                      {item.date}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantDatesSection;