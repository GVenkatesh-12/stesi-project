import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PatronsGeneralChairs = () => {
  const chiefPatron = {
    name: "Sh. S. Vaitheeswaran",
    title: "Chairperson, Manipal University Jaipur"
  };

  const patron = {
    name: "Prof. N. N. Sharma",
    title: "President, Manipal University Jaipur"
  };

  const coPatrons = [
    {
      name: "Prof. Karunakar A Kotegar",
      title: "Pro-President, Manipal University Jaipur"
    },
    {
      name: "Prof. Amit Soni",
      title: "Registrar, Manipal University Jaipur"
    },
    {
      name: "Dr. Nitu Bhatnagar",
      title: "Provost, Manipal University Jaipur"
    }
  ];

  const generalChairs = [
    {
      name: "Prof. Kuldip Singh Sangwan",
      title: "Dean - FoSTA, Manipal University Jaipur"
    },
    {
      name: "Dr. Ravi Kant Gupta",
      title: "Associate Dean, SoE, Manipal University Jaipur"
    }
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
              Patrons & General Chairs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished leaders and visionaries who guide STESI 2026 with their expertise and leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chief Patron */}
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
              Chief Patron
            </h2>
          </motion.div>

          <div className="max-w-md mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pt-6">
                  <CardTitle className="text-xl mb-3">{chiefPatron.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto bg-yellow-100 text-yellow-800">Chief Patron</Badge>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <p className="text-sm text-muted-foreground">{chiefPatron.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patron */}
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
              Patron
            </h2>
          </motion.div>

          <div className="max-w-md mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pt-6">
                  <CardTitle className="text-xl mb-3">{patron.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto bg-blue-100 text-blue-800">Patron</Badge>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <p className="text-sm text-muted-foreground">{patron.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-Patrons */}
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
              Co-Patrons
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coPatrons.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">Co-Patron</Badge>
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

      {/* General Chairs */}
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
              General Chairs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {generalChairs.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-purple-100 text-purple-800">General Chair</Badge>
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

export default PatronsGeneralChairs;
