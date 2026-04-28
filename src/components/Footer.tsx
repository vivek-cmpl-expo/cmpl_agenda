'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t relative z-10" style={{ background: '#FFFFFF', borderColor: 'rgba(184, 134, 11, 0.15)' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-8 text-center md:text-left">
          {/* Left: Logo */}
          <a href="https://cmplexpo.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <AppLogo src="/assets/logo/Logo-m26.jpg" size={400} className="h-10 sm:h-14 md:h-14 lg:h-[88px] w-auto" />
          </a>

          {/* Center: Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
            {[
              { label: 'About', href: '#about' },
              { label: 'Agenda', href: '#agenda' },
              { label: 'Experiences', href: '#experiences' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-xs sm:text-sm font-medium transition-colors"
                style={{ color: '#5C5040' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#5C5040')}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center">
            <span className="text-[10px] sm:text-[11px] font-medium" style={{ color: '#9A8E7A' }}>
              © {year} CMPL Expo-Connect LLP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}