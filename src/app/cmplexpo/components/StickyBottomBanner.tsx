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
        CMPL Expo Timings: 10:00 AM - 6:00 PM on all showdays
      </p>
    </div>
  );
}
