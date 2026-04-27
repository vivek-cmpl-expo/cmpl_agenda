'use client';

import React from 'react';

const buttons = [
  {
    label: 'About CMPL',
    href: 'https://cmplexpo.com/',
    bg: '#E07020',
    hoverBg: '#C85E10',
    external: true,
  },
  {
    label: 'Workshops',
    href: 'https://workshops.cmplexpo.com/',
    bg: '#2E86C1',
    hoverBg: '#1A6FA8',
    external: true,
  },
  {
    label: 'Register to Visit',
    href: 'https://cmpl.world/',
    bg: '#3A9A3A',
    hoverBg: '#2E7D2E',
    external: true,
  },
];

export default function StickyNavButtons() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (external) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5 sm:gap-2">
      {buttons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          target={btn.external ? '_blank' : undefined}
          rel={btn.external ? 'noopener noreferrer' : undefined}
          onClick={(e) => handleClick(e, btn.href, btn.external)}
          className="sticky-nav-btn group flex items-center justify-center cursor-pointer select-none"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            backgroundColor: btn.bg,
            color: '#FFFFFF',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderRadius: '6px 0 0 6px',
            boxShadow: '-2px 2px 8px rgba(0,0,0,0.25)',
            transition: 'background-color 0.2s ease, padding-right 0.2s ease',
            textDecoration: 'none',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = btn.hoverBg;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = btn.bg;
          }}
        >
          {btn.label}
        </a>
      ))}
      <style jsx>{`
        .sticky-nav-btn {
          font-size: 10px;
          padding: 10px 6px;
        }
        @media (min-width: 640px) {
          .sticky-nav-btn {
            font-size: 13px;
            padding: 14px 10px;
          }
        }
      `}</style>
    </div>
  );
}
