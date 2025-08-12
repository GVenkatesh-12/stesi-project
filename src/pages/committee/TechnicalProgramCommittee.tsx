import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

const TechnicalProgramCommittee = () => {
  const technicalCommittee = [
    { name: "Dr. Almoataz Y. Abdelaziz", affiliation: "Future University in Egypt, Cairo, Egypt" },
    { name: "Dr. Gulshan Sharma", affiliation: "University of Johannesburg, South Africa" },
    { name: "Dr. Pitshou N. Bokoro", affiliation: "University of Johannesburg, South Africa" },
    { name: "Dr. Senthil Krishnamurthy", affiliation: "Cape Peninsula University of Technology, Cape Town, South Africa" },
    { name: "Dr. Arvind R. Singh", affiliation: "Hanjiang Normal University, China" },
    { name: "Dr. Fausto Pedro Garcia Marquez", affiliation: "University of Castilla-La Mancha: Ciudad Real Campus, Spain" },
    { name: "Dr. Anil Swarnkar", affiliation: "MNIT, Jaipur" },
    { name: "Prof. Ghanshyam Singh", affiliation: "MNIT, Jaipur" },
    { name: "Dr. Ashish Shrivastava", affiliation: "Shri Vishwakarma state University, Gurugram, India" },
    { name: "Dr. Vinay Kumar Jadoun", affiliation: "Manipal Institute of Technology, Manipal, Karnataka" },
    { name: "Dr. Shashikant Sharma", affiliation: "IIIT Ranchi, Ranchi, India" },
    { name: "Dr. Narayanan Krishnan", affiliation: "SASTRA Deemed to be University, Tirumalaisamudram, Thanjavur" },
    { name: "Dr. Kailash Chand Sharma", affiliation: "Dr. B. R. Ambedkar National Institute of Technology Jalandhar" },
    { name: "Dr. Akanksha Shukla", affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat" },
    { name: "Dr. Kapil Shukla", affiliation: "MNIT Jaipur, India" },
    { name: "Dr. Saurabh Ratra", affiliation: "Punjab Agricultural University, Ludhiana" },
    { name: "Dr. Amit Kumar Garg", affiliation: "IIIT Kota India" },
    { name: "Dr. Nikhil Deep Gupta", affiliation: "VNIT, Nagpur India" },
    { name: "Dr. Manoj Kumawta", affiliation: "NIT Delhi, India" },
    { name: "Dr. Sachin Sharma", affiliation: "MIT, India" },
    { name: "Dr. Suman Sharma", affiliation: "SKIT M&G Jaipur, Rajasthan, India" },
    { name: "Dr. Rayees Ahmad Thokar", affiliation: "Maharishi Markandeshwar University (MMU) Mullana, Ambala, Haryana" },
    { name: "Dr. Jyotsna Singh", affiliation: "SKIT M&G Jaipur, Rajasthan, India" },
    { name: "Dr. Rohit Babu", affiliation: "Alliance University, Bangalore, India" },
    { name: "Dr. Ravi Bhushan", affiliation: "NIT Jamshedpur, India" },
    { name: "Dr. Saurav Raj", affiliation: "ICT Jalna, Maharashtra, India" },
    { name: "Dr. Srikant Misra", affiliation: "GIET University, Gunupur, India" },
    { name: "Dr. Arnab Pal", affiliation: "Silicon Institute of Technology, Bhubaneswar, India" },
    { name: "Dr. Nihar Karmakar", affiliation: "Adamas University, Kolkata, India" }
  ];

  const getCountryIcon = (affiliation: string) => {
    if (affiliation.includes('Egypt')) return '🇪🇬';
    if (affiliation.includes('South Africa')) return '🇿🇦';
    if (affiliation.includes('China')) return '🇨🇳';
    if (affiliation.includes('Spain')) return '🇪🇸';
    return '🇮🇳';
  };

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
              Technical Program Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our distinguished international technical program committee members who ensure the highest quality of research presentations and technical content at STESI 2026.
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
              International & National Committee Members
            </h2>
            <p className="text-muted-foreground">Representing leading institutions from around the world</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-sm leading-tight">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl">{getCountryIcon(member.affiliation)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-tight">{member.affiliation}</p>
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

export default TechnicalProgramCommittee;
