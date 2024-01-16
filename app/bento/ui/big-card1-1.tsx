'use client';
import React from 'react'
import { Card } from '@/components/ui/card';
import BoxContent from './box-content';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function BigCard11({ children, linkButton, tooltip }: Props) {
    return (
        <Card className={`aspect-square row-span-2 col-span-2 relative group
            w-full flex h-full overflow-hidden
            ${linkButton && 'hover:scale-95 transition-all duration-300'}
            min-w-[300px]
            sm:w-[500px] sm:h-[500px]
            md:w-[460px] md:h-[460px]
            lg:w-[594px] lg:h-[594px]
            xl:w-[542px] xl:h-[542px]
        `}>
            <BoxContent linkButton={linkButton} tooltip={tooltip}>
                {children}
            </BoxContent>
        </Card>
    )
}
