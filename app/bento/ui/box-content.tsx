'use client';
import React from 'react'
import { IoMdArrowUp } from 'react-icons/io';
import { Button } from '../../../components/ui/button';
import { CardFooter } from '../../../components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function BoxContent({ children, linkButton, tooltip }: Props) {
    const linkWrapper = (children: React.ReactNode) => {
        if (linkButton) {
            return (
                <Link href={linkButton} target={linkButton.startsWith('http') ? '_blank' : '_self'} className='h-full w-full'>
                    {children}
                </Link>
            )
        } else {
            return children
        }
    }
    return linkWrapper(
        <>
            {children}
            {linkButton && (
                <CardFooter className='absolute bottom-0 p-2 flex space-x-1 sm:p-4'>
                    <Button size="icon" className='h-6 w-6 rounded-full sm:h-8 sm:w-8'>
                        <IoMdArrowUp className='rotate-45 sm:h-5 md:w-5' />
                    </Button>
                    {tooltip && (
                        <Badge className='bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 sm:hidden sm:group-hover:inline'>{tooltip}</Badge>
                    )}
                </CardFooter>
            )}
        </>
    )
}
