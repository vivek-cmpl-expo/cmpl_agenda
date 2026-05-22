'use client';

import React from 'react';

export default function StickyBottomBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center px-4 py-6 sm:py-8"
      style={{
        backgroundImage: "url('/assets/images/bg-cm251.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className="text-white text-base sm:text-xl md:text-2xl font-bold tracking-wider uppercase text-center drop-shadow">
        We’re curating an exciting line-up of industry sessions, networking opportunities, and business meetings for CMPL Delhi 2026 — the detailed agenda will be announced soon!
      </p>
    </div>
  );
}
