import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './cmplexpo/components/HeroSection';
import AboutSection from './cmplexpo/components/AboutSection';
import WhatsInsideSection from './cmplexpo/components/WhatsInsideSection';
import AgendaSection from './cmplexpo/components/AgendaSection';
import FeaturedExperiencesSection from './cmplexpo/components/FeaturedExperiencesSection';
import SpecialEventsSection from './cmplexpo/components/SpecialEventsSection';
import WhyAttendSection from './cmplexpo/components/WhyAttendSection';
import MidCTASection from './cmplexpo/components/MidCTASection';
import VisitorTypesSection from './cmplexpo/components/VisitorTypesSection';
import FooterCTASection from './cmplexpo/components/FooterCTASection';
import ScrollController from './cmplexpo/components/ScrollController';
import StickyNavButtons from './cmplexpo/components/StickyNavButtons';

export default function HomePage() {
  return (
    <main className="relative min-h-screen" style={{ background: '#0A0806' }}>
      <div id="parallax-dots" aria-hidden="true" />
      <div className="grid-lines hidden md:grid" aria-hidden="true">
        {Array.from({ length: 12 })?.map((_, i) => (
          <div key={i} className="grid-line-col" />
        ))}
      </div>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhatsInsideSection />
      <AgendaSection />
      <FeaturedExperiencesSection />
      <SpecialEventsSection />
      <WhyAttendSection />
      <MidCTASection />
      <VisitorTypesSection />
      <FooterCTASection />
      <Footer />
      <ScrollController />
      <StickyNavButtons />
    </main>
  );
}
