import React from 'react'
import Hero from '@/components/prototyp-dev/hero'
import ProblemStatement from '@/components/prototyp-dev/problem-statement'
import Solution from '@/components/prototyp-dev/solution'
import Offer from '@/components/prototyp-dev/offer'
import Contact from '@/components/contact/contact'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Till Hoffmann | Prototyp in 4 Wochen',
  description: 'Till Hoffmann experte für digitale Produkte und Automatisierung.',
};

export default function Page() {
  return (
    <div>
      <Hero />
      <div className="bg-background mx-auto py-10 px-5 space-y-40 md:space-y-64 sm:px-10 md:px-32 xl:px-64">
        <ProblemStatement />
        <Solution />
        <Offer />
        <Contact />
          {
        /* Portfolio */
        /* <Testimonials /> */
        /* <FAQ /> */
        }
      </div>
    </div>
  )
}
