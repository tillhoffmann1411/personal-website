import React from 'react'
import { Headline2, Muted } from '../ui/typography'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Timer, FastForward, Code } from 'lucide-react'
import Link from 'next/link'

const OFFER = [
    {
        icon: <FastForward />,
        title: 'Automatisierung',
        description: 'Ich automatisiere deine Prozesse.',
        url: '/services/automation',
    },
    {
        icon: <Timer />,
        title: 'Prototyp in 4 Wochen',
        description: 'Ich erwecke deine Idee zum leben in 4 Wochen.',
        url: '/services/prototyp-dev',
    },
    {
        icon: <Code />,
        title: 'Produkt Entwicklung',
        description: 'Ich entwickle deine Webanwendung in 4-12 Wochen.',
        url: '/services/prod-dev',
    },
]

export default function offer() {
    return (
        <section id="offer">
            <div className="py-6 space-y-2">
                <Headline2>Mein Angebot</Headline2>
                <Muted>Mit meiner langjährigen Erfahrung in der Automatisierung und Produktentwicklung kann ich dir Helfen deine Ideen zum Erfolg zu führen.</Muted>
            </div>
            <div className="mx-auto grid max-w-5xl text-start items-start gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
                {OFFER.map((offer) => (
                    <Link href={offer.url} key={offer.title} className='h-full'>
                        <Card className='h-full bg-secondary hover:bg-secondary/20'>
                            <CardHeader>
                                <CardTitle className='flex'>
                                    <span className="mr-2">
                                        {offer.icon}
                                    </span>
                                    {offer.title}
                                </CardTitle>
                                <CardDescription>{offer.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}
