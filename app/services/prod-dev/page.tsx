import React from 'react'
import Hero from '@/components/product-dev/hero'
import Services from '@/components/product-dev/services'
import Offer from '@/components/product-dev/offer'
import Contact from '@/components/contact/contact'

export default function Page() {
  return (
    <div>
      <Hero />
      <Services />
      <Offer />
      <Contact />
      {
        /* Portfolio */
        /* <Testimonials /> */
        /* <FAQ /> */
      }
    </div>
  )
}
