import React from 'react';
import AppImage from '@/components/ui/AppImage';

const industries = [
  { name: 'FMCG', icon: '🛒' },
  { name: 'Beauty & Personal Care', icon: '✨' },
  { name: 'Food & Beverages', icon: '🍃' },
  { name: 'Packaging', icon: '📦' },
  { name: 'Ingredients', icon: '🧪' },
  { name: 'Retail', icon: '🏪' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-12 sm:py-24 md:py-32 border-b"
      style={{ background: '#FAFAF8', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 scroll-reveal">
          <span className="section-label">01 / About</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="col-span-1 md:col-span-5">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight mb-6 scroll-reveal"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              What is
              <br />
              <span className="text-gold-gradient italic">CMPL Expo?</span>
            </h2>

            <p className="text-expo-muted text-lg leading-relaxed mb-8 scroll-reveal delay-1">
              Asia's largest platform connecting retailers, D2C brands, manufacturers, suppliers,
              and innovators across the entire consumer goods value chain.
            </p>

            <p className="text-expo-muted leading-relaxed mb-10 scroll-reveal delay-2">
              Since 2019, CMPL Expo has been the definitive meeting point for the FMCG industry —
              where private label brands are born, manufacturing partnerships are forged, and the
              future of Indian consumer goods is shaped.
            </p>

            {/* Industries */}
            <div className="scroll-reveal delay-3">
              <p className="section-label mb-4">Industries Covered</p>
              <div className="flex flex-wrap gap-2">
                {industries?.map((ind) => (
                  <span
                    key={ind?.name}
                    className="visitor-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium text-expo-muted cursor-default"
                    style={{
                      borderColor: 'rgba(184,134,11,0.2)',
                      background: 'rgba(184,134,11,0.05)',
                    }}
                  >
                    <span>{ind?.icon}</span>
                    {ind?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Expo floor image */}
          <div className="col-span-1 md:col-span-7 scroll-reveal delay-2">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ height: 'clamp(300px, 45vw, 520px)' }}
            >
              <AppImage
                src="/assets/banner/expo.jpg"
                alt="CMPL Expo exhibition floor at Jio World Convention Centre"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: 'rgba(0,0,0,0.1)',
                }}
              />

              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 float-badge px-4 py-3 rounded-lg border"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  borderColor: 'rgba(184,134,11,0.25)',
                }}
              >
                <p
                  className="font-bold text-2xl font-display leading-none"
                  style={{ color: '#B8860B' }}
                >
                  500+
                </p>
                <p className="section-label mt-1">Verified Exhibitors</p>
              </div>
              {/* Top badge */}
              <div
                className="absolute top-6 right-6 px-3 py-2 rounded-full border text-[10px] font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(12px)',
                  borderColor: 'rgba(184,134,11,0.3)',
                  color: '#8B6508',
                }}
              >
                Jio World Centre · BKC
              </div>
            </div>

            {/* International pavilions note */}
          </div>
        </div>
      </div>
    </section>
  );
}
