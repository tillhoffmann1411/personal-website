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
      <Services />
      <Benefits />
      <Target />
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <Contact />

    </div>
  )
}
