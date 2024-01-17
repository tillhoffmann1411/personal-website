import React from 'react'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SmallCard11 from '../small-card1-1'

export default function BoxFrontend() {
    return (
        <SmallCard11 linkButton='/frontend'>
            <CardHeader>
                <CardTitle>
                    Frontend
                </CardTitle>
                <CardDescription>
                    React, Next.js, TailwindCSS, Typescript
                </CardDescription>
            </CardHeader>
        </SmallCard11>
    )
}
