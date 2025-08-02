import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import ConferenceTracksSection from '@/components/ConferenceTracksSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <ImportantDatesSection />
      <ConferenceTracksSection />
      <Footer />
    </div>
  );
};

export default Index;
