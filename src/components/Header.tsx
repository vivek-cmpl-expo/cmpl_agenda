'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Experiences', href: '#experiences' },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] flex flex-col justify-center items-center ${menuOpen ? 'open' : 'closed'}`}
        style={{ background: '#FAFAF8' }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6"
          style={{ color: '#1A1612' }}
          aria-label="Close menu"
        >
          <Icon name="XMarkIcon" size={28} />
        </button>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-display font-light transition-colors"
              style={{ color: '#5C5040' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5C5040')}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="btn-gold inline-block px-8 py-4 text-sm font-bold tracking-wide mt-4"
          >
            Register to Visit
          </a>
        </nav>
      </div>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-1 md:py-3 border-b' : 'py-2 md:py-5'
        }`}
        style={{
          background: '#FFFFFF',
          borderColor: 'rgba(184, 134, 11, 0.15)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-3 md:px-12 flex items-center justify-between gap-2">
          {/* Logo */}
          <a href="https://cmplexpo.com/" target="_blank" rel="noopener noreferrer" className="flex items-center group flex-shrink min-w-0">
            <AppLogo src="/assets/logo/Logo-m26.jpg" size={400} className="h-14 sm:h-20 md:h-14 lg:h-[88px] w-auto max-w-full" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors"
                style={{ color: '#5C5040' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B8860B')}
                onMouseLeave={e => (e.currentTarget.style.color = '#5C5040')}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cmpl.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold relative px-6 py-2.5 text-[13px] font-bold tracking-widest uppercase"
            >
              <span className="relative z-10">Register to Visit</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex-shrink-0"
            style={{ color: '#1A1612' }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="Bars3Icon" size={24} />
          </button>
        </div>
      </header>
    </>
  );
}