import React from 'react'
import Hero from '@/components/automation/hero'
import Services from '@/components/automation/services'
import Benefits from '@/components/automation/benefits'
import Target from '@/components/automation/target'
import Contact from '@/components/contact/contact'
import { Metadata } from 'next/types'
import FAQ from '@/components/faq'
import { faqData } from '@/lib/data/faq-automation'

export const metadata: Metadata = {
  title: 'Till Hoffmann | Automatisierung',
  description: 'Till Hoffmann experte für digitale Produkte und Automatisierung.',
};

export default function Page() {
  return (
    <div className='-mt-16 max-w-full overflow-hidden'>
      <Hero />
      <div className="mx-auto py-28 px-5 space-y-40 md:space-y-64 sm:px-10 md:px-32 xl:px-64">
        <Services />
        <Benefits />
        <Target />
        {/* <Testimonials /> */}
        <FAQ faqData={faqData} />
        <Contact />
      </div>

    </div>
  )
}
