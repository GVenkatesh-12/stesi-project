import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SponsorsBanner from '@/components/SponsorsBanner';
import CountdownSection from '@/components/CountdownSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import ConferenceTracksSection from '@/components/ConferenceTracksSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SponsorsBanner />
      <CountdownSection />
      <ImportantDatesSection />
      <div className="bg-white/80 dark:bg-black/40 border-y border-red-200 dark:border-red-800 py-3 overflow-hidden">
        <div className="animate-marquee text-red-600 font-bold text-2xl">
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
          <span className="mx-16">Notification of Acceptance: April 15, 2026 (tentative)</span>
          <span className="mx-16">●</span>
        </div>
      </div>
      <ConferenceTracksSection />
      <Footer />
    </div>
  );
};

export default Index;
