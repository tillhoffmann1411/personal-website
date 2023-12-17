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
            <div className="-mt-24">
                <Hero />
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