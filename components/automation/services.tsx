import React from 'react'
import SectionBadge from '../ui/section-badge'
import { Headline2, Muted } from '../ui/typography'

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
      <div className="mx-auto pt-16 grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
        <div className="grid gap-1 p-2 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Ist-Analyse</h3>
          <p className="text-sm text-muted-foreground ">
            Wir analysieren die aktuellen Prozesse und Abläufe, um Optimierungspotenziale zu identifizieren.
          </p>
        </div>
        <div className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Potential-Bewertung</h3>
          <p className="text-sm text-muted-foreground ">
            Gemeinsam erarbeiten wir, wie die Prozesse optimiert werden können.
          </p>
        </div>
        <div className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Implementierung</h3>
          <p className="text-sm text-muted-foreground ">
            Ich setze die Automatisierung Schritt für Schritt um und passen sie an deine Bedürfnisse an.
          </p>
        </div>
        <div className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Übergabe & Schulung</h3>
          <p className="text-sm text-muted-foreground ">
            Wir stellen sicher, dass dein Team die neuen Prozesse versteht und anwenden kann.
          </p>
        </div>
        <div className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Betreuung & Wartung</h3>
          <p className="text-sm text-muted-foreground ">
            Auch nach der Implementierung bin ich da und helfe bei der Optimierung und Betreuung.
          </p>
        </div>
        <div className="grid gap-1 p-4 rounded-lg border-transparent hover:bg-card hover:border-border">
          <h3 className="text-lg font-bold">Fehlervermeidung</h3>
          <p className="text-sm text-muted-foreground ">
            Durch die Automatisierung der Prozesse vermeidest du kostspielige Fehler.
          </p>
        </div>
      </div>
    </section>
  )
}
