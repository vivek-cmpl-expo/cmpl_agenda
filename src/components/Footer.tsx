'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';


export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t relative z-10" style={{ background: '#FFFFFF', borderColor: 'rgba(184, 134, 11, 0.15)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex items-center">
            <AppLogo src="/assets/logo/Logo-m26.jpg" size={400} className="h-20 md:h-32 w-auto" />
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'About', href: '#about' },
              { label: 'Agenda', href: '#agenda' },
              { label: 'Experiences', href: '#experiences' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#5C5040' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#5C5040')}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Right: Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all"
              style={{ borderColor: 'rgba(184,134,11,0.25)', color: '#9A8E7A' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#B8860B'; (e.currentTarget as HTMLElement).style.color = '#B8860B'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.25)'; (e.currentTarget as HTMLElement).style.color = '#9A8E7A'; }}
              aria-label="Twitter"
            >
              <Icon name="GlobeAltIcon" size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all"
              style={{ borderColor: 'rgba(184,134,11,0.25)', color: '#9A8E7A' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#B8860B'; (e.currentTarget as HTMLElement).style.color = '#B8860B'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.25)'; (e.currentTarget as HTMLElement).style.color = '#9A8E7A'; }}
              aria-label="LinkedIn"
            >
              <Icon name="BuildingOfficeIcon" size={16} />
            </a>
            <span className="text-[11px] font-medium ml-2" style={{ color: '#9A8E7A' }}>
              © {year} CMPL Expo-Connect LLP
            </span>
          </div>
        </div>

    
      </div>
    </footer>
  );
}