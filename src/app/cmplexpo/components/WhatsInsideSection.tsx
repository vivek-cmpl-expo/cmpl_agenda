import React from 'react';

const components = [
  {
    icon: '🎙',
    title: 'SPEAQ Knowledge Series',
    description: 'Industry expert panels, trend talks, and masterclasses across Women Founders, BPC, R&D, Packaging, and more.',
  },
  {
    icon: '🛠',
    title: 'Workshops & Industry Sessions',
    description: 'Hands-on learning with Banawat - BPC Workshop, Savoré - F&B Workshop, Unpack - Packaging Workshop, and Launchpad - Export Workshop.',
  },
  {
    icon: '💡',
    title: 'Pitch Day',
    description: 'High-potential FMCG brands present to an invited panel of top investors.',
  },
  {
    icon: '🏆',
    title: 'Disruptors Awards Night',
    description: '50+ awards recognizing innovation and excellence. <br/><b>Chief Guest: Sunny Leone.</b>',
  },
  {
    icon: '🤝',
    title: 'Founders Roundtables',
    description: 'Peer learning and candid conversations with FMCG founders on scaling, sourcing, and survival.',
  },
  {
    icon: '🌐',
    title: 'Networking Events',
    description: 'Structured business connections including Food Founders Meetup and Chamber for Small Businesses meet.',
  },
];

export default function WhatsInsideSection() {
  return (
    <section
      id="inside"
      className="relative z-10 py-10 sm:py-14 md:py-20 border-b"
      style={{ background: '#F5F3EE', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">02 / What's Inside</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Six Ways to
              <br />
              <span className="text-gold-gradient">Grow at CMPL</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex items-end scroll-reveal delay-1">
            <p className="text-expo-muted leading-relaxed">
              Three days. Six distinct formats. Whether you're here to learn, pitch, network, or manufacture - there's a dedicated arena for every ambition.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="spotlight-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(184,134,11,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          {components?.map((item, i) => (
            <div
              key={item?.title}
              className={`spotlight-card experience-card p-4 sm:p-6 md:p-10 flex flex-col gap-4 scroll-reveal delay-${Math.min(i + 1, 5)}`}
              style={{ background: '#FFFFFF' }}
            >
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                  style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.15)' }}
                >
                  {item?.icon}
                </div>
                <h3 className="font-display font-semibold text-expo-fg text-xl mb-2">{item?.title}</h3>
                <p className="text-expo-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item?.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}