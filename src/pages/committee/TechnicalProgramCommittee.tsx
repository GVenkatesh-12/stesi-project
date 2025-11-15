import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    { name: "Dr. Manoj Kumawat", affiliation: "NIT Delhi, India" },
    { name: "Dr. Sachin Sharma", affiliation: "MIT, India" },
    { name: "Dr. Suman Sharma", affiliation: "SKIT M&G Jaipur, Rajasthan, India" },
    { name: "Dr. Rayees Ahmad Thokar", affiliation: "Maharishi Markandeshwar University (MMU) Mullana, Ambala, Haryana" },
    { name: "Dr. Jyotsna Singh", affiliation: "SKIT M&G Jaipur, Rajasthan, India" },
    { name: "Dr. Rohit Babu", affiliation: "MMMUT Gorakhpur, India" },
    { name: "Dr. Ravi Bhushan", affiliation: "NIT Jamshedpur, India" },
    { name: "Dr. Saurav Raj", affiliation: "NIT Raipur, India" },
    { name: "Dr. Srikant Misra", affiliation: "GIET University, Gunupur, India" },
    { name: "Dr. Arnab Pal", affiliation: "Silicon Institute of Technology, Bhubaneswar, India" },
    { name: "Dr. Nihar Karmakar", affiliation: "Adamas University, Kolkata, India" },
    { name: "Mr. Parth Shah", affiliation: "HITACHI Energy, California, USA" },
    { name: "Dr. Soham Dutta", affiliation: "OATI Hyderabad Office, India" },
    { name: "Dr. Satish Sharma", affiliation: "MNIT Jaipur" },
    { name: "Dr. Pulakraj Aryan", affiliation: "Manipal University Jaipur" },
    { name: "Dr. Gaurav Kansal", affiliation: "Manipal University Jaipur" },
    { name: "Er. Ankit Garg", affiliation: "MNIT Jaipur" },
    { name: "Dr. Manoj Debnath", affiliation: "Siksha 'O' Anusandhan Odisha" },
    { name: "Dr. Aniruddha Bhattacharya", affiliation: "NIT Durgapur" },
    { name: "Dr. Vinay Gupta", affiliation: "Manipal University Jaipur" },
    { name: "Dr. Chandan Kr. Shiva", affiliation: "SR University Warangal, India" },
    { name: "Dr. Vedik Baseti", affiliation: "SR University Warangal, India" }
  ];

  const getCountryInfo = (affiliation: string) => {
    if (affiliation.includes('Egypt')) return { code: 'EG', name: 'Egypt', flagUrl: 'https://flagcdn.com/w40/eg.png' };
    if (affiliation.includes('South Africa')) return { code: 'ZA', name: 'South Africa', flagUrl: 'https://flagcdn.com/w40/za.png' };
    if (affiliation.includes('China')) return { code: 'CN', name: 'China', flagUrl: 'https://flagcdn.com/w40/cn.png' };
    if (affiliation.includes('Spain')) return { code: 'ES', name: 'Spain', flagUrl: 'https://flagcdn.com/w40/es.png' };
    if (affiliation.includes('USA') || affiliation.includes('California')) return { code: 'US', name: 'USA', flagUrl: 'https://flagcdn.com/w40/us.png' };
    return { code: 'IN', name: 'India', flagUrl: 'https://flagcdn.com/w40/in.png' };
  };

  const CountryFlag = ({ countryInfo }: { countryInfo: { code: string; name: string; flagUrl: string } }) => {
    return (
      <div className="flex items-center justify-center">
        <div className="relative flex-shrink-0">
          <img
            src={countryInfo.flagUrl}
            alt={`${countryInfo.name} flag`}
            className="w-7 h-5 rounded-sm shadow-sm object-contain"
            style={{ minWidth: '28px', minHeight: '20px' }}
            onError={(e) => {
              // Fallback to country code if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'inline-block';
            }}
          />
          <span 
            className="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded hidden"
            style={{ display: 'none' }}
          >
            {countryInfo.code}
          </span>
        </div>
      </div>
    );
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-3 pt-6">
                    <CardTitle className="text-sm leading-tight mb-3">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto bg-primary/10 text-primary">Committee Member</Badge>
                  </CardHeader>
                  <CardContent className="text-center pb-6">
                    <div className="flex items-center justify-center gap-3">
                      <CountryFlag countryInfo={getCountryInfo(member.affiliation)} />
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.affiliation}</p>
                    </div>
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
