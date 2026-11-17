import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SponsorsBanner from '@/components/SponsorsBanner';
import CountdownSection from '@/components/CountdownSection';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import ConferenceTracksSection from '@/components/ConferenceTracksSection';
import Footer from '@/components/Footer';

const documentLinkPattern = /\.(pdf|docx|pptx|zip)$/i;

const Index = () => {
  const marqueeItems = [
    { text: 'STESI 2027 — 2ND INTERNATIONAL CONFERENCE (5TH & 6TH AUGUST 2027)', link: '/about' },
    { text: 'FIRST CALL FOR PAPERS: 1ST DECEMBER 2026', link: '/call-for-papers' },
    { text: 'PAPER SUBMISSION DEADLINE: 15TH MARCH 2027', link: '/call-for-papers' },
    { text: 'VIEW STESI 2026 PHOTO GALLERY & PROCEEDINGS', link: '/stesi-2026' }
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
