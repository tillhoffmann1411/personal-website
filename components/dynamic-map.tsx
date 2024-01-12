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
                iconRetinaUrl: 'https://till-hoffmann.me/images/profile.webp',
                iconUrl: 'https://till-hoffmann.me/images/profile.webp',
                iconSize: [100, 100],
                iconAnchor: [50, 50],
                popupAnchor: [0, -50],
                className: 'transition hover:animate-pulse hover:rotate-45 hover:scale-125'
            });
            L.Marker.prototype.options.icon = icon;
        })();
    }, []);

    return (
        <MapContainer className="h-full w-full" {...rest}
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