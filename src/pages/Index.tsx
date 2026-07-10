import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ScheduleDownloadsSection from '@/components/ScheduleDownloadsSection';
import SponsorsBanner from '@/components/SponsorsBanner';
import CountdownSection from '@/components/CountdownSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import ConferenceTracksSection from '@/components/ConferenceTracksSection';
import Footer from '@/components/Footer';

const documentLinkPattern = /\.(pdf|docx|pptx|zip)$/i;

const Index = () => {
  const marqueeItems = [
    { text: 'PROGRAM SCHEDULE IS UPLOADED', link: '/program%20schedule_STESI2026.pdf' },
    { text: 'TECHNICAL SESSION SCHEDULE IS UPLOADED', link: '/Detail_Technical%20Session_STESI2026.pdf' },
    { text: 'LIST OF ACCEPTED AND REGISTERED PAPERS IS UPLOADED', link: '/accepted-papers' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ScheduleDownloadsSection />
      <SponsorsBanner />
      <CountdownSection />
      <ImportantDatesSection />
      <div className="bg-white/80 dark:bg-black/40 border-y border-red-200 dark:border-red-800 py-3 overflow-hidden">
        <div className="animate-marquee text-red-600 font-bold text-2xl">
          {Array.from({ length: 8 }).map((_, i) => {
            const item = marqueeItems[i % marqueeItems.length];
            const isDocumentLink = documentLinkPattern.test(
              decodeURIComponent(item.link).split(/[?#]/)[0]
            );

            return (
              <Fragment key={i}>
                {isDocumentLink ? (
                  <a href={item.link} className="mx-16 hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <Link to={item.link} className="mx-16 hover:underline">
                    {item.text}
                  </Link>
                )}
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
