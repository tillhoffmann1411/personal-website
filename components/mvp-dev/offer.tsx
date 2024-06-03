import { ConstructionIcon, TypeIcon, CodeIcon } from 'lucide-react'
import React from 'react'

export default function Offer() {
    return (
        <section className="w-full py-24 md:py-24 lg:py-32 bg-secondary" id="offer">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Angebot
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Präsentierbar in 4 Wochen
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Ich entwickle Ihre MVP-Webanwendung in 4-12 Wochen. Von der Konzeption bis zur Bereitstellung.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-12 py-12 lg:grid-cols-3">
                    <div className="grid gap-1">
                        <div className="flex items-center gap-3">
                            <TypeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="text-xl font-bold">Architektur</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Entwerfen und einrichten einer passenden Architektur für Ihre Anwendung.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-3">
                            <ConstructionIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="text-xl font-bold">UI/UX Design</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Erstellung visuell ansprechender und intuitiver Benutzeroberflächen.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-3">
                            <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                            <h3 className="text-xl font-bold">Full-stack Development</h3>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Implementierung der Funktionalität und Bereitstellung der Anwendung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
