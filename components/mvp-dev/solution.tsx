import React from 'react'
import { CheckCircle, Construction, Timer } from 'lucide-react'
import SectionBadge from '../ui/section-badge'
import { Highlight } from '../ui/hero-highlight'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BiMoney } from 'react-icons/bi'

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
    <section className="w-full py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionBadge>
              Lösung
            </SectionBadge>
            <h2 className="text-3xl font-bold tracking-tighter pt-4 sm:text-5xl">
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
          <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
          {SOLUTIONS.map((problem, index) => (
              <Card key={index} className='bg-success dark:bg-success'>
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
        </div>
      </div>
    </section>
  )
}
