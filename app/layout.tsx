'use client';
import { Cormorant_Garamond, Proza_Libre } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PlausibleProvider from 'next-plausible'


const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: '400' })
const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <Head>
        <title>👨🏽‍💻 Till Hoffmann</title>
        <meta name="description" content="Till Hoffmann web development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
