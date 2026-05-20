import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SponsorsBanner from '@/components/SponsorsBanner';
import CountdownSection from '@/components/CountdownSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import ConferenceTracksSection from '@/components/ConferenceTracksSection';
import Footer from '@/components/Footer';

const Index = () => {
  const marqueeMessage = 'A0 size (2.76×3.90 feet) POSTER TEMPLATE UPLOADED';

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SponsorsBanner />
      <CountdownSection />
      <ImportantDatesSection />
      <div className="bg-white/80 dark:bg-black/40 border-y border-red-200 dark:border-red-800 py-3 overflow-hidden">
        <div className="animate-marquee text-red-600 font-bold text-2xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <Fragment key={i}>
              <Link to="/accepted-papers" className="mx-16 hover:underline">
                {marqueeMessage}
              </Link>
              <span className="mx-16">●</span>
            </Fragment>
          ))}
        </div>
      </div>
      <ConferenceTracksSection />
      <Footer />
    </div>
  );
};

export default Index;
