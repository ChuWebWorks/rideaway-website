import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// @ts-ignore
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

// Stylesheets.
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

// Images.
import MenuIcon from '../../images/App Demo Menu.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VudGxlbWluaCIsImEiOiJjbDAwZmx4Z3QwNmZlM3BvZGR3eTc0YjNnIn0._Sfl9X0gUdZ_XY_MlFt6_g';

const Map = () => {
    const mapContainer = React.useRef<any>(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState(-70.25689);
    const [lat, setLat] = useState(43.6591);
    const [zoom, setZoom] = useState(12);
    const [position, setPosition] = useState('top-left');
    
    // Creates the map.
    useEffect( () => {
        if ( map.current ) return; // Initialize the map once.

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/gentleminh/cl00fq8tp000115ns6euxejua',
            center: [lng, lat],
            zoom: zoom
        });

        // Add location search control.
        const locationSearch = new MapboxGeocoder({ accessToken: mapboxgl.accessToken});
        //map.current.addControl( locationSearch, 'top-left' );

        // Add navigation directions.
        const directionsNavigation = new MapboxDirections({
            accessToken: mapboxgl.accessToken
        });
        map.current.addControl(directionsNavigation, 'top-left');


        // Add navigation controls.
        const navigationControl = new mapboxgl.NavigationControl();
        map.current.addControl( navigationControl );

        // Add geolocate controls.
        const geolocateControl = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        });
        map.current.addControl( geolocateControl );
    });

    return (
        <div ref={mapContainer} className="map-container relative">
            <div className='absolute left-0 bottom-16 z-20'>
                <img src={MenuIcon} />
            </div>
            <div className='absolute z-20 bottom-0 w-full bg-royal-blue text-white'>
                <ul className='flex justify-around'>
                    <li className='inline-block'><button className='py-5 px-5' title='Invite'>Invite</button></li>
                    <li className='inline-block'><button className='py-5 px-5' title='Routes'>Routes</button></li>
                    <li className='inline-block'><button className='py-5 px-5' title='Riders'>Riders</button></li>
                    <li className='inline-block'><button className='py-5 px-5' title='Settings'>Settings</button></li>
                </ul>
            </div>

        </div>
    )
}

export default Map