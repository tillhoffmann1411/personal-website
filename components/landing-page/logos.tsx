import React from 'react'
import Image from 'next/image';
import exist from '@/public/logos/exist.webp';
import fh from '@/public/logos/fh.webp';
import wwu from '@/public/logos/wwu.webp';
import gruenderPreis from '@/public/logos/gruender-preis.webp';
import unist from '@/public/logos/unist.webp';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

const logos = [
  {
    title: 'fh',
    icon: fh,
  },
  {
    title: 'wwu',
    icon: wwu,
  },
  {
    title: 'unist',
    icon: unist,
  },
  {
    title: 'Exist',
    icon: exist,
  },
  {
    title: 'gruender-preis',
    icon: gruenderPreis,
  },
];

export default function Logos() {
  return (
    <section className="w-full py-4">
      <div className="py-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Ausbildung und Auszeichnungen
          </h2>
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
              <CarouselItem key={logo.title} className='basis-2/5 sm:basis-1/5 md:basis-2/5 lg:basis-1/5'>
                <Card key={logo.title} className="content-center p-2 aspect-square md:w-44 md:h-44">
                  <Image
                    src={logo.icon}
                    alt={logo.title}
                    height={100}
                    className="mx-auto"
                  />
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
