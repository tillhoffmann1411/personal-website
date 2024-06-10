import React from 'react'
import SectionBadge from '../ui/section-badge'
import { BugOff, Coins, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Headline2, Muted } from '../ui/typography'

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="space-y-2">
        <SectionBadge>
          Vorteile
        </SectionBadge>
        <Headline2>
          Profitiere von Automatisierung
        </Headline2>
        <Muted>
          Durch flexible Automatisierungslösungen steigerst du die Effizienz deines Unternehmens, sparst Kosten und
          vermeidst Fehler.
        </Muted>
      </div>
      <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
        <Card className='bg-success h-full'>
          <CardHeader>
            <CardTitle className='flex text-success-foreground'>
              <span className="mr-2">
                <TrendingUp />
              </span>
              Gesteigerte Effizienz
            </CardTitle>
            <CardDescription>
              Konzentriere dich auf das Wesentliche und automatisiere deine Prozesse.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='bg-success h-full'>
          <CardHeader>
            <CardTitle className='flex text-success-foreground'>
              <span className="mr-2">
                <Coins />
              </span>
              Kosteneinsparungen
            </CardTitle>
            <CardDescription>
              Spare durch die Optimierung eurer Abläufe bares Geld.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='bg-success h-full'>
          <CardHeader>
            <CardTitle className='flex text-success-foreground'>
              <span className="mr-2">
                <BugOff />
              </span>
              Fehlervermeidung
            </CardTitle>
            <CardDescription>
              Vermeide kostspielige Fehler durch die Automatisierung eurer Prozesse.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
