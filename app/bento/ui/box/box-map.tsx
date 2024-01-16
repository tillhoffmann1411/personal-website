'use client';
import React from 'react'
import CologneMap from '../../../../components/cologne-map'
import SmallCard11 from '../small-card1-1'

export default function BoxMap() {
    return (
        <SmallCard11>
            <div className='absolute top-0 left-0 right-0 bottom-0 h-full'>
                <CologneMap zoom={12} />
            </div>
        </SmallCard11>
    )
}
