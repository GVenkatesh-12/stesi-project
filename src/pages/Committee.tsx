import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, User } from 'lucide-react';

const Committee = () => {
  const chiefPatrons = [
    {
      name: "Dr. Satya Prakash Panda",
      title: "President, GIET University"
    },
    {
      name: "Dr. Chandra Dhwaj Panda",
      title: "Vice President, GIET University"
    },
    {
      name: "Dr. Jagadish Panda",
      title: "Director General, GIET University"
    }
  ];

  const patrons = [
    {
      name: "Dr. A V N L Sharma",
      title: "Vice Chancellor, GIET University"
    },
    {
      name: "Dr. N V Jagannadha Rao",
      title: "Registrar, GIET University"
    }
  ];

  const executiveSteeringCommittee = [
    {
      name: "Dr. K V S Hari",
      title: "Director, Centre for Brain Research, IISC Bengaluru"
    },
    {
      name: "Mr. Puneet Mishra",
      title: "Vice Chair (Technical Activities), IEEE India Council"
    },
    {
      name: "Dr. Suparna Kar Chowdhury",
      title: "Chair IEEE Kolkata Section"
    },
    {
      name: "Dr. Chinmaya Ku Panigrahi",
      title: "Vice-Chair, IEEE Bhubaneswar Section"
    },
    {
      name: "Dr. Dulu Patnaik",
      title: "Dean SOET, GIET University"
    }
  ];

  const honoraryChair = [
    {
      name: "Dr. L M Pattnaik",
      title: "Pro-Chancellor, GIET University"
    }
  ];

  const generalChairs = [
    {
      name: "Dr. Bibhuti Bhusan Biswal",
      title: "Vice Chancellor, OUTR Bhubaneswar"
    },
    {
      name: "Dr. Pratap Kumar Panigrahi",
      title: "Professor, GIET University"
    }
  ];

  const technicalProgramChairs = [
    {
      name: "Dr. Bibhudatta Sahoo",
      title: "NIT Rourkela"
    },
    {
      name: "Dr. Nibaran Das",
      title: "Jadavpur University, WB"
    },
    {
      name: "Dr. Niranjan Ray",
      title: "KIIT Bhubaneswar"
    },
    {
      name: "Dr. Ranjan Kumar Pradhan",
      title: "OUTR Bhubaneswar"
    }
  ];

  const otherCommitteeMembers = [
    {
      name: "Prof. G Satya Prasad",
      title: "Conference Chair",
      affiliation: "GIET University"
    },
    {
      name: "Dr. Michael Packianather",
      title: "Publication Chair",
      affiliation: "Cardiff University, UK"
    },
    {
      name: "Dr. Ayas Kanta Swain",
      title: "Publication Chair",
      affiliation: "NIT Rourkela"
    },
    {
      name: "Dr. Debabrata Nayak",
      title: "Industrial Track Chair",
      affiliation: "PWC India"
    },
    {
      name: "Dr. Srikant Mahapatra",
      title: "Industrial Track Chair",
      affiliation: "TCS Bhubaneswar"
    },
    {
      name: "Dr. Srikant Misra",
      title: "Finance Chair",
      affiliation: "GIET University"
    },
    {
      name: "Dr. Arun Kumar",
      title: "Tutorial Chair",
      affiliation: "NIT Rourkela"
    },
    {
      name: "Dr. Puneet Kumar Jain",
      title: "Tutorial Chair",
      affiliation: "NIT Rourkela"
    },
    {
      name: "Dr. Vandana Bhattacharjee",
      title: "Women in Engineering Chair",
      affiliation: "BIT Mesra"
    }
  ];

  const technicalProgramCommittee = [
    {
      name: "Dr. Suresh Mikkili",
      affiliation: "NIT Goa"
    },
    {
      name: "Dr. S K Tripathy",
      affiliation: "NIT Silchar"
    },
    {
      name: "Dr. S L Shivadarshan",
      affiliation: "NIT Warangal"
    },
    {
      name: "Dr. Shelly Vadhera",
      affiliation: "NIT Kurukshetra"
    },
    {
      name: "Dr. Durbadal Mandal",
      affiliation: "NIT Durgapur"
    },
    {
      name: "Dr. Kriti Bhushan",
      affiliation: "NIT Kurukshetra"
    },
    {
      name: "Dr. S N Deepa",
      affiliation: "NIT Calicut"
    },
    {
      name: "Dr. Mitul Kumar Ahirwal",
      affiliation: "MANIT Bhopal"
    },
    {
      name: "Dr. Ashok Kumar",
      affiliation: "NIT Hamirpur"
    },
    {
      name: "Dr. C. Vyjayanthi",
      affiliation: "NIT Goa"
    },
    {
      name: "Dr. B. Surendiran",
      affiliation: "NIT Puducherry"
    },
    {
      name: "Dr. Satyabrata Das",
      affiliation: "VSSUT, Sambalpur"
    },
    {
      name: "Dr. Ravi Sankar Barpanda",
      affiliation: "VIT, AP"
    },
    {
      name: "Dr. V P Harigovindan",
      affiliation: "NIT Puducherry"
    },
    {
      name: "Dr. K Satya Babu",
      affiliation: "IIIT, Kurnool"
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
              Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the distinguished experts leading iSSSC 2025, bringing together top researchers and industry leaders from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chief Patrons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Chief Patron(s)</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {chiefPatrons.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">Chief Patron</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patrons */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Patron(s)</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {patrons.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">Patron</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Steering Committee */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Executive Steering Committee</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {executiveSteeringCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">Executive Steering</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honorary Chair */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Honorary Chair</h2>
          </motion.div>

          <div className="max-w-md mx-auto">
            {honoraryChair.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">Honorary Chair</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Chairs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">General Chair(s)</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {generalChairs.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">General Chair</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Program Chairs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Program Chair(s)</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {technicalProgramChairs.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">Technical Program Chair</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Committee Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Other Committee Members</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {otherCommitteeMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">{member.title}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Program Committee */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Program Committee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The International Advisory Board consists of renowned researchers and academicians from around the world who provide strategic guidance and advice for the conference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalProgramCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">{member.affiliation}</p>
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

export default Committee;