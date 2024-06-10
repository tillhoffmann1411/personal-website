import { ConstructionIcon, TypeIcon, CodeIcon, PlayIcon, Hand, PartyPopper, Car, Goal } from 'lucide-react'
import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'
import { Body, Headline2, Muted } from '../ui/typography'
import SectionBadge from '../ui/section-badge'

export default function Offer() {
    return (
        <section id="offer">
            <div className="space-y-2 pb-4">
                <SectionBadge>
                    Angebot
                </SectionBadge>
                <Headline2>
                    Präsentierbar in 4 Wochen
                </Headline2>
                <Muted>
                    Ich entwickle deine Webanwendung in 4-12 Wochen. Von der Konzeption bis zur Bereitstellung.
                </Muted>
            </div>

            <StickyScroll
                content={[
                    {
                        title: 'Kick Off',
                        description: 'Gemeinsame Definition der Anforderungen und Ziele. Danach beginne ich direkt mit der Entwicklung des Frontends.',
                        content: <Goal className="h-32 w-32" />
                    },
                    {
                        title: '1. Woche',
                        description: 'Schon nach der ersten Woche gibt es einen Prototypen des Frontends, der getestet wird. Auf Basis des Feedbacks wird der Prototyp weiterentwickelt.',
                        content: <ConstructionIcon className="h-32 w-32" />
                    },
                    {
                        title: '2. Woche',
                        description: 'Es wird weitere Logik und vor allem das vorher gesammeltet Feedback in den Prototypen integriert. Damit steht am Ende der Woche ein funktionierender rappid Prototype.',
                        content: <Car className="h-32 w-32" />
                    },
                    {
                        title: '3. Woche',
                        description: 'In dieser Phase wird mehr Logik im Hintergrund implementiert, um den Protypen nützlicher zu machen.',
                        content: <CodeIcon className="h-32 w-32" />
                    },
                    {
                        title: '4. Woche',
                        description: 'Am Ende von Woche 4 steht die MVP-Webanwendung bereit zur übergabe oder weiteren Entwicklung. Damit bist du gerüstet deine initiale Idee als schicke und moderne Anwendung zu präsentieren.',
                        content: <PartyPopper className="h-32 w-32" />
                    },
                    { title: '', description: '' }
                ]} />
        </section>
    )
}
