import React from 'react'
import SectionBadge from '../ui/section-badge'
import { Headline2, Muted } from '../ui/typography'

const SERVICES = [
  {
    title: '1. Ist-Analyse',
    description: 'Ich analysiere die aktuellen Prozesse und Abläufe, um Optimierungspotenziale zu identifizieren.',
  }, {
    title: '2. Potential-Bewertung',
    description: 'Gemeinsam erarbeiten wir, wie die Prozesse optimiert werden können.',
  }, {
    title: '3. Implementierung',
    description: 'Ich setze die Automatisierung Schritt für Schritt um und passen sie an deine Bedürfnisse an.',
  }, {
    title: '4. Übergabe & Schulung',
    description: 'Wir stellen sicher, dass dein Team die neuen Prozesse versteht und anwenden kann.',
  }, {
    title: '5. Betreuung & Wartung',
    description: 'Auch nach der Implementierung bin ich da und helfe bei der Optimierung und Betreuung.',
  }, {
    title: '6. Fehlervermeidung',
    description: 'Durch die Automatisierung der Prozesse vermeidest du kostspielige Fehler.',
  },
]

export default function Services() {
  return (
    <section>
      <div className="space-y-2">
        <SectionBadge>
          Leistungen
        </SectionBadge>
        <Headline2>
          Ich leite dich und dein Team zur Automatisierung.
        </Headline2>
        <Muted>
          Von der Ist-Analyse über die Potential-Bewertung bis hin zur Implementierung, Übergabe & Schulung
          sowie Betreuung & Wartung - ich führe den gesamten Prozess.
        </Muted>
      </div>
      <div className="mx-auto pt-16 grid items-start gap-12 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.title} className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-sm text-muted-foreground ">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
