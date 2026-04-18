import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhatsInsideSection from './components/WhatsInsideSection';
import AgendaSection from './components/AgendaSection';
import FeaturedExperiencesSection from './components/FeaturedExperiencesSection';
import SpecialEventsSection from './components/SpecialEventsSection';
import SpeakersSection from './components/SpeakersSection';
import WhyAttendSection from './components/WhyAttendSection';
import MidCTASection from './components/MidCTASection';
import VisitorTypesSection from './components/VisitorTypesSection';
import FooterCTASection from './components/FooterCTASection';
import ScrollController from './components/ScrollController';
import StickyNavButtons from './components/StickyNavButtons';

export default function CMPLExpoPage() {
  return (
    <main className="relative min-h-screen" style={{ background: '#0A0806' }}>
      {/* Parallax dot background */}
      <div id="parallax-dots" aria-hidden="true" />
      {/* Grid lines overlay */}
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
      <SpeakersSection />
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