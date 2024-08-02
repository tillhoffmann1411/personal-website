import { Cormorant_Garamond, Proza_Libre } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PlausibleProvider from 'next-plausible'
import { Metadata } from 'next/types';


const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: '400' })
const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Till Hoffmann',
  description: 'Till Hoffmann experte für digitale Produkte und Automatisierung.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className='dark'>
      <body className={prozaLibre.className}>
      <PlausibleProvider domain="till-hoffmann.me">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </PlausibleProvider>
      </body>
    </html>
  )
}
