import React from 'react'
import Map, { Circle, Marker, Popup, TileLayer } from '@/components/map';
import { useTheme } from 'next-themes';
import { LatLngExpression } from 'leaflet';
import { Card } from '@/components/ui/card';

const DEFAULT_CENTER: LatLngExpression = [50.928530, 6.942860];
export default function CologneMap() {
    const { theme } = useTheme();
    const lightMapStyle = 'https://api.mapbox.com/styles/v1/tillhoffmann/clravm74x008501pid7o9bz4w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGlsbGhvZmZtYW5uIiwiYSI6ImNscmF2Z2U4MDBmdHIyaW1raWxsZXNhanMifQ.xZqeoFJvfTlETgNJOD1IoA';
    const darkMapStyle = 'https://api.mapbox.com/styles/v1/tillhoffmann/clravowy3009601p4gpk01uj9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGlsbGhvZmZtYW5uIiwiYSI6ImNscmF2Z2U4MDBmdHIyaW1raWxsZXNhanMifQ.xZqeoFJvfTlETgNJOD1IoA';
    const mapStyle = theme === 'dark' ? darkMapStyle : lightMapStyle;
    const circleColor = theme === 'dark' ? '#22c530' : '#013706';
    return (
        <Card>
            <div className="rounded-md overflow-hidden">
                <Map width="800" height="800" center={DEFAULT_CENTER} zoom={13}>
                    <>
                        <TileLayer
                            url={mapStyle}
                        />
                        <Marker position={DEFAULT_CENTER}>
                            <Popup>
                                Join me for a coffee!
                            </Popup>
                        </Marker>
                        <Circle center={DEFAULT_CENTER} radius={2000} color={circleColor} />
                    </>
                </Map>
            </div>
        </Card>
    )
}
