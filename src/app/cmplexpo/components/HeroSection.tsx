'use client';

import React, { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const slides = [
  {
    src: '/assets/banner/_A742174.jpg',
    alt: 'CMPL Expo convention hall and exhibition',
  },
  {
    src: '/assets/banner/banner.jpg',
    alt: 'CMPL Expo event and networking',
  },
  {
    src: '/assets/banner/DJI_20250709155927_0042_DE-edited.jpg',
    alt: 'CMPL Expo aerial view of venue',
  },
];

const stats = [
  { label: 'Exhibitors', value: '500+', icon: '🏢' },
  { label: 'Trade Visitors', value: '30,000+', icon: '👥' },
  { label: 'Sessions', value: '15+', icon: '🎙' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleRevealed, setTitleRevealed] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    setTimeout(() => setTitleRevealed(true), 300);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides?.length);
    }, 5000);

    // Countdown
    const eventDate = new Date('2026-05-04T09:00:00+05:30');
    const diff = eventDate?.getTime() - new Date()?.getTime();
    setDays(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end"
      style={{ minHeight: '100vh' }}
      aria-label="CMPL Expo 2026 Hero"
    >
      {/* Carousel */}
      <div className="absolute inset-0 z-0">
        {slides?.map((slide, i) => (
          <div key={i} className={`carousel-slide ${i === currentSlide ? 'active' : ''}`}>
            <AppImage
              src={slide?.src}
              alt={slide?.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark scrim — black overlay from bottom */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.30) 100%)',
          }}
        />

        {/* Gold vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(184,134,11,0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full pb-0 pt-20 md:pt-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-0">
            {/* Left: Headline */}
            <div className="col-span-1 md:col-span-8 pb-8 md:pb-16">
              {/* Badge — inline in content flow */}
              {/* <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ borderColor: 'rgba(184,134,11,0.5)', background: 'rgba(184,134,11,0.15)', color: '#D4A017' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  Live Registrations Open · Free Entry
                </div>
              </div> */}

              <p
                className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: '#D4A017' }}
              >
                Asia's Largest Contract Manufacturing & Private Label Expo
              </p>

              <h1
                className={`font-display font-bold leading-[0.88] tracking-tight mb-6 ${titleRevealed ? 'reveal-active' : ''}`}
                style={{ fontSize: 'clamp(2rem, 7vw, 7.5rem)', color: '#FFFFFF' }}
              >
                <span className="block overflow-hidden">
                  <span className="text-reveal-content block">One Platform.</span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="text-reveal-content text-gold-gradient block"
                    style={{ transitionDelay: '0.12s' }}
                  >
                    Countless
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="text-reveal-content block" style={{ transitionDelay: '0.22s' }}>
                    Connections.
                  </span>
                </span>
              </h1>

              {/* Event meta */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
                <span
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <span>📅</span>
                  4–6 May 2026
                </span>
                <div
                  className="w-px h-4 hidden sm:block"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                />
                <span
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <span>📍</span>
                  Jio World Convention Centre, Mumbai
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://cmpl.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold relative px-7 py-3.5 text-sm font-bold tracking-wide"
                >
                  <span className="relative z-10">Register to Visit</span>
                </a>
                {days > 0 && (
                  <div
                    className="px-4 py-2 flex items-center gap-2 rounded border"
                    style={{ borderColor: 'rgba(184,134,11,0.3)', background: 'rgba(0,0,0,0.5)' }}
                  >
                    <span className="font-bold text-lg font-display" style={{ color: '#D4A017' }}>
                      {days}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      Days to Go
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Stats panel */}
            <div
              className="col-span-1 md:col-span-4 border-t md:border-t-0 md:border-l spotlight-group"
              style={{ borderColor: 'rgba(184,134,11,0.25)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1">
                {stats?.map((stat, i) => (
                  <div
                    key={stat?.label}
                    className={`spotlight-card p-3 sm:p-4 md:p-8 flex flex-col justify-center ${
                      i < stats?.length - 1 ? 'border-b sm:border-b-0 sm:border-r md:border-r-0 md:border-b' : ''
                    }`}
                    style={{
                      borderColor: 'rgba(184,134,11,0.18)',
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className="text-xl md:text-2xl mb-1 md:mb-2">{stat?.icon}</span>
                    <span
                      className="font-display font-bold leading-none mb-1"
                      style={{ fontSize: 'clamp(1.4rem, 4vw, 3rem)', color: '#FFFFFF' }}
                    >
                      {stat?.value}
                    </span>
                    <span
                      className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase"
                      style={{ color: '#D4A017' }}
                    >
                      {stat?.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gold bar */}
        <div className="gold-divider mt-0" />
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides?.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="transition-all duration-300"
            style={{
              width: i === currentSlide ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === currentSlide ? '#D4A017' : 'rgba(212,160,23,0.35)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
