import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CMPLExpo 2026 — Asia\'s Contract Manufacturing & Private Label Expo',
  description: 'Join Asia\'s largest Contract Manufacturing & Private Label Expo. 500+ exhibitors, 30,000+ visitors, pre-scheduled meetings. May 4–6, 2026 at Jio World Convention Centre, Mumbai.',
  icons: {
    icon: [
      { url: '/assets/logo/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
</body>
    </html>
  );
}