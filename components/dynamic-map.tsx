import { FC, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

export const MapContainer = dynamic(
    async () => (await import('react-leaflet')).MapContainer,
    {
        ssr: false,
    }
)

type Props = {
    children: React.ReactNode;
    className?: string;
    width?: number;
    height?: number;
};

const Map: FC<Props> = ({ children, className, width, height, ...rest }) => {
    useEffect(() => {
        (async function init() {
            const icon = L.icon({
                iconRetinaUrl: 'https://till-hoffmann.me/images/ till-memoji.png',
                iconUrl: 'https://till-hoffmann.me/images/ till-memoji.png',
                iconSize: [80, 80],
                iconAnchor: [40, 40],
                popupAnchor: [0, -40],
                className: 'hover:animate-pulse'
            });
            L.Marker.prototype.options.icon = icon;
        })();
    }, []);

    return (
        <MapContainer className="h-full w-full z-10" {...rest}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
            attributionControl={false}
            doubleClickZoom={false}
        >
            {children}
        </MapContainer>
    )
}

export default Map;