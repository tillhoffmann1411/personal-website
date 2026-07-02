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
