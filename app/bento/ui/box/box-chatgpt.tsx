'use client'
import React from 'react';
import Image from 'next/image';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SmallCard11 from '../small-card1-1'
import { Badge } from '@/components/ui/badge'
import { useWindowWidth } from '@/app/lib/hooks';
import BigCard11 from '../big-card1-1';
import Typewriter from '@/components/typewriter';
import mockup from '@/public/portfolio/wissensmanagement-presentation.webp';

export default function BoxChatgpt() {
    const texts = [
        'Talking on converences',
        'Talking on meetups',
        'Consulting clients',
    ];
    const width = useWindowWidth();
    const wrapper = (children: React.ReactNode) => {
        if (width < 640) {
            return <BigCard11>{children}</BigCard11>
        } else {
            return <SmallCard11>{children}</SmallCard11>
        }
    };
    return wrapper(
        <div className='h-full w-full'>
            <CardHeader>
                <CardTitle>
                    ChatGPT
                </CardTitle>
                <Badge variant="outline" className='w-28'>Coming soon...</Badge>
            </CardHeader>
            <CardContent>
                <div className="group-hover:hidden duration-300 ease-in-out">
                    <Typewriter words={texts} />
                </div>
            </CardContent>
            <Image
                src={mockup}
                alt="Screenshot of flatrate application"
                width={3803}
                height={2296}
                className='absolute -bottom-16 scale-75 duration-300 ease-in-out group-hover:scale-110 group-hover:-bottom-1'
            />
        </div>
    )
}
