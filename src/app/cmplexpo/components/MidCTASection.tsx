import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MidCTASection() {
  return (
    <section
      id="access"
      className="relative z-10 py-24 md:py-32 overflow-hidden"
      style={{ background: '#F5F3EE' }}>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_10676ac89-1766793242075.png"
          alt="Networking professionals in a dark convention setting with warm atmospheric lighting and shadowed walls"
          fill
          className="object-cover opacity-10"
          sizes="100vw" />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(245,243,238,0.97) 0%, rgba(245,243,238,0.90) 50%, rgba(245,243,238,0.97) 100%)' }} />
        
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Top gold bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #B8860B, transparent)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 scroll-reveal"
          style={{ borderColor: 'rgba(184,134,11,0.3)', background: 'rgba(184,134,11,0.07)' }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#B8860B' }} />
          <span className="section-label" style={{ color: '#8B6508' }}>Limited Seats Available</span>
        </div>

        <h2
          className="font-display font-bold text-expo-fg leading-[0.88] tracking-tight mb-6 scroll-reveal"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}>
          Secure Your Spot at
          <br />
          <span className="text-gold-gradient">Asia's Largest</span>
          <br />
          FMCG Platform
        </h2>

        <p className="text-expo-muted text-lg leading-relaxed mb-4 max-w-2xl mx-auto scroll-reveal delay-1">
          Join 30,000+ industry leaders, founders, and innovators at CMPL Expo 2026. Connect with verified buyers, discover manufacturers, and close real business deals.
        </p>

        {/* Free registration note */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border mb-10 scroll-reveal delay-1"
          style={{ borderColor: 'rgba(184,134,11,0.25)', background: 'rgba(184,134,11,0.06)' }}>
          <span className="text-sm font-bold">🎟</span>
          <span className="text-expo-muted text-sm">
            Registration is <span className="font-bold" style={{ color: '#B8860B' }}>FREE</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 scroll-reveal delay-2">
          <a href="#register" className="btn-gold relative px-8 py-4 text-base font-bold tracking-wide">
            <span className="relative z-10">Register Now for Free</span>
          </a>
          <a
            href="#about"
            className="btn-outline-gold px-8 py-4 text-base font-bold tracking-wide">
            Learn How It Works
          </a>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #B8860B, transparent)' }} />
    </section>
  );
}