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
      name: "Hotel Kalinga",
      distance: "5 km from GIET University",
      rating: "4.2/5",
      priceRange: "₹3,500 - ₹5,000",
      amenities: ["Free WiFi", "Restaurant", "AC Rooms", "Room Service"],
      contact: "+91-6860-234567"
    },
    {
      name: "GIET Guest House",
      distance: "On Campus",
      rating: "4.0/5",
      priceRange: "₹2,000 - ₹3,000",
      amenities: ["Basic Amenities", "Cafeteria", "AC Rooms", "Parking"],
      contact: "+91-6860-123456"
    },
    {
      name: "Hotel Surya",
      distance: "8 km from GIET University",
      rating: "3.8/5",
      priceRange: "₹2,500 - ₹4,000",
      amenities: ["Restaurant", "WiFi", "AC Rooms", "Travel Desk"],
      contact: "+91-6860-345678"
    },
    {
      name: "Raj Palace Hotel",
      distance: "12 km from GIET University",
      rating: "4.5/5",
      priceRange: "₹4,000 - ₹6,500",
      amenities: ["Luxury Rooms", "Spa", "Multi-cuisine Restaurant", "Conference Facilities"],
      contact: "+91-6860-456789"
    }
  ];

  const travelOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Nearest Airport: Visakhapatnam Airport (120 km)",
      details: [
        "Direct flights from Delhi, Mumbai, Bangalore, Hyderabad",
        "Taxi service available from airport (₹2,500-3,000)",
        "Pre-paid taxi counters available at airport"
      ]
    },
    {
      icon: Train,
      title: "By Train",
      description: "Nearest Railway Station: Rayagada (35 km)",
      details: [
        "Regular trains from major cities",
        "Taxi/bus service to GIET University",
        "Auto-rickshaws available for local transport"
      ]
    },
    {
      icon: Car,
      title: "By Road",
      description: "Well connected by state and national highways",
      details: [
        "National Highway 59 connects to major cities",
        "Bus services from Bhubaneswar (4 hours)",
        "Self-drive options available"
      ]
    }
  ];

  const attractions = [
    {
      name: "Duduma Waterfalls",
      distance: "45 km",
      description: "Spectacular waterfalls and natural beauty",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Khandadhar Falls",
      distance: "60 km",
      description: "One of Odisha's highest waterfalls",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Belghar Sanctuary",
      distance: "25 km",
      description: "Wildlife sanctuary with diverse flora and fauna",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Local Tribal Villages",
      distance: "10-20 km",
      description: "Experience local tribal culture and traditions",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Join us at GIET University, Gunupur, Odisha - a premier educational institution nestled in the scenic landscapes of Eastern India.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">GIET University, Gunupur, Rayagada, Odisha, India - 765022</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">About GIET University</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GIET University is a leading technical institution in Odisha, known for its state-of-the-art infrastructure and commitment to academic excellence. The university provides an ideal setting for our international symposium with modern conference facilities and a peaceful campus environment.
                </p>
                <p>
                  Located in Gunupur, Rayagada district, the university campus spans over 50 acres and features contemporary architecture, advanced technological facilities, and beautiful green spaces that create an inspiring atmosphere for academic discourse.
                </p>
                <p>
                  The conference venue includes multiple auditoriums, seminar halls, and breakout rooms equipped with the latest audio-visual technology to ensure a seamless conference experience for all participants.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg flex items-center justify-center"
            >
              <div className="text-center">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Campus Virtual Tour</p>
                <Button variant="outline" className="mt-4">View 360° Campus</Button>
              </div>
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
              GIET University is well-connected by air, rail, and road. Choose the most convenient option for your travel to Gunupur.
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

      {/* Accommodations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Recommended Accommodations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've partnered with local hotels to offer special rates for conference attendees. Book early to secure the best deals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-primary">{hotel.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{hotel.distance}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{hotel.rating}</Badge>
                        <div className="text-sm font-medium text-primary mt-1">{hotel.priceRange}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {hotel.amenities.map((amenity) => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <Hotel className="h-4 w-4 inline mr-1" />
                        {hotel.contact}
                      </div>
                      <Button variant="outline" size="sm">Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-muted/30">
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
              Extend your stay and discover the natural beauty and rich cultural heritage of Odisha. Perfect for post-conference exploration.
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
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <Camera className="h-8 w-8 text-muted-foreground" />
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

      {/* Contact for Venue */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Need Venue Assistance?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our local arrangements team is here to help you with travel planning, accommodation bookings, and any venue-related queries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <p className="font-medium">Local Arrangements</p>
                <p className="text-muted-foreground">venue@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">Travel Support</p>
                <p className="text-muted-foreground">+91-6860-123456</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Venue;