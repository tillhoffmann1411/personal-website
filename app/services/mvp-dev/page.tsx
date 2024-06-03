import React from 'react'
import Hero from '@/components/mvp-dev/hero'
import ProblemStatement from '@/components/mvp-dev/problem-statement'
import Solution from '@/components/mvp-dev/solution'
import Offer from '@/components/mvp-dev/offer'
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
