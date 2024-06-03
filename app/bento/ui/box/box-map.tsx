'use client';
import React from 'react'
import CologneMap from '@/components/map/cologne-map'
import SmallCard11 from '../small-card1-1'
import Card21 from '../card2-1';
import { useWindowWidth } from '@/lib/hooks';

export default function BoxMap() {
    const width = useWindowWidth();
    const wrapper = (children: React.ReactNode) => {
        if (width < 640) {
            return <Card21>{children}</Card21>
        } else {
            return <SmallCard11>{children}</SmallCard11>
        }
    };
    return wrapper(
        <div className='absolute top-0 left-0 right-0 bottom-0 h-full'>
            <CologneMap zoom={12} width={width < 640 ? '1600' : '800'} />
        </div>
    )
}
