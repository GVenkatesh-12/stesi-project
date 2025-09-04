import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdvisoryCommittees = () => {
  const instituteAdvisoryCommittee = [
    { name: "Dr. Amit Soni", title: "Manipal University Jaipur" },
    { name: "Prof. Kuldip Singh Sangwan", title: "Manipal University Jaipur" }
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. K. R. Niazi", title: "MNIT Jaipur" },
    { name: "Dr. Chandan Kumar", title: "IIT Guwahati" },
    { name: "Dr. Rajib Dey", title: "NIT Silchar" },
    { name: "Dr. Trapti Jain", title: "IIT Indore" }
  ];

  const internationalAdvisoryCommittee = [
    { name: "Dr. Rajesh Kumar", title: "University of Johannesburg, South Africa" },
    { name: "Dr. Ramesh Bansal", title: "University in Sharjah, United Arab Emirates" },
    { name: "Prof. Almoataz Youssef Abdelaziz", title: "Ain Shams University, Egypt" },
    { name: "Prof. Dipti Srinivasan", title: "National University of Singapore (NUS), Singapore" },
    { name: "Prof. Lalit Goel", title: "Nanyang Technological University (NTU), Singapore" },
    { name: "Prof. Akshay Kumar Rathore", title: "National University of Singapore (NUS), Singapore" }
  ];

  const steeringCommittee = [
    { name: "Dr. V. Ramgopal Rao", title: "Group Vice-Chancellor, BITS Pilani, Jhunjhunu (Dist) Rajasthan" },
    { name: "Dr. Nikhil Gupta", title: "MNIT Jaipur" },
    { name: "Dr. Sanjib Ganguly", title: "IIT Guwahati" },
    { name: "Dr. Prerna Gaur", title: " Netaji Subhash University of Technology, New Delhi" }
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
              Advisory Committees
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished advisory committees providing strategic guidance and expertise to ensure the success of STESI 2026.
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
              Institute Advisory Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {instituteAdvisoryCommittee.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-blue-100 text-blue-800">Institute Advisory</Badge>
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
              National Advisory Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {nationalAdvisoryCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">
                    <CardTitle className="text-sm leading-tight mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">National Advisory</Badge>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <p className="text-xs text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              International Advisory Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {internationalAdvisoryCommittee.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-purple-100 text-purple-800">International Advisory</Badge>
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
              Steering Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {steeringCommittee.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-orange-100 text-orange-800">Steering Committee</Badge>
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

export default AdvisoryCommittees;
