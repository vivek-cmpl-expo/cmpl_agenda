import React from 'react';

const visitorTypes = [
  { icon: '🏪', label: 'Retailers', description: 'Looking for private label and exclusive products for their shelves' },
  { icon: '🚀', label: 'D2C Brands', description: 'Seeking manufacturing partners to scale their direct-to-consumer brands' },
  { icon: '🚚', label: 'Distributors', description: 'Discovering new products and building supply chain partnerships' },
  { icon: '🌐', label: 'Exporters', description: 'Finding Indian manufacturers for global markets and international distribution' },
  { icon: '🏭', label: 'Manufacturers', description: 'Connecting with brands, retailers, and buyers to fill capacity' },
  { icon: '📦', label: 'Suppliers', description: 'Showcasing ingredients, packaging, fragrances, and raw materials' },
];

export default function VisitorTypesSection() {
  return (
    <section
      id="visitor-types"
      className="relative z-10 py-12 sm:py-24 md:py-28 border-b"
      style={{ background: '#F5F3EE', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">08 / Who Attends</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Who Attends
              <br />
              <span className="text-gold-gradient">CMPL Expo?</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 scroll-reveal delay-1">
            <p className="text-expo-muted leading-relaxed">
              30,000+ trade visitors spanning the entire consumer goods value chain — from ingredient suppliers to retail shelf buyers.
            </p>
          </div>
        </div>

        {/* Visitor type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visitorTypes?.map((type, i) => (
            <div
              key={type?.label}
              className={`scroll-reveal delay-${Math.min(i + 1, 5)} visitor-pill p-6 rounded-lg border cursor-default flex items-start gap-4`}
              style={{
                background: '#FFFFFF',
                borderColor: 'rgba(184,134,11,0.12)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(184,134,11,0.08)' }}
              >
                {type?.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-expo-fg text-lg mb-1">{type?.label}</h3>
                <p className="text-expo-muted text-sm leading-relaxed">{type?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px scroll-reveal"
          style={{ background: 'rgba(184,134,11,0.12)', borderRadius: '8px', overflow: 'hidden' }}
        >
          {[
            { value: '500+', label: 'Exhibitors' },
            { value: '30,000+', label: 'Trade Visitors' },
            { value: '15+', label: 'SPEAQ Sessions' },
            { value: '50+', label: 'Disruptors Awards' },
          ]?.map((stat) => (
            <div
              key={stat?.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: '#FFFFFF' }}
            >
              <span
                className="font-display font-bold text-expo-fg mb-1"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                {stat?.value}
              </span>
              <span className="section-label">{stat?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}