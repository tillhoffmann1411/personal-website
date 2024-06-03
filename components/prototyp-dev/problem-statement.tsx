import React from 'react'
import { CloudLightning, Construction, Timer } from 'lucide-react'
import SectionBadge from '../ui/section-badge'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BiMoney } from 'react-icons/bi'

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
    <section className="w-full py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionBadge>
              Problem
            </SectionBadge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <CloudLightning className="w-12 h-12 mr-4 inline-block" />
              Wie interne Prototyp Entwicklung bisher läuft
            </h2>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
            {PROBLEMS.map((problem, index) => (
              <Card key={index} className='bg-destructive/30 dark:bg-destructive'>
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
        </div>
      </div>
    </section>
  )
}
