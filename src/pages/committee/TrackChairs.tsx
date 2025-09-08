import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrackChairs = () => {
  const tracks = [
    {
      id: 1,
      title: "Smart Grids & Green Energy",
      chair: "Dr. Bishwajit Dey",
      chairInstitution: "Manipal University Jaipur",
      coChair: "Dr. Aniruddha Bhattacharya",
      coChairInstitution: "NIT Durgapur",
      gradient: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
      accent: "border-green-200 dark:border-green-800",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      id: 2,
      title: "Smart Technologies for Industries",
      chair: "Dr. Neeraj Kanwar",
      chairInstitution: "Manipal University Jaipur",
      coChair: "Dr. Gulshan Sharma",
      coChairInstitution: "University of Johannesburg, South Africa",
      gradient: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
      accent: "border-blue-200 dark:border-blue-800",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      id: 3,
      title: "IOT and Automation",
      chair: "Dr. Divya Rishi Shrivastava",
      chairInstitution: "Manipal University Jaipur",
      coChair: "Dr. Ravi Bhushan",
      coChairInstitution: "NIT Jamshedpur, India",
      gradient: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
      accent: "border-purple-200 dark:border-purple-800",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      id: 4,
      title: "Signal Processing & Intelligent Systems",
      chair: "Dr. Peeyush Garg",
      chairInstitution: "Manipal University Jaipur",
      coChair: "Dr. Arvind R. Singh",
      coChairInstitution: "Hanjiang Normal University, China",
      gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900",
      accent: "border-indigo-200 dark:border-indigo-800",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    },
    {
      id: 5,
      title: "Advanced Computing and Intelligent Technologies",
      chair: "Dr. Mahipal Bhukya",
      chairInstitution: " Manipal Institute of Technology, Bangalore",
      coChair: "Dr. Jyoti Grover",
      coChairInstitution: "MNIT, Jaipur",
      gradient: "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900",
      accent: "border-red-200 dark:border-red-800",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    },
    {
      id: 6,
      title: "Materials Science and Engineering",
      chair: "Dr. Tejpal",
      chairInstitution: "Manipal University Jaipur",
      coChair: "Dr. Saurabh Kumar Pandey",
      coChairInstitution: "IIT Patna",
      gradient: "from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900",
      accent: "border-amber-200 dark:border-amber-800",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    },
    {
      id: 7,
      title: "Energy Policy, Regulation, and Electricity Markets",
      chair: "Dr. Dipti Saxena",
      chairInstitution: "MNIT Jaipur",
      coChair: "Dr. Sunanda Sinha",
      coChairInstitution: "MNIT Jaipur",
      gradient: "from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900",
      accent: "border-teal-200 dark:border-teal-800",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    },
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
              Track Chairs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished chairs and co-chairs leading our conference tracks, 
              bringing expertise from renowned institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* <h2 className="text-3xl font-bold text-primary mb-4">
              Conference Tracks
            </h2> */}
            {/* <p className="text-muted-foreground">Leading research areas with international expertise</p> */}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full bg-gradient-to-br ${track.gradient} border-2 ${track.accent} shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                  <CardHeader className="text-center pb-4 pt-6">
                    <div className="flex justify-center mb-3">
                      <Badge variant="secondary" className={`${track.badgeColor} w-fit`}>
                        Track {track.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight text-foreground">
                      {track.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    {/* Chair */}
                    <div className="space-y-2 text-center">
                      <div className="flex justify-center">
                        <Badge variant="secondary" className={`${track.badgeColor} w-fit text-sm px-3 py-1`}>
                          Chair
                        </Badge>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-white/30 dark:border-black/30">
                        <p className="font-medium text-foreground text-center">{track.chair}</p>
                        <p className="text-sm text-muted-foreground mt-1 text-center">{track.chairInstitution}</p>
                      </div>
                    </div>

                    {/* Co-Chair */}
                    <div className="space-y-2 text-center">
                      <div className="flex justify-center">
                        <Badge variant="secondary" className={`${track.badgeColor} w-fit text-sm px-3 py-1`}>
                          Co-Chair
                        </Badge>
                      </div>
                      <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-white/30 dark:border-black/30">
                        <p className="font-medium text-foreground text-center">{track.coChair}</p>
                        <p className="text-sm text-muted-foreground mt-1 text-center">{track.coChairInstitution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto bg-gradient-card border border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Track Leadership Excellence
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our track chairs and co-chairs bring together diverse expertise from leading institutions 
                  across India and internationally, ensuring comprehensive coverage of cutting-edge research 
                  areas in science, technology, engineering, and innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default TrackChairs;
