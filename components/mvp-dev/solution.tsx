import React from 'react'
import { CheckCircle, CloudLightning } from 'lucide-react'
import SectionBadge from '../ui/section-badge'
import { Highlight } from '../ui/hero-highlight'

export default function Solution() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionBadge>
              Lösung
            </SectionBadge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <CheckCircle className="w-10 h-10 mr-4 inline-block" />
              Wie es{' '}
              <Highlight>
                mit mir
              </Highlight>
              {' '}funktioniert
            </h2>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

            </p>
          </div>
          <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 bg-success p-4 rounded-lg">
              <h3 className="text-lg font-bold text-success-foreground">Transparente Kosten</h3>
              <p className="text-sm text-card-foreground">
                Klare Kostenstruktur, mit konkretem Angebot vor Begin.
              </p>
            </div>
            <div className="grid gap-1 bg-success p-4 rounded-lg">
              <h3 className="text-lg font-bold text-success-foreground">
                Klarer Zeitplan
              </h3>
              <p className="text-sm text-card-foreground">
                Die Entwicklung wird in einem festen Zeitraum abgeschlossen.
              </p>
            </div>
            <div className="grid gap-1 bg-success p-4 rounded-lg">
              <h3 className="text-lg font-bold text-success-foreground">100% Fokus</h3>
              <p className="text-sm text-card-foreground">
                Mein Fokus liegt auf deinem Projekt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
