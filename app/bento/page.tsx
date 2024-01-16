import React from 'react'
import BoxKiab from './ui/box/box-kiab'
import BoxMap from './ui/box/box-map'
import BoxGithub from './ui/box/box-github'
import BoxLinkedin from './ui/box/box-linkedIn'
import BoxFlatrate from './ui/box/box-flatrate'
import BoxKiabPlugin from './ui/box/box-kiab-plugin'
import BoxCalendly from './ui/box/box-calendly'

export default function Page() {
    return (
        <main className='min-h-screen pb-12 px-5'>
            <div className='mx-auto gap-4 grid grid-cols-2
                sm:grid-cols-2 sm:w-[500px]
                md:grid-cols-3 md:w-[700px]
                lg:grid-cols-3 lg:w-[900px]
                xl:grid-cols-4 xl:w-[1100px]
                '>

                <BoxKiab />
                <BoxMap />
                <BoxGithub />
                <BoxLinkedin />
                <BoxCalendly />
                <BoxFlatrate />
                <BoxKiabPlugin />

            </div>
        </main>
    )
}
