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
  const marqueeItems = [
    { text: 'REGISTRATION CLOSED', link: '/registration' },
    { text: 'LIST OF ACCEPTED AND REGISTERED PAPERS SHALL BE UPDATED SOON', link: '/accepted-papers' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SponsorsBanner />
      <CountdownSection />
      <ImportantDatesSection />
      <div className="bg-white/80 dark:bg-black/40 border-y border-red-200 dark:border-red-800 py-3 overflow-hidden">
        <div className="animate-marquee text-red-600 font-bold text-2xl">
          {Array.from({ length: 8 }).map((_, i) => {
            const item = marqueeItems[i % marqueeItems.length];
            return (
              <Fragment key={i}>
                <Link to={item.link} className="mx-16 hover:underline">
                  {item.text}
                </Link>
                <span className="mx-16">●</span>
              </Fragment>
            );
          })}
        </div>
      </div>
      <ConferenceTracksSection />
      <Footer />
    </div>
  );
};

export default Index;
