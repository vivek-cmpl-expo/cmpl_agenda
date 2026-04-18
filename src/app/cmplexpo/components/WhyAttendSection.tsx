import React from 'react';

const reasons = [
  {
    icon: '✅',
    title: 'Meet Verified Buyers',
    description: 'Connect with pre-qualified decision-makers from modern trade, e-commerce, pharmacy chains, and HORECA.',
  },
  {
    icon: '🤝',
    title: 'Build Private Label Partnerships',
    description: 'Discover contract manufacturing collaboration across 500+ verified suppliers and co-packers.',
  },
  {
    icon: '🏭',
    title: 'Discover Manufacturers & Suppliers',
    description: 'Access exhibitors across FMCG, BPC, F&B, packaging, ingredients, and Ayurveda under one roof.',
  },
  {
    icon: '🧠',
    title: 'Learn from Industry Leaders',
    description: '40+ expert-led sessions, workshops, and masterclasses with practitioners who have built at scale.',
  },
  {
    icon: '💼',
    title: 'Close Real Business Deals',
    description: 'Structured pre-scheduled meeting format ensures every conversation has intent and outcome.',
  },
  {
    icon: '🌍',
    title: 'Go Global with Launchpad',
    description: 'Alibaba.com-partnered export program to put your products on shelves across international markets.',
  },
];

export default function WhyAttendSection() {
  return (
    <section
      id="why-attend"
      className="relative z-10 py-12 sm:py-24 md:py-28 border-b"
      style={{ background: '#FAFAF8', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">07 / Why Attend</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              6 Reasons to
              <br />
              <span className="text-gold-gradient">Be at CMPL</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex items-end scroll-reveal delay-1">
            <p className="text-expo-muted leading-relaxed">
              The only event where your next manufacturer, investor, retail buyer, and co-founder are all in the same building.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons?.map((reason, i) => (
            <div
              key={reason?.title}
              className={`scroll-reveal delay-${Math.min(i + 1, 5)} p-7 rounded-lg border experience-card`}
              style={{
                background: '#FFFFFF',
                borderColor: 'rgba(184,134,11,0.12)',
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-5"
                style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.15)' }}
              >
                {reason?.icon}
              </div>
              <h3 className="font-display font-semibold text-expo-fg text-lg mb-2">{reason?.title}</h3>
              <p className="text-expo-muted text-sm leading-relaxed">{reason?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}