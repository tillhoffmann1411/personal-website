import React from 'react'
import SmallCard11 from '../small-card1-1'
import { AiFillMediumCircle } from 'react-icons/ai'
import { Badge } from '@/components/ui/badge'

export default function BoxBlog() {
    return (
        <SmallCard11 linkButton='https://medium.com/@hoffmann.webdev' tooltip='Blog'>
            <div className='flex flex-col h-full w-full bg-white text-black items-center justify-center dark:bg-black dark:text-white'>
                <AiFillMediumCircle className='h-24 w-24' />
            </div>
        </SmallCard11>
    )
}
