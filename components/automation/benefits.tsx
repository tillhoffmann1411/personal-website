import React from 'react'
import SectionBadge from '../ui/section-badge'
import { BugOff, Coins, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Headline2, Muted } from '../ui/typography'

const BENEFITS = [
  {
    icon: <TrendingUp />,
    title: 'Gesteigerte Effizienz',
    description: 'Konzentriere dich auf dein Geschäft und automatisiere den Rest.',
  },
  {
    icon: <Coins />,
    title: 'Kosteneinsparungen',
    description: 'Spare durch die Automatisierung eurer Abläufe bares Geld.',
  },
  {
    icon: <BugOff />,
    title: 'Fehlervermeidung',
    description: 'Vermeide kostspielige Fehler durch die Automatisierung eurer Prozesse.',
  },
]

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
      <div className="mx-auto grid max-w-5xl text-start items-start gap-10 py-16 sm:grid-cols-2 md:grid-cols-3">
        {BENEFITS.map((benefit, index) => (
          <Card key={index} className='bg-success h-full'>
            <CardHeader>
              <CardTitle className='flex text-success-foreground'>
                <span className="mr-2">
                  {benefit.icon}
                </span>
                {benefit.title}
              </CardTitle>
              <CardDescription>
                {benefit.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
