'use client';
import React from 'react'
import SmallCard11 from '../small-card1-1'
import { AiFillGithub } from 'react-icons/ai'

export default function BoxGithub() {
    return (
        <SmallCard11 linkButton='https://github.com/tillhoffmann1411'>
            <div className='flex h-full w-full bg-black text-white items-center justify-center'>
                <AiFillGithub className='h-24 w-24' />
            </div>
        </SmallCard11>
    )
}
