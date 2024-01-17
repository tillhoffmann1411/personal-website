import React from 'react'
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import SmallCard11 from '../small-card1-1'
import { Badge } from '@/components/ui/badge'

export default function BoxChatgpt() {
    return (
        <SmallCard11>
            <div className='bg-gray-200 dark:bg-gray-900'>
                <CardHeader>
                    <CardTitle>
                        ChatGPT
                    </CardTitle>
                    <CardDescription>
                        AI, ChatGPT, Knowledge Graphs
                    </CardDescription>
                </CardHeader>
                <CardFooter className='absolute bottom-0 p-2 sm:p-4'>
                    <Badge variant="secondary">In Progress</Badge>
                </CardFooter>
            </div>
        </SmallCard11>
    )
}
