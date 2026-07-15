import { Share_Tech_Mono, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { Metadata } from 'next/types';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const title = 'Till Hoffmann';
const description =
  'Till Hoffmann — Freelance Founder für Softwareentwicklung und KI. Köln.';
const siteUrl = 'https://till-hoffmann.me';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/profile-headshot.webp',
        width: 1024,
        height: 1024,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/profile-headshot.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className={`${shareTechMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PlausibleProvider domain="till-hoffmann.me">
            {children}
            <SpeedInsights />
            <Analytics />
          </PlausibleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
