import type { Metadata } from 'next'
import { Cormorant_Garamond, Proza_Libre } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './ui/globals.css'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: '400' })
const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Till Hoffmann - Software Engineer',
  description: 'Founder, Software Engineer, and Freelancer',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://till-hoffmann.me',
    siteName: 'Till Hoffmann',
    images: [
      {
        url: 'https://till-hoffmann.me/opengraph-image.png',
        width: 3804,
        height: 1916,
        alt: 'Website Hero',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prozaLibre.className}>{children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
