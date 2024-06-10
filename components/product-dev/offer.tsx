import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Highlight } from '../ui/hero-highlight'
import { Headline2 } from '../ui/typography'
import SectionBadge from '../ui/section-badge'
import { Button } from '../ui/button'
import flatrateMock from '@/public/portfolio/flatrate-mock.webp';

export default function Offer() {
  return (
    <section>
      <div className="px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src={flatrateMock}
            width="550"
          />
          <div className="space-y-4">
            <SectionBadge>
              Angebot
            </SectionBadge>
            <Headline2>
              Ich entwickle{' '}
              <Highlight>dein</Highlight>
              {' '}Produkt
            </Headline2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ich werde eng mit dir und deinem Team zusammenarbeiten, damit wir deine Vision in die Realität umsetzen.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="outline">
                <Link href="#contact">
                  Kontakt
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
