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
    }
  ];

  const conferenceSecretaries = [
    {
      name: "Dr. Bishwajit Dey",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Sunanda Sinha",
      title: "MNIT Jaipur"
    },
    {
      name: "Dr. Manoj Debnath",
      title: "SOA, Bhubaneswar"
    }
  ];

  const financeChairs = [
    {
      name: "Dr. Samarendra Pratap Singh",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Divya Rishi Shrivastava",
      title: "Manipal University Jaipur"
    }
  ];

  const hospitalityLogistics = [
    {
      name: "Dr. Amit Saraswat",
      title: "Manipal University Jaipur"
    },
    {
      name: "Dr. Sunil Kumar Goyal",
      title: "Manipal University Jaipur"
    }
  ];

  const localOrganizingCommittee = [
    { name: "Dr. Manish Kr. Thukral", title: "Manipal University Jaipur" },
    { name: "Dr. Vinay Gupta", title: "Manipal University Jaipur" },
    { name: "Dr. Tejpal", title: "Manipal University Jaipur" },
    { name: "Dr. Abhishek Kumar", title: "Manipal University Jaipur" },
    { name: "Mr. Satyanarayan Agarwal", title: "Manipal University Jaipur" },
    { name: "Mr. Vikas Kr. Boradak", title: "Manipal University Jaipur" },
    { name: "Mr. Mohit Sharma", title: "Manipal University Jaipur" },
    { name: "Dr. Basudha Dewan", title: "Manipal University Jaipur" },
    { name: "Dr. Deepika Bansal", title: "Manipal University Jaipur" },
    { name: "Dr. Neha Janu", title: "Manipal University Jaipur" },
    { name: "Dr. Chusen Duari", title: "Manipal University Jaipur" },
    { name: "Dr. Vishal Das", title: "Manipal University Jaipur" },
    { name: "Dr. C.P. Gupta", title: "Manipal University Jaipur" },
    { name: "Dr. Ashish Vijay", title: "Manipal University Jaipur" },
    { name: "Ms. Smriti Jain", title: "SKIT, Jaipur" },
    { name: "Dr. Suman Sharma", title: "SKIT, Jaipur" },
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
              Meet the dedicated team responsible for organizing and managing STESI 2027, ensuring a seamless conference experience.
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

      {/* Conveners / Organizing Chairs */}
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
              Organising Chairs / Conveners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
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
                    <Badge variant="secondary" className="mx-auto bg-blue-100 text-blue-800">Organising Chair</Badge>
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

      {/* Conference Secretaries */}
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
              Conference Secretaries
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {conferenceSecretaries.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-indigo-100 text-indigo-800">Secretary</Badge>
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
              Finance Chairs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
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

      {/* Hospitality & Logistics */}
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
              Hospitality & Logistics Chairs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            {hospitalityLogistics.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-orange-100 text-orange-800">Hospitality & Logistics</Badge>
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

      {/* Local Organizing Committee */}
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
              Local Organizing Committee
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {localOrganizingCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">
                    <CardTitle className="text-base font-bold mb-1">{member.name}</CardTitle>
                    <Badge variant="outline" className="mx-auto text-xs">Organizing Member</Badge>
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

      <Footer />
    </div>
  );
};

export default OrganizingCommittee;
