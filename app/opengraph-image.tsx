import { ImageResponse } from 'next/og'
import Hero from './ui/hero'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Till Hoffmann'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div className="min-h-screen flex pt-1
            px-5 sm:px-10 md:px-32 xl:px-64
            w-full
            bg-gradient-to-b bg-blur-lg animate-gradient-xy
            from-rose-300 via-fuchsia-300 to-sky-300
            dark:from-rose-800 dark:via-fuchsia-800 dark:to-sky-800">
                <div className="
                    flex flex-col justify-center p-6 mx-auto w-full max-w-1248
                    sm:py-12
                    lg:py-24 lg:flex-row lg:justify-between lg:bg-white/20 lg:rounded-2xl lg:shadow-lg lg:aspect-video lg:my-auto lg:w-full
                    2xl:max-w-[1248px]
                    ">
                    <div className="flex flex-col justify-center p-6 text-center lg:text-left">
                        <h1 className="text-black text dark:text-white">
                            Till Hoffmann
                        </h1>
                        <h2 className="pb-8 dark:text-white">
                            Elevating Ideas, Crafting Solutions
                        </h2>
                        <p className="leading-8 text-gray-800 dark:text-gray-200">
                            Founder and Freelancer in software and product development.
                        </p>

                        <div className="flex py-6 text-5xl self-center items-center gap-6 break-after-column lg:m-0 lg:self-start">
                            <span
                                rel="noreferrer"
                                className="text-xl cursor-pointer bg-black text-purple-200 flex px-12 py-4 border-none rounded-full hover:bg-purple-900 dark:bg-white dark:hover:bg-purple-300 dark:text-purple-900"
                            >
                                Contact
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}