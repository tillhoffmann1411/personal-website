import React from 'react'
import Image from 'next/image';
import exist from '@/public/logos/exist.webp';
import fh from '@/public/logos/fh.webp';
import wwu from '@/public/logos/wwu.webp';
import gruenderPreis from '@/public/logos/gruender-preis.webp';
import unist from '@/public/logos/unist.webp';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import { Body, Headline2 } from '../ui/typography';

const logos = [
  {
    title: 'Knowledge in a Box wurde für Digitale Innvovation ausgezeichnet.',
    icon: gruenderPreis,
  },
  {
    title: 'Knowledge in a Box wurde durch die EXIST Gründerförderung gefördert.',
    icon: exist,
  },
  {
    title: 'Auslandssemester in Süd-Korea mit Schwerpunkten in KI',
    icon: unist,
  },
  {
    title: 'Wirtschaftsinformatik Master mit Schwerpunkten in Machine Learning',
    icon: wwu,
  },
  {
    title: 'Wirtschaftsinformatik Bachelor mit Schwerpunkten in Webentwicklung',
    icon: fh,
  },
];

export default function Edu() {
  return (
    <section id="education">
      <div className="py-6">
        <Headline2>
          Ausbildung und Auszeichnungen
        </Headline2>
      </div>
      <div className="max-w-vw overflow-hidden">
        <Carousel
          opts={{
            align: "start",

          }}
          className="w-full"
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem key={logo.title} className='basis-6/7 sm:basis-2/5 md:basis-3/5 lg:basis-2/5'>
                <Card key={logo.title} className="p-2 overflow-hidden w-44 h-full grid grid-cols-1 gap-4 md:grid-cols-2 md:w-auto">
                  <div className='content-center aspect-square col-span-1 md:w-44'>
                    <Image
                      src={logo.icon}
                      alt={logo.title}
                      width={100}
                      className="m-auto"
                    />
                  </div>
                  <div className='content-center col-span-1'>
                    <Body>{logo.title}</Body>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </section>
  )
}
