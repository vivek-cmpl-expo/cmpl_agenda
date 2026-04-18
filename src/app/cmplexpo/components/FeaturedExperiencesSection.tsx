import React from 'react';
import AppImage from '@/components/ui/AppImage';

const experiences = [
  {
    title: 'SPEAQ Knowledge Series',
    subtitle: '15+ Expert-Led Sessions',
    description:
      'Women Founders Panel · Trend Talks · BPC Deep Dive · R&D Strategy · Packaging · F&B · Winning the Consumer',
    img: '/assets/banner/speaq.jpg',
    alt: 'SPEAQ Knowledge Series sessions at CMPL Expo',
    badge: 'Free with Registration',
    badgeColor: '#B8860B',
  },
  {
    title: 'Banawat Formula X',
    subtitle: 'Workshop Edition 2',
    description:
      'Build the Next Generation Indian BPC Product. Mentored by founders of Noya Beautyworks and Mascot Spincontrol Universal.',
    img: '/assets/banner/banawat.jpg',
    alt: 'Banawat Formula X BPC Workshop at CMPL Expo',
    badge: 'Paid Workshop',
    badgeColor: '#6B5FBD',
  },
  {
    title: 'Savoré F&B Workshop',
    subtitle: 'Edition 2 · Day 1',
    description:
      'Body OS building: For the way India will eat in 2026–27. Mentored by F2F Food & Beverage Consultants.',
    img: '/assets/banner/savore.jpg',
    alt: 'Savore F&B Workshop at CMPL Expo',
    badge: 'Paid Workshop',
    badgeColor: '#6B5FBD',
  },
  {
    title: 'Unpack Packaging Jam',
    subtitle: 'Edition 2 · Day 2',
    description:
      'Does your pack make the grade? Real FMCG packs tested live by Pureplay Skin Sciences and Alpla Group India.',
    img: '/assets/banner/unpack.jpg',
    alt: 'Unpack Packaging Workshop at CMPL Expo',
    badge: 'Paid Workshop',
    badgeColor: '#6B5FBD',
  },
  {
    title: 'Launchpad Export Program',
    subtitle: 'Scale Across Channels',
    description:
      'Put your products on shelves globally. Workshop partner: Alibaba.com. Mentored by Head of Marketing, Alibaba.com India.',
    img: '/assets/banner/LAUNCHPAD.jpg',
    alt: 'Launchpad Export Program at CMPL Expo',
    badge: 'Partner: Alibaba.com',
    badgeColor: '#D4700A',
  },
];

export default function FeaturedExperiencesSection() {
  return (
    <section
      id="experiences"
      className="relative z-10 py-16 md:py-28 border-b"
      style={{ background: '#F5F3EE', borderColor: 'rgba(184,134,11,0.12)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">04 / Featured Experiences</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="col-span-1 md:col-span-6 scroll-reveal">
            <h2
              className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Learn. Build.
              <br />
              <span className="text-gold-gradient">Go to Market.</span>
            </h2>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex items-end scroll-reveal delay-1">
            <p className="text-expo-muted leading-relaxed">
              Five curated programs spanning knowledge, formulation, food, packaging, and global
              distribution — each designed to deliver one tangible outcome.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences?.map((exp, i) => (
            <div
              key={exp?.title}
              className={`experience-card spotlight-card rounded-lg overflow-hidden border scroll-reveal delay-${Math.min(i + 1, 5)}`}
              style={{ borderColor: 'rgba(184,134,11,0.15)', background: '#FFFFFF' }}
            >
              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <AppImage
                  src={exp?.img}
                  alt={exp?.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
                  }}
                />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      color: exp?.badgeColor,
                      border: `1px solid ${exp?.badgeColor}44`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {exp?.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <p className="section-label mb-2">{exp?.subtitle}</p>
                <h3 className="font-display font-semibold text-expo-fg text-xl mb-3">
                  {exp?.title}
                </h3>
                <p className="text-expo-muted text-sm leading-relaxed">{exp?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
