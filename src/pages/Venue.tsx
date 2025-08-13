import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Car, Train, Hotel, Utensils, Camera, Wifi, Coffee, Users } from 'lucide-react';

const Venue = () => {
  const venueFeatures = [
    {
      icon: Users,
      title: "Conference Halls",
      description: "Modern auditoriums with capacity for 500+ attendees"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Complimentary WiFi throughout the campus"
    },
    {
      icon: Coffee,
      title: "Catering Services",
      description: "On-site dining and refreshment facilities"
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Ample parking space for conference attendees"
    }
  ];

  const accommodations = [
    {
      name: "Manipal University Guest House",
      distance: "On Campus",
      rating: "4.0/5",
      priceRange: "₹2,500 - ₹3,500",
      amenities: ["Free WiFi", "Restaurant", "AC Rooms", "Parking"],
      contact: "+91-141-3999100"
    },
    {
      name: "Hotel Clarks Amer",
      distance: "15 km from MUJ",
      rating: "4.3/5",
      priceRange: "₹4,500 - ₹6,500",
      amenities: ["Luxury Rooms", "Spa", "Multi-cuisine Restaurant", "Conference Facilities"],
      contact: "+91-141-2543333"
    },
    {
      name: "Holiday Inn Jaipur City Centre",
      distance: "18 km from MUJ",
      rating: "4.2/5",
      priceRange: "₹3,800 - ₹5,500",
      amenities: ["Restaurant", "WiFi", "AC Rooms", "Travel Desk"],
      contact: "+91-141-4028888"
    },
    {
      name: "Radisson Blu Jaipur",
      distance: "20 km from MUJ",
      rating: "4.5/5",
      priceRange: "₹5,000 - ₹7,500",
      amenities: ["Luxury Rooms", "Spa", "Multi-cuisine Restaurant", "Conference Facilities"],
      contact: "+91-141-2708888"
    }
  ];

  const travelOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Nearest Airport: Jaipur International Airport (JAI) - 25 km",
      details: [
        "Direct flights from Delhi, Mumbai, Bangalore, Hyderabad, Kolkata",
        "International connections via Delhi and Mumbai",
        "Taxi service available from airport (₹800-1,200)",
        "Pre-paid taxi counters and ride-sharing apps available"
      ]
    },
    {
      icon: Train,
      title: "By Train",
      description: "Nearest Railway Station: Jaipur Junction (JP) - 20 km",
      details: [
        "Regular trains from major cities: Delhi, Mumbai, Bangalore, Kolkata",
        "Rajdhani Express and Shatabdi Express services available",
        "Metro and taxi service to Manipal University Jaipur",
        "Auto-rickshaws and cabs available for local transport"
      ]
    },
    {
      icon: Car,
      title: "By Road",
      description: "Well connected by national highways and expressways",
      details: [
        "NH-48 connects to Delhi (280 km) and Mumbai (1,200 km)",
        "Jaipur-Ajmer Express Highway for easy access",
        "Regular bus services from Delhi, Mumbai, and other major cities",
        "Self-drive options available with good road conditions"
      ]
    }
  ];

  const attractions = [
    {
      name: "Amber Fort",
      distance: "25 km",
      description: "Historic hilltop fort with stunning Rajput architecture and panoramic views",
      image: "/Amber fort.png"
    },
    {
      name: "Hawa Mahal",
      distance: "20 km",
      description: "Iconic palace of winds with intricate honeycomb facade and royal heritage",
      image: "/Hawa mahal.png"
    },
    {
      name: "City Palace",
      distance: "22 km",
      description: "Royal residence with museums, courtyards, and blend of Rajasthani and Mughal architecture",
      image: "/City Palace.png"
    },
    {
      name: "Jantar Mantar",
      distance: "21 km",
      description: "UNESCO World Heritage astronomical observatory with 19 architectural instruments",
      image: "/Jantar mantar.png"
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
              Venue & Travel
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join us at Manipal University Jaipur - a premier educational institution located in the vibrant Pink City of Jaipur, Rajasthan.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007, India</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-card rounded-lg p-8 shadow-card">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">About Manipal University Jaipur</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Manipal University Jaipur is a leading private university in Rajasthan, known for its world-class infrastructure and commitment to academic excellence. The university provides an ideal setting for our international conference with modern conference facilities and a vibrant campus environment.
                </p>
                <p>
                  Located on the Jaipur-Ajmer Express Highway, the university campus features contemporary architecture, advanced technological facilities, and beautiful green spaces that create an inspiring atmosphere for academic discourse and innovation.
                </p>
                <p>
                  The conference venue includes multiple auditoriums, seminar halls, and breakout rooms equipped with the latest audio-visual technology to ensure a seamless conference experience for all participants.
                </p>
              </div>
              
            </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2850.6828598070338!2d75.5626594!3d26.84386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e1!3m2!1sen!2sin!4v1755078279944!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manipal University Jaipur Location"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* Venue Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">How to Reach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manipal University Jaipur is well-connected by air, rail, and road. Choose the most convenient option for your travel to Jaipur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{option.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {option.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Explore the Region</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extend your stay and discover the rich cultural heritage and architectural marvels of Jaipur, the Pink City of India. Perfect for post-conference exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-1">{attraction.name}</h3>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{attraction.distance}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{attraction.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Attractions */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">More to Explore</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jaipur offers a perfect blend of history, culture, and modern amenities for conference attendees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-lg p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Cultural Experiences</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Traditional Markets:</strong> Johari Bazaar for jewelry, Bapu Bazaar for textiles</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Local Cuisine:</strong> Dal Baati Churma, Ghewar, Laal Maas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Folk Performances:</strong> Traditional Rajasthani music and dance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Handicrafts:</strong> Blue pottery, block printing, gemstone work</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card rounded-lg p-8 shadow-card"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Practical Information</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Best Time:</strong> October to March (pleasant weather)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Local Transport:</strong> Metro, buses, auto-rickshaws, cabs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Currency:</strong> Indian Rupee (INR)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Language:</strong> Hindi, English widely spoken</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Venue;