import React from 'react'
import Hero from '@/components/automation/hero'
import Services from '@/components/automation/services'
import Benefits from '@/components/automation/benefits'
import Target from '@/components/automation/target'
import Contact from '@/components/contact/contact'

export default function Page() {
  return (
    <div className='-mt-16'>
      <Hero />
      <div className="mx-auto py-10 px-5 space-y-40 md:space-y-64 sm:px-10 md:px-32 xl:px-64">
        <Services />
        <Benefits />
        <Target />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </div>

    </div>
  )
}
