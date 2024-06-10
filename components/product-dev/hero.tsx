import React from 'react'
import { SparklesCore } from '../ui/sparkles'
import { TextRevealCard } from '../ui/text-reveal-card'
import { Headline1 } from '../ui/typography'

export default function Hero() {
    return (
        <section className='h-screen w-full -mt-16 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" sm:mt-0'>
            <div className="text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative">
                <div className='hidden md:block'>
                    <TextRevealCard text="Gute Produkte sind Magie" revealText="Ich zeige dir den Trick" />
                </div>
                <div className='block md:hidden'>
                    <Headline1>
                        Gute Produkte sind Magie<br /><span className="text-muted-foreground text-3xl">Ich zeige dir den Trick</span>
                    </Headline1>
                </div>
            </div>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-px w-1/4" />

                <div className='h-full block md:hidden'>
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </section>
    )
}
