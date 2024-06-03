'use client';
import React from 'react';
import Image from 'next/image';
import flatrate from '@/public/portfolio/flatrate-iphone.webp';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SmallCard11 from '../small-card1-1'
import { useWindowWidth } from '@/lib/hooks';
import BigCard11 from '../big-card1-1';

export default function BoxFrontend() {
    const width = useWindowWidth();
    const wrapper = (children: React.ReactNode) => {
        if (width < 640) {
            return <BigCard11 linkButton='/frontend'>{children}</BigCard11>
        } else {
            return <SmallCard11 linkButton='/frontend'>{children}</SmallCard11>
        }
    };
    return wrapper(
        <CardHeader>
            <CardTitle>
                Frontend
            </CardTitle>
            <CardDescription>
                React, Next.js, TailwindCSS, Typescript
            </CardDescription>
            <Image
                src={flatrate}
                alt="Screenshot of flatrate application"
                width={150}
                height={300}
                className='absolute top-24 right-6 sm:top-18 group-hover:-rotate-12 group-hover:scale-95 duration-300 ease-in-out'
            />
        </CardHeader>
    )
}
