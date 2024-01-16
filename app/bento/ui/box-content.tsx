'use client';
import React from 'react'
import { IoMdArrowUp } from 'react-icons/io';
import { Button } from '../../../components/ui/button';
import { CardFooter } from '../../../components/ui/card';
import Link from 'next/link';

type Props = {
    linkButton?: string,
    tooltip?: string,
    children?: React.ReactNode
};

export default function BoxContent({ children, linkButton, tooltip }: Props) {
    const linkWrapper = (children: React.ReactNode) => {
        if (linkButton) {
            return (
                <Link href={linkButton} target="_blank" className='h-full w-full'>
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
                <CardFooter className='absolute bottom-0 p-4'>
                    <Button size="icon">
                        <IoMdArrowUp className='rotate-45 h-5 w-5' />
                    </Button>
                </CardFooter>
            )}
        </>
    )
}
