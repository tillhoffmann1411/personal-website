import Image from 'next/image'
import React from 'react'
import SmallCard11 from '../small-card1-1'
import StatusBadge from '@/components/landing-page/hero/status-badge'

export default function BoxAvatar() {
    return (
        <SmallCard11>
            <div className='flex flex-col h-full w-full bg-white text-black items-center justify-center dark:bg-black dark:text-white'>
                <Image
                    src="/images/profile-picture-2.webp"
                    alt="Picture of the author"
                    className='absolute top-0 left-0'
                    width={1000}
                    height={1000}
                />
                <div className='absolute bottom-2 left-2 text-sm'>
                    <StatusBadge fontSize='text-sm md:text-xl' />
                </div>
            </div>
        </SmallCard11>
    )
}
