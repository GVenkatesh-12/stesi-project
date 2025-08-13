import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const PublicationPlenaryChairs = () => {
  const publicationCommittee = [
    {
      name: "Dr. Rajeeb Dey",
      title: "NIT Silchar"
    },
    {
      name: "Dr. Kapil Pareek",
      title: "MNIT Jaipur"
    },
    {
      name: "Dr. Arvind R Singh",
      title: "Hanjian Normal University, China"
    },
    {
      name: "Dr. Neeraj Kanwar",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Bishwajit Dey",
      title: "Manipal University Jaipur"
    }
  ];

  const plenaryChairs = [
    {
      name: "Dr. Vivekananda Mukherjee",
      title: "IIT ISM Dhanbad"
    },
    {
      name: "Dr. Abhik Bhattacharya",
      title: "IIT Roorkee"
    },
    {
      name: "Dr. Rajive Tiwari",
      title: "MNIT Jaipur"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Publication & Plenary Chairs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experts responsible for ensuring high-quality publications and organizing impactful plenary sessions at STESI 2026.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Publication Committee
            </h2>
            <p className="text-muted-foreground">Ensuring high-quality research publications and proceedings</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {publicationCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">

                    <CardTitle className="text-lg mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-blue-100 text-blue-800">Publication Committee</Badge>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Plenary Chairs
            </h2>
            <p className="text-muted-foreground">Leading distinguished plenary sessions and keynote presentations</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {plenaryChairs.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">

                    <CardTitle className="text-lg mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-purple-100 text-purple-800">Plenary Chair</Badge>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
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

export default PublicationPlenaryChairs;
