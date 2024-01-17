'use client';
import React from 'react';
import { CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import SmallCard11 from '../small-card1-1';
import { useWindowWidth } from '@/app/lib/hooks';
import Card21 from '../card2-1';
import Image from 'next/image';
import kiabIcon from '@/public/portfolio/kiab-icon.png';
import kiabPlugin from '@/public/portfolio/kiab-plugin.png';

export default function BoxKiab() {
    const width = useWindowWidth();
    const wrapper = (children: React.ReactNode) => {
        if (width < 1024) {
            return <Card21 linkButton='https://knowledge-in-a-box.de'>{children}</Card21>
        } else {
            return <SmallCard11 linkButton='https://knowledge-in-a-box.de'>{children}</SmallCard11>
        }
    };
    return wrapper(
        <CardHeader className='flex absolute'>
            <div className='flex items-center'>
                <Image
                    src={kiabIcon}
                    alt="Knowledge in a Box"
                    width={38}
                    height={38}
                    className='mr-2 inline-block leading-10'
                />
                <CardTitle>
                    Knowledge in a Box
                </CardTitle>
            </div>
            <CardDescription>
                Startup I cofounded and awarded with the German Digital Innovation Award 2023.
            </CardDescription>
            <div className='absolute -top-20 bottom-0 -right-full w-32 duration-300 ease-in-out group-hover:-right-0'>
                <Image
                    src={kiabPlugin}
                    alt="Knowledge in a Box Plugin"
                    width={752}
                    height={1928}
                />
            </div>
        </CardHeader>
    );
}
