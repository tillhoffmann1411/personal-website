import React from 'react'
import { CheckCircle, Construction, Timer } from 'lucide-react'
import SectionBadge from '../ui/section-badge'
import { Highlight } from '../ui/hero-highlight'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BiMoney } from 'react-icons/bi'
import { Headline2 } from '../ui/typography'

const SOLUTIONS = [
  {
    icon: <BiMoney />,
    title: 'Transparente Kosten',
    description: 'Klare Kostenstruktur, mit konkretem Angebot.',
  },
  {
    icon: <Timer />,
    title: 'Klarer Zeitplan',
    description: 'Die Entwicklung wird in einem festen Zeitraum abgeschlossen.',
  },
  {
    icon: <Construction />,
    title: '100% Fokus',
    description: 'Mein Fokus liegt auf deinem Projekt und es gibt regelmäßige Updates.',
  },
]

export default function Solution() {
  return (
    <section>
      <div className="space-y-2">
        <SectionBadge>
          Lösung
        </SectionBadge>
        <Headline2 className="flex items-center space-x-2 flex-row">
          <CheckCircle className="w-12 h-12 inline-block" />
          <span>
            Wie es{' '}
            <Highlight>
              mit mir
            </Highlight>
            {' '}funktioniert
          </span>
        </Headline2>
      </div>
      <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
        {SOLUTIONS.map((problem, index) => (
          <Card key={index} className='bg-success dark:bg-success h-full'>
            <CardHeader>
              <CardTitle className='flex text-success-foreground'>
                <span className="mr-2">
                  {problem.icon}
                </span>
                {problem.title}
              </CardTitle>
              <CardDescription>{problem.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
