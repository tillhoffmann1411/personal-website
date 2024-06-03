import React from 'react'
import Hero from '@/components/prototyp-dev/hero'
import ProblemStatement from '@/components/prototyp-dev/problem-statement'
import Solution from '@/components/prototyp-dev/solution'
import Offer from '@/components/prototyp-dev/offer'
import Contact from '@/components/contact/contact'

export default function Page() {
  return (
    <div>
      <Hero />
      <div className='bg-background'>
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
