'use client';
import Image from 'next/image'
import React from 'react'
import Card12 from '../card1-2';
import flatrate from '@/public/portfolio/flatrate-iphone.webp';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BoxFlatrate() {
    return (
        <Card12 linkButton='https://flatrate.web.app/'>
            <div className='relative h-full w-full'>
                <CardHeader>
                    <CardTitle>Flatrate</CardTitle>
                    <CardDescription>Flatrate is an application that allows flatmates to decide on future flatmates.</CardDescription>
                </CardHeader>
                <Image
                    src={flatrate}
                    alt="Screenshot of flatrate application"
                    width={450}
                    height={916}
                    className='absolute top-44 left-8 sm:top-36'
                />
            </div>
        </Card12>
    )
}
