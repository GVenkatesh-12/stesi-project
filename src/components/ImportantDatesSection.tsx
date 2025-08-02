import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, FileText, CheckCircle, Camera, UserPlus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ImportantDatesSection = () => {
  const dates = [
    {
      title: 'First Call for Papers',
      date: '20th June 2025',
      icon: FileText,
      color: 'text-blue-500',
    },
    {
      title: 'Last Date for Submission',
      date: '15th Feb. 2026',
      icon: Calendar,
      color: 'text-red-500',
    },
    {
      title: 'Notification of Acceptance',
      date: '15th April 2026',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      title: 'Camera Ready Paper Submission',
      date: '30th April 2026',
      icon: Camera,
      color: 'text-purple-500',
    },
    {
      title: 'Registration Starts',
      date: '5th May 2026',
      icon: UserPlus,
      color: 'text-orange-500',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                  <CardContent className="p-4 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <IconComponent className={`h-10 w-10 mx-auto ${item.color}`} />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`text-lg font-bold ${item.color}`}>
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