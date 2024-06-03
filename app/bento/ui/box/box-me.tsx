import React from 'react';
import Image from 'next/image'
import Card21 from '../card2-1'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatusBadge from '@/components/landing-page/hero/status-badge';

export default function BoxMe() {
    return (
        <Card21>
            <CardHeader className='pb-2 sm:pb-6 sm:w-1/2 md:pb-2 lg:pb-6'>
                <CardTitle>
                    Till Hoffmann - Founder & Freelancer
                </CardTitle>
                <CardDescription className='overflow-hidden'>
                    I am a developer with a focus on frontend development and passion for data driven applications.
                </CardDescription>
            </CardHeader>

            <div className='absolute top-0 right-0 rounded-lg overflow-hidden hidden sm:block
                    sm:w-[242px] sm:h-[242px]
                    md:w-[222px] md:h-[222px]
                    lg:w-[289px] lg:h-[289px]
                    xl:w-[263px] xl:h-[263px]
            '>
                <Image
                    src="/images/profile-picture-2.webp"
                    alt="Picture of the author"
                    className=''
                    width={1000}
                    height={1000}
                />
                <div className='absolute bottom-2 left-2 text-sm'>
                    <StatusBadge fontSize='text-sm md:text-xl' />
                </div>
            </div>

        </Card21>
    )
}
