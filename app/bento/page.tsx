import React from 'react'
import BoxKiab from './ui/box/box-kiab'
import BoxMap from './ui/box/box-map'
import BoxGithub from './ui/box/box-github'
import BoxLinkedin from './ui/box/box-linkedIn'
import BoxFlatrate from './ui/box/box-flatrate'
import BoxKiabPlugin from './ui/box/box-kiab-plugin'
import BoxCalendly from './ui/box/box-calendly'
import BoxFrontend from './ui/box/box-frontend'
import BoxChatgpt from './ui/box/box-chatgpt'
import BoxMe from './ui/box/box-me'
import BoxBlog from './ui/box/box-blog'
import BoxAvatar from './ui/box/box-avatar'

export default function Page() {
    return (
        <main className='min-h-screen pb-12 px-2'>
            <div className='mx-auto gap-2 grid grid-cols-2
                sm:grid-cols-2 sm:w-[500px] sm:gap-4
                md:grid-cols-3 md:w-[700px]
                lg:grid-cols-3 lg:w-[900px]
                xl:grid-cols-4 xl:w-[1100px]
                '>

                <BoxMe />
                <BoxMap />
                <div className='sm:hidden'>
                    <BoxAvatar />
                </div>
                <BoxFrontend />
                <BoxLinkedin />
                <BoxCalendly />
                <BoxChatgpt />
                <BoxBlog />
                <BoxGithub />
                <BoxKiab />

                <BoxFlatrate />
                <BoxKiabPlugin />

            </div>
        </main>
    )
}
