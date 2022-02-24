import React, { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VudGxlbWluaCIsImEiOiJjbDAwZmx4Z3QwNmZlM3BvZGR3eTc0YjNnIn0._Sfl9X0gUdZ_XY_MlFt6_g';

const Map = () => {
    const mapContainer = React.useRef<any>(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState(-70.25689);
    const [lat, setLat] = useState(43.6591);
    const [zoom, setZoom] = useState(10);
    
    // Creates the map.
    useEffect( () => {
        if ( map.current ) return; // Initialize the map once.

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/gentleminh/cl00fq8tp000115ns6euxejua',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.addControl(
            new mapboxgl.NavigationControl(),
        );
        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
            })
        );

    });

    return (
        <>
            <div ref={mapContainer} className="map-container" />
        </>
    )
}

export default Map