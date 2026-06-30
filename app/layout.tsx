import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { Metadata } from 'next/types';
import './globals.css';

export const metadata: Metadata = {
  title: 'Till Hoffmann',
  description:
    'Till Hoffmann — Freelance Founder für Softwareentwicklung und KI. Köln.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-retro antialiased">
        <PlausibleProvider domain="till-hoffmann.me">
          {children}
          <SpeedInsights />
          <Analytics />
        </PlausibleProvider>
      </body>
    </html>
  );
}
