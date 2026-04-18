import React from 'react';
import AppImage from '@/components/ui/AppImage';

const events = [
{
  title: 'Pitch Day Edition 2',
  subtitle: 'Day 3 · 11:00 AM – 5:00 PM',
  tag: 'Investor Connect',
  description: 'The dedicated pitch stage where high-potential FMCG brands present to an invited panel of investors. Founders also discover manufacturing, packaging, and ingredient partners.',
  cta: 'Apply to Pitch',
  img: "https://pitchday.cmplexpo.com/assets/VIS_1381.jpg",
  alt: 'CMPL Pitch Day group photo - startup founders and investors at Jio World Convention Centre',
  accentColor: '#B8860B',
  wide: true
},
{
  title: 'Disruptors Awards Night',
  subtitle: 'Day 1 · 6:30 PM Onwards',
  tag: '50+ Awards · Celebrity Presence',
  description: 'Recognizing innovation and excellence across FMCG. Chief Guest: Sunny Leone. An evening of celebration, recognition, and premium networking.',
  cta: 'Learn More',
  img: "/assets/banner/distruptor.jpg",
  alt: 'Disruptors Awards Night at CMPL Expo',
  accentColor: '#C94E4E',
  wide: false
},
{
  title: 'Food Founders Meetup',
  subtitle: 'Day 1 · 4:30 – 6:30 PM',
  tag: 'F&B Founders Only',
  description: 'An exclusive gathering for food & beverage founders. In collaboration with Equinox Labs and the Food Founders Ecosystem.',
  cta: 'Request Invite',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1c7b9853c-1772807555846.png",
  alt: 'Small group of food entrepreneurs networking around a table in a warm well-lit private dining setting',
  accentColor: '#2E7DB8',
  wide: false
}];


export default function SpecialEventsSection() {
  return (
    <section
      id="special-events"
      className="relative z-10 py-12 sm:py-24 md:py-28 border-b"
      style={{ background: '#FAFAF8', borderColor: 'rgba(184,134,11,0.12)' }}>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="section-label">05 / Special Events</span>
          <div className="flex-1 gold-divider max-w-[80px]" />
        </div>

        <div className="mb-12 scroll-reveal">
          <h2
            className="font-display font-bold text-expo-fg leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
            Beyond the
            <br />
            <span className="text-gold-gradient">Exhibition Floor</span>
          </h2>
        </div>

        {/* Layout: Pitch Day wide + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pitch Day — wide */}
          <div
            className="lg:col-span-2 experience-card rounded-lg overflow-hidden relative scroll-reveal"
            style={{ minHeight: '280px', border: '1px solid rgba(184,134,11,0.2)' }}>
            
            <AppImage
              src={events?.[0]?.img}
              alt={events?.[0]?.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw" />
            
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.55) 60%, rgba(10,8,6,0.35) 100%)' }} />
            
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col justify-end z-10">
              <span
                className="text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full self-start mb-4"
                style={{ background: 'rgba(184,134,11,0.15)', color: '#D4A017', border: '1px solid rgba(184,134,11,0.35)' }}>
                {events?.[0]?.tag}
              </span>
              <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{events?.[0]?.subtitle}</p>
              <h3
                className="font-display font-bold mb-3"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#FFFFFF' }}>
                {events?.[0]?.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.7)' }}>{events?.[0]?.description}</p>
              <a href="https://pitchday.cmplexpo.com/backend/public/apply_now" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block self-start px-6 py-3 text-sm font-bold tracking-wide">
                <span className="relative z-10">{events?.[0]?.cta}</span>
              </a>
            </div>
          </div>

          {/* Right column: 2 stacked */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {events?.slice(1)?.map((event, i) =>
            <div
              key={event?.title}
              className={`experience-card rounded-lg overflow-hidden relative flex-1 scroll-reveal delay-${i + 1}`}
              style={{ minHeight: '150px', border: `1px solid ${event?.accentColor}25` }}>
              
                <AppImage
                src={event?.img}
                alt={event?.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw" />
              
                <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.6) 100%)' }} />
              
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded-full self-start mb-2"
                  style={{ background: `${event?.accentColor}20`, color: event?.accentColor, border: `1px solid ${event?.accentColor}40` }}>
                    {event?.tag}
                  </span>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{event?.subtitle}</p>
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: '#FFFFFF' }}>{event?.title}</h3>
                  <a
                  href="#register"
                  className="text-xs font-bold tracking-wider uppercase transition-colors"
                  style={{ color: event?.accentColor }}>
                    {event?.cta} →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}