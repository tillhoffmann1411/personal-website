'use client';
import React from 'react'
import SmallCard11 from '../small-card1-1'
import { AiFillLinkedin } from 'react-icons/ai'

export default function BoxLinkedin() {
    return (
        <SmallCard11 linkButton='https://www.linkedin.com/in/tillhoffmann/'>
            <div className='flex h-full w-full bg-[#0966C2] text-white items-center justify-center'>
                <AiFillLinkedin className='h-24 w-24' />
            </div>
        </SmallCard11>
    )
}
