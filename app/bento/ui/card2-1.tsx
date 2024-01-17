'use client';
import React from 'react'
import { Card } from '@/components/ui/card';
import BoxContent from './box-content';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function Card21({ children, linkButton, tooltip }: Props) {
    return (
        <Card className={`aspect-2/1 row-span-1 col-span-2 relative
            w-full flex overflow-hidden group
            ${linkButton && 'hover:scale-95 transition-all duration-300'}
            min-w-[300px]
            sm:w-[500px] sm:h-[242px]
            md:w-[460px] md:h-[222px]
            lg:w-[594px] lg:h-[289px]
            xl:w-[542px] xl:h-[263px]
        `}>
            <BoxContent linkButton={linkButton} tooltip={tooltip}>
                {children}
            </BoxContent>
        </Card>
    )
}
