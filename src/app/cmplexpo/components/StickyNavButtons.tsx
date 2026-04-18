'use client';

import React from 'react';

const buttons = [
  {
    label: 'About CMPL',
    href: '#about',
    bg: '#E07020',
    hoverBg: '#C85E10',
  },
  {
    label: 'Workshops',
    href: '#inside',
    bg: '#2E86C1',
    hoverBg: '#1A6FA8',
  },
  {
    label: 'Agenda',
    href: '#agenda',
    bg: '#3A9A3A',
    hoverBg: '#2E7D2E',
  },
];

export default function StickyNavButtons() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 hidden md:flex">
      {buttons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          onClick={(e) => handleClick(e, btn.href)}
          className="group flex items-center justify-center cursor-pointer select-none"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            backgroundColor: btn.bg,
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '14px 10px',
            borderRadius: '6px 0 0 6px',
            boxShadow: '-2px 2px 8px rgba(0,0,0,0.25)',
            transition: 'background-color 0.2s ease, padding-right 0.2s ease',
            textDecoration: 'none',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = btn.hoverBg;
            (e.currentTarget as HTMLElement).style.paddingRight = '14px';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = btn.bg;
            (e.currentTarget as HTMLElement).style.paddingRight = '10px';
          }}
        >
          {btn.label}
        </a>
      ))}
    </div>
  );
}
