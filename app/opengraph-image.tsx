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