import { ConstructionIcon, TypeIcon, CodeIcon, PlayIcon, Hand, PartyPopper, Car } from 'lucide-react'
import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'

export default function Offer() {
    return (
        <section className="w-full py-36" id="offer">
            <div className="">
                <div className="flex flex-col items-center justify-center pb-8 px-4 md:px-6 space-y-4 text-center container">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Angebot
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Präsentierbar in 4 Wochen
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Ich entwickle deine Webanwendung in 4-12 Wochen. Von der Konzeption bis zur Bereitstellung.
                        </p>
                    </div>
                </div>

                <StickyScroll
                    content={[
                    {
                        title: 'Kick Off',
                        description: 'Gemeinsame Definition der Anforderungen und Ziele. Danach beginne ich direkt mit der Entwicklung des Frontends.',
                        content: <PlayIcon className="h-32 w-32" />
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
            </div>
        </section>
    )
}
