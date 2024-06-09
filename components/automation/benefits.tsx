import React from 'react'
import SectionBadge from '../ui/section-badge'
import { BugOff, Coins, TrendingUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="benefits">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionBadge>
                  Vorteile für Sie
                </SectionBadge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Profitiere von Automatisierung
                </h2>
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Durch flexible Automatisierungslösungen steigerst du die Effizienz deines Unternehmens, sparst Kosten und
                  vermeidst Fehler.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
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
          </div>
        </section>
  )
}
