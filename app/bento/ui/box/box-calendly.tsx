'use client';
import React from 'react'
import SmallCard11 from '../small-card1-1'
import { IoMdCalendar } from 'react-icons/io'
import { Badge } from '@/components/ui/badge';

export default function BoxCalendly() {
    return (
        <SmallCard11
            linkButton="https://calendly.com/tillhoffmann"
            tooltip='Meeting'
        >
            <div className='flex flex-col h-full w-full items-center justify-center'>
                <IoMdCalendar className='h-24 w-24' />
            </div>
        </SmallCard11>
    )
}
