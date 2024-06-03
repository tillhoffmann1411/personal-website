import React from 'react'
import { CloudLightning } from 'lucide-react'
import SectionBadge from '../ui/section-badge'

export default function ProblemStatement() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionBadge>
              Problem
            </SectionBadge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <CloudLightning className="w-12 h-12 mr-4 inline-block" />
              Wie interne MVP entwicklung bisher läuft
            </h2>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="grid gap-1 bg-destructive p-4 rounded-lg">
              <h3 className="text-lg font-bold text-destructive-foreground">Hohe Kosten</h3>
              <p className="text-sm text-card-foreground">
                Einige Mitarbeiter müssen von ihrer eigentlichen Arbeit abgezogen werden.
              </p>
            </div>
            <div className="grid gap-1 bg-destructive p-4 rounded-lg">
              <h3 className="text-lg font-bold text-destructive-foreground">
                Ungeplante Verzögerungen
              </h3>
              <p className="text-sm text-card-foreground">
                Die Entwicklung kann sich über Monate hinziehen.
              </p>
            </div>
            <div className="grid gap-1 bg-destructive p-4 rounded-lg">
              <h3 className="text-lg font-bold text-destructive-foreground">Knappe Ressourcen</h3>
              <p className="text-sm text-card-foreground">
                Die Entwicklung wird von anderen Projekten verlangsamt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
