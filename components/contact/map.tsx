import dynamic from 'next/dynamic';
import { FC } from 'react';

export const DynamicMap = dynamic(
    async () => import('../map/dynamic-map'),
    {
        ssr: false,
    }
);

export const TileLayer = dynamic(
    async () => import('react-leaflet').then((module) => module.TileLayer),
    {
        ssr: false,
    }
);

export const Marker = dynamic(
    async () => import('react-leaflet').then((module) => module.Marker),
    {
        ssr: false,
    }
);

export const Popup = dynamic(
    async () => import('react-leaflet').then((module) => module.Popup),
    {
        ssr: false,
    }
);

export const Circle = dynamic(
    async () => import('react-leaflet').then((module) => module.Circle),
    {
        ssr: false,
    }
);

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

type Props = {
    children: React.ReactNode;
    [x: string]: any;
};

const Map: FC<Props> = (props) => {
    const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
    return (
        <div style={{ aspectRatio: width / height }}>
            {DynamicMap && (
                <DynamicMap {...props} />
            )}
        </div>
    )
}

export default Map;