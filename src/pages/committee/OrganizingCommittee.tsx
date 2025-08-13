import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const OrganizingCommittee = () => {
  const programChair = {
    name: "Dr. Neeraj Kanwar",
    title: "HoD EE, Manipal University Jaipur"
  };

  const conveners = [
    {
      name: "Dr. Neeraj Kanwar",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Bishwajit Dey",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Divya Rishi Shrivastava",
      title: "Manipal University Jaipur"
    }
  ];

  const financeChairs = [
    {
      name: "Dr. Sunil Kumar Goyal",
      title: "Manipal University Jaipur"
    },
    {
      name: "Mr. Satya Narayan Agrawal",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Gulshan Sharma",
      title: "University of Johannesburg, South Africa"
    }
  ];

  const registrationCommittee = [
    {
      name: "Dr. Amit Saraswat",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Himanshu Priyadarshi",
      title: "Manipal University Jaipur"
    }
  ];

  const hospitalityAccommodation = [
    {
      name: "Mr. Vikas Kr. Boradak",
      title: "Manipal University Jaipur"
    },
    {
      name: "Mr. Samarendra Pratap Singh",
      title: "Manipal University Jaipur"
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
              Organizing Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated team responsible for organizing and managing STESI 2026, ensuring a seamless conference experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Chair */}
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
              Program Chair
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

                  <CardTitle className="text-xl mb-3">{programChair.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto bg-red-100 text-red-800">Program Chair</Badge>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <p className="text-sm text-muted-foreground">{programChair.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conveners / Organizing Secretaries */}
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
              Conveners / Organizing Secretaries
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {conveners.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-blue-100 text-blue-800">Organizing Secretary</Badge>
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

      {/* Finance Chairs */}
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
              Finance Chairs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {financeChairs.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">Finance Chair</Badge>
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

      {/* Registration Committee */}
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
              Registration Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {registrationCommittee.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-purple-100 text-purple-800">Registration Committee</Badge>
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

      {/* Hospitality & Accommodation */}
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
              Hospitality & Accommodation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {hospitalityAccommodation.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-orange-100 text-orange-800">Hospitality & Accommodation</Badge>
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

export default OrganizingCommittee;
