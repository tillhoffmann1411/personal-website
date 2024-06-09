import React from 'react'
import SectionBadge from '../ui/section-badge'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Target() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="target">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionBadge>
                    Potential
                </SectionBadge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Einer der folgenden Punkte trifft auf dich zu, dann können wir was automatisieren.
                </h2>
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Viele wissen gar nicht, dass man einiges in Ihrem Arbeitsalltag automatisieren kann.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Wachsendes Team</h3>
                      <p className="text-muted-foreground ">
                        Ihr Team ist am wachsen, aber die Prozesse wachsen nicht mit. Was vorher 10 Minuten gekostet hat, kann jetzt Stunden kosten.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Nutzung von mehreren Programmen</h3>
                      <p className="text-muted-foreground ">
                        Bei der nutzung verschiedenster Tools, entsteht oft viel copy & paste. Besser wäre es, wenn diese Tools miteinander kommunizieren können.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Schematische Arbeitsprozesse</h3>
                      <p className="text-muted-foreground ">
                        Arbeitsprozesse, die aus vielen gleichen Schritten bestehen, sind einfacher zu automatisieren und sparen viel Zeit.
                      </p>
                    </div>
                  </li>
                </ul>
                <div>
                    <Button asChild>
                        <Link href="#contact">Jetzt Beraten Lassen</Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
