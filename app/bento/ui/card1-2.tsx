'use client';
import React from 'react'
import { Card } from '@/components/ui/card';
import BoxContent from './box-content';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function Card12({ children, linkButton, tooltip }: Props) {
    return (
        <Card className={`aspect-1/2 row-span-2 col-span-1 relative
            w-full flex h-full overflow-hidden group
            ${linkButton && 'hover:scale-95 transition-all duration-300'}
            min-w-[150px]
            sm:w-[242px] sm:h-[500px]
            md:w-[222px] md:h-[460px]
            lg:w-[289px] lg:h-[594px]
            xl:w-[263px] xl:h-[542px]
        `}>
            <BoxContent linkButton={linkButton} tooltip={tooltip}>
                {children}
            </BoxContent>
        </Card>
    )
}
