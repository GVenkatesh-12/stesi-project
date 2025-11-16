import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const SupportingCommittees = () => {
  const publicityCommittee = [
    {
      name: "Dr. R. C. Bansal",
      title: "University of Sharjah, UAE"
    },
    {
      name: "Dr. Aneesh Prabhakar",
      title: "MNIT Jaipur"
    },
    {
      name: "Dr. Vinay Kumar Jadoun",
      title: "Manipal Institute of Technology, Manipal, Karnataka"
    },
    {
      name: "Dr. Parul Mathuria",
      title: "MNIT Jaipur"
    },
    {
      name: "Dr. Gulshan Sharma",
      title: "University of Johannesburg, South Africa"
    },
    {
      name: "Dr. Senthil Krishnamurthy",
      title: "Cape Peninsula University of Technology, Cape Town, South Africa"
    },
    {
      name: "Dr. Peeyush Garg",
      title: "Manipal University, Jaipur"
    }
  ];

  const specialSessionChairs = [
    {
      name: "Dr. Vedik Basetti",
      title: "SR University, Warangal"
    },
    {
      name: "Dr. Chandan Kr. Shiva",
      title: "SR University, Warangal"
    },
    {
      name: "Dr. Pulakraj Aryan",
      title: "Manipal University Jaipur"
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
              Supporting Committees
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated teams that provide essential support and ensure the smooth operation of STESI 2026.
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
              Publicity Committee
            </h2>
            <p className="text-muted-foreground">Promoting STESI 2026 and reaching out to the global research community</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {publicityCommittee.map((member, index) => (
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
                    <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">Publicity Committee</Badge>
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
              Special Session Chair
            </h2>
            {/* <p className="text-muted-foreground">Leading special session initiatives and coordination</p> */}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center max-w-5xl mx-auto">
            {specialSessionChairs.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pt-6">

                    <CardTitle className="text-lg mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-green-100 text-green-800">Special Session Chair</Badge>
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

      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Additional Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our supporting committees work tirelessly behind the scenes to ensure every aspect of STESI 2026 runs smoothly, 
              from technical support to logistics coordination.
            </p>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default SupportingCommittees;
