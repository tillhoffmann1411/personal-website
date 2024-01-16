'use client';
import React from 'react'
import { Card } from '@/components/ui/card';
import BoxContent from './box-content';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function SmallCard11({ children, linkButton, tooltip }: Props) {

    return (
        <Card className={`aspect-square row-span-1 col-span-1 relative group
        w-full flex h-full overflow-hidden transition-all duration-300 ease-in-out
        ${linkButton && 'hover:scale-95'}
        min-w-[150px]
        sm:w-[242px] sm:h-[242px]
        md:w-[222px] md:h-[222px]
        lg:w-[289px] lg:h-[289px]
        xl:w-[263px] xl:h-[263px]
        `}>
            <BoxContent linkButton={linkButton} tooltip={tooltip}>
                {children}
            </BoxContent>
        </Card>



    )
}
