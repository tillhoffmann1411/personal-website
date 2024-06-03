import React from 'react'

export default function Hero() {
    return (
        <section className='h-screen max-w-full'>
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] fixed flex items-center justify-center -z-50">
                <div className="absolute w-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="text-4xl sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-primary to-neutral-300 py-8 text-center sm:text-left">
                    Mit der Idee zum Prototypen<br />in nur einem Monat
                </p>
            </div>
        </section>
    )
}
