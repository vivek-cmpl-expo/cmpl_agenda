import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function FooterCTASection() {
  return (
    <section
      id="register"
      className="relative z-10 py-28 md:py-36 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_10676ac89-1766793242075.png"
          alt="Large convention hall with massive crowd of business professionals, dim atmospheric lighting, dark steel ceiling with dramatic spotlights creating deep shadows"
          fill
          className="object-cover"
          sizes="100vw" />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.80) 50%, rgba(10,8,6,0.65) 100%)' }} />
        
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(184,134,11,0.1) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 scroll-reveal">
            <span className="section-label" style={{ color: '#C8A84B' }}>09 / Join CMPL Expo</span>
            <div className="gold-divider max-w-[60px]" />
          </div>

          {/* Headline */}
          <h2
            className="font-display font-bold leading-[0.88] tracking-tight mb-6 scroll-reveal"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', color: '#FFFFFF' }}>
            From Idea to Shelf —
            <br />
            <span className="text-gold-gradient">Build, Scale,</span>
            <br />
            and Connect.
          </h2>

          <p className="text-xl leading-relaxed mb-10 max-w-2xl scroll-reveal delay-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Asia's largest contract manufacturing and private label platform. 4–6 May 2026 at Jio World Convention Centre, Mumbai.
          </p>

          {/* Three CTAs */}
          <div className="flex flex-wrap gap-4 scroll-reveal delay-2">
            <a href="#" className="btn-gold relative px-8 py-4 text-sm font-bold tracking-widest uppercase">
              <span className="relative z-10">Register as Visitor</span>
            </a>
            <a
              href="#"
              className="btn-outline-gold px-8 py-4 text-sm font-bold tracking-widest uppercase">
              Exhibit / Show Space
            </a>
            <a
              href="#"
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase rounded border transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.65)' }}>
              Become a Partner
            </a>
          </div>

          {/* Event info chips */}
          <div className="flex flex-wrap gap-3 mt-10 scroll-reveal delay-3">
            {[
            { icon: '📅', text: '4–6 May 2026' },
            { icon: '📍', text: 'Jio World Convention Centre, BKC Mumbai' },
            { icon: '🏢', text: '500+ Exhibitors' },
            { icon: '👥', text: '30,000+ Visitors' }]?.
            map((chip) =>
            <div
              key={chip?.text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm"
              style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>
                <span>{chip?.icon}</span>
                {chip?.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);
}