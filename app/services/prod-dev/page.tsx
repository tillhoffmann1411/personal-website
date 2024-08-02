import React from 'react'
import Hero from '@/components/product-dev/hero'
import Services from '@/components/product-dev/services'
import Offer from '@/components/product-dev/offer'
import Contact from '@/components/contact/contact'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Till Hoffmann | Produktentwicklung',
  description: 'Till Hoffmann experte für digitale Produkte und Automatisierung.',
};

export default function Page() {
  return (
    <div>
      <Hero />
      <div className="mx-auto py-10 px-5 space-y-40 md:space-y-64 sm:px-10 md:px-32 xl:px-64">
        <Services />
        <Offer />
        <Contact />
      </div>
      {
        /* Portfolio */
        /* <Testimonials /> */
        /* <FAQ /> */
      }
    </div>
  )
}
