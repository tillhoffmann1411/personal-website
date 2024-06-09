import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Highlight } from '../ui/hero-highlight'

export default function Offer() {
  return (
    <section className="w-full py-44">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Angebot
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ich entwickle{' '}
                    <Highlight>dein</Highlight>
                    {' '}Produkt
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Ich werde eng mit dir und deinem Team zusammenarbeiten, damit wir deine Vision in die Realität umsetzen.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#contact"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
