'use client';
import React from 'react'
import Map, { Circle, Marker, Popup, TileLayer } from '@/components/map/map';
import { useTheme } from 'next-themes';
import { LatLngExpression } from 'leaflet';

type Props = {
    zoom: number,
    width?: string,
    height?: string,
};

const DEFAULT_CENTER: LatLngExpression = [50.928530, 6.942860];

export default function CologneMap({ zoom = 12, width = '800', height = '800' }: Props) {
    const { theme } = useTheme();
    const lightMapStyle = 'https://api.mapbox.com/styles/v1/tillhoffmann/clravm74x008501pid7o9bz4w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGlsbGhvZmZtYW5uIiwiYSI6ImNscmF2Z2U4MDBmdHIyaW1raWxsZXNhanMifQ.xZqeoFJvfTlETgNJOD1IoA';
    const darkMapStyle = 'https://api.mapbox.com/styles/v1/tillhoffmann/clravowy3009601p4gpk01uj9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGlsbGhvZmZtYW5uIiwiYSI6ImNscmF2Z2U4MDBmdHIyaW1raWxsZXNhanMifQ.xZqeoFJvfTlETgNJOD1IoA';
    const mapStyle = theme === 'dark' ? darkMapStyle : lightMapStyle;
    return (
        <div className="overflow-hidden h-full w-full top-0 bottom-0 left-0 right-0">
            <Map width={width} height={height} center={DEFAULT_CENTER} zoom={zoom}>
                <>
                    <TileLayer
                        url={mapStyle}
                    />
                    <Marker position={DEFAULT_CENTER}>
                        <Popup>
                            Join me for a coffee!
                        </Popup>
                    </Marker>
                    <Circle center={DEFAULT_CENTER} radius={1500} color="#22c530" />
                </>
            </Map>
        </div>
    )
}
