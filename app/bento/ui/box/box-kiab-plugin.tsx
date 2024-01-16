'use client';
import Image from 'next/image'
import React from 'react'
import kiabDemo from '@/public/portfolio/kiab-demo.webp';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BigCard11 from '../big-card1-1';

export default function BoxKiabPlugin() {
    return (
        <BigCard11 linkButton='https://knowledge-in-a-box.de/'>
            <div className='relative h-full w-full'>
                <CardHeader>
                    <CardTitle>Knowledge in a Box</CardTitle>
                    <CardDescription>Shows internal information where it is needed without searching for it!</CardDescription>
                </CardHeader>
                <Image
                    src={kiabDemo}
                    alt="Screenshot of flatrate application"
                    width={900}
                    height={900}
                    className='absolute top-28 left-0 right-0'
                />
            </div>
        </BigCard11>
    )
}
