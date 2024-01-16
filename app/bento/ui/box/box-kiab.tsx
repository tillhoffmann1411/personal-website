'use client';
import React from 'react';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SmallCard11 from '../small-card1-1';
import { useWindowWidth } from '@/app/lib/hooks';
import Card21 from '../card2-1';

export default function BoxKiab() {
    const width = useWindowWidth();
    const wrapper = (children: React.ReactNode) => {
        if (width < 1024) {
            return <Card21 linkButton='https://knowledge-in-a-box.de'>{children}</Card21>
        } else {
            return <SmallCard11>{children}</SmallCard11>
        }
    };
    return wrapper(
        <div className='flex flex-col bg-[#016A63] text-white h-full'>
            <CardHeader className='pb-2 sm:pb-6 md:pb-2 lg:pb-6'>
                <CardTitle>
                    Knowledge in a Box
                </CardTitle>
            </CardHeader>
            <CardContent className='overflow-hidden'>
                <p>
                    Startup I cofounded and awarded with the German Digital Innovation Award 2023.
                </p>
            </CardContent>
        </div>
    );
}
