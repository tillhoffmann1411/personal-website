import { Share_Tech_Mono, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { Metadata } from 'next/types';
import { ThemeProvider } from '@/components/theme-provider';
import { siteUrl } from '@/lib/data/site-content';
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

const name = 'Till Hoffmann';
const title = 'Till Hoffmann — Freelance Softwareentwickler & Gründer in Köln';
const description =
  'Till Hoffmann — Freelance Softwareentwickler und Gründer aus Köln. Web-Anwendungen, Realtime-Architekturen und KI-Produkte. Offen für Co-Founder-Anfragen.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${name}`,
  },
  description,
  applicationName: name,
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  keywords: [
    'Freelance Softwareentwickler',
    'Fullstack Entwickler Köln',
    'Next.js',
    'React',
    'Python',
    'KI',
    'Co-Founder',
    'Gründer',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: name,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
