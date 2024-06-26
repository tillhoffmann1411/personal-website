import { CheckIcon } from 'lucide-react'
import React from 'react'
import SectionBadge from '../ui/section-badge'
import { Headline2, Muted } from '../ui/typography'

export default function Services() {
  return (
    <section>
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <SectionBadge>
            Leistungen
          </SectionBadge>
          <Headline2>
            Meine Skills für deinen Erfolg
          </Headline2>
          <div className="max-w-[600px]">
            <Muted>
              Von der Planung bis zur Einführung stehe ich bei jedem Schritt zur Seite. Maßgeschneiderte Lösungen für deinen Erfolg.
            </Muted>
          </div>
        </div>
        <div className="space-y-4">
          <ul className="grid gap-4">
            <li className="flex items-start gap-2">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Individuelle Entwicklung</h3>
                <p className="text-muted-foreground">Von der Idee bis zur fertigen Produkt.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Modernste Technologien</h3>
                <p className="text-muted-foreground">
                  TypeScript, Next.js, React, MongoDB, PostgreSQL, Firebase & mehr.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Lean & agile</h3>
                <p className="text-muted-foreground">Schnelle und effiziente Entwicklungszyklen.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Asynchrone Zusammenarbeit</h3>
                <p className="text-muted-foreground">
                  Flexible Zusammenarbeit, mit dokumentierten Ergebnissen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Prototyp in 4 Wochen</h3>
                <p className="text-muted-foreground">Erster Prototyp in nur 4 Wochen.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
