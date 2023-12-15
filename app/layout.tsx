import type { Metadata } from 'next'
import { Cormorant_Garamond, Proza_Libre } from 'next/font/google'
import './ui/globals.css'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: '400' })
const prozaLibre = Proza_Libre({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Till Hoffmann - Software Engineer',
  description: 'Founder, Software Engineer, and Freelancer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prozaLibre.className}>{children}</body>
    </html>
  )
}
