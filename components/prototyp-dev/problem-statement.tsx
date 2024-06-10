import React from 'react'
import { CloudLightning, Construction, Timer } from 'lucide-react'
import SectionBadge from '../ui/section-badge'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BiMoney } from 'react-icons/bi'
import { Headline2 } from '../ui/typography'

const PROBLEMS = [
  {
    icon: <BiMoney />,
    title: 'Hohe Kosten',
    description: 'Einige Mitarbeiter müssen von ihrer eigentlichen Arbeit abgezogen werden.',
  },
  {
    icon: <Timer />,
    title: 'Verzögerungen',
    description: 'Die Entwicklung kann sich über Monate hinziehen.',
  },
  {
    icon: <Construction />,
    title: 'Knappe Ressourcen',
    description: 'Die Entwicklung wird von anderen Projekten verlangsamt.',
  },
]

export default function ProblemStatement() {
  return (
    <section>
        <div className="space-y-2">
          <SectionBadge>
            Problem
          </SectionBadge>
          <Headline2 className="flex items-center space-x-2 flex-row">
            <CloudLightning className="w-14 h-14 inline-block" />
            <span>Wie interne Prototyp Entwicklung bisher läuft</span>
          </Headline2>
        </div>
        <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
          {PROBLEMS.map((problem, index) => (
            <Card key={index} className='bg-destructive/30 dark:bg-destructive h-full'>
              <CardHeader>
                <CardTitle className='flex'>
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
