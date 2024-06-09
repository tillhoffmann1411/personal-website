import React from 'react'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'

export default function Hero() {
    return (
        <section>
            <BackgroundGradientAnimation
                className='absolute top-0 left-0 right-0 bottom-0 h-full w-full content-center z-10'
                gradientBackgroundStart='rgb(7, 55, 7)'
                gradientBackgroundEnd='rgb(0, 17, 82)'
                firstColor='18, 113, 255'
                secondColor='34, 197, 49'
                thirdColor='100, 220, 255'
                fourthColor='200, 50, 50'
                fifthColor='180, 180, 50'
                pointerColor='140, 100, 255'
            >
                <div className='container px-4 md:px-6 max-w-4xl'>
                    <h1 className="text-4xl sm:text-7xl font-bold text-center text-white">
                        Erspare dir und deinem Team nervige Arbeit
                    </h1>
                </div>
            </BackgroundGradientAnimation>
        </section>
    )
}
