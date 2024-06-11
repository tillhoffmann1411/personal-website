import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import kiab from '@/public/portfolio/kiab-mock.webp';
import growContent from '@/public/portfolio/grow-content-mock.webp';
import { Button } from '../ui/button';
import { Headline2, Headline3, Muted } from '../ui/typography';


export default function Products() {
    return (
        <section id="products">
            <div className="py-6">
                <Headline2>Meine Produkte</Headline2>
            </div>
            <div className="container flex-col space-y-32 px-4 md:px-6">
                <div className="items-center gap-6 flex-col md:flex md:flex-row">
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="310"
                        src={kiab}
                        width="550"
                    />
                    <div className="space-y-4 md:w-2/3">
                        <Headline3>
                            Knowledge in a Box
                        </Headline3>
                        <Muted>
                            Knowledge in a Box ist ein 2022 gegründetes Startup, das ein preisgekröntes Tool für kontextbasiertes Wissensmanagement entwickelt.
                            Unser Produkt, ausgezeichnet mit dem Deutschen Innovationspreis für Digitales, verbindet Informationen aus verschiedenen Quellen in
                            einem Wissensgraph. Nutzer können über eine Web-App oder Browser-Erweiterung auf die Daten zugreifen, die relevante Informationen
                            basierend auf ihrem Kontext empfehlen.
                        </Muted>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button variant="outline" asChild>
                                <Link href="https://knowledge-in-a-box.de" target='_blank'>
                                    Zur Webseite
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="items-center gap-6 flex flex-col-reverse md:flex md:flex-row">
                    <div className="space-y-4 md:w-2/3">
                        <Headline3>
                            Grow Content
                        </Headline3>
                        <Muted>
                            Grow Content ist ein ursprüngliches Hobby Projekt, welches zu einem Produkt herangewachsen ist. Es gamifiziert Content-Creation und
                            hilft dabei, regelmäßig Inhalte auf verschiedenen Plattformen zu veröffentlichen. Dadurch sammelt man Punkte und Erfahrung und kann
                            so Level aufsteigen und Pflanzen kaufen. Diese Pflanzen werden dann in einem eigenen Garten gesammelt. So kann man sich zusammen mit
                            seinem Team messen.
                        </Muted>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button variant="outline" disabled>
                                Kommt bald
                            </Button>
                        </div>
                    </div>
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                        height="310"
                        src={growContent}
                        width="550"
                    />
                </div>
            </div>
        </section>
    )
}
