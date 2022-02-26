import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// @ts-ignore
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

// Stylesheets.
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

// Images.
import MenuIcon from '../../images/App Demo Menu.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VudGxlbWluaCIsImEiOiJjbDAwZmx4Z3QwNmZlM3BvZGR3eTc0YjNnIn0._Sfl9X0gUdZ_XY_MlFt6_g';

const Map = () => {
    const mapContainer = React.useRef<any>(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [longitude, setLongitude] = useState(-70.25689);
    const [latitude, setLatitude] = useState(43.6591);
    const [zoom, setZoom] = useState(12);
    const [position, setPosition] = useState([longitude, latitude]);

    /**
     * Create Mapbox controls.
     */

    // Geocoder controls.
    const locationSearch = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        // @ts-ignore
        mapboxgl: mapboxgl,
        marker: {
            // @ts-ignore
            color: 'blue',
            draggable: true,
        },
    });

    // Navigation controls.
    const navigationControl = new mapboxgl.NavigationControl();

    // Geolocate controls.
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    });
    
    /**
     * Create map and add controls.
     **/
    useEffect( () => {
        if ( map.current ) return; // Initialize the map once.

        // Initialize the map.
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/gentleminh/cl00fq8tp000115ns6euxejua',
            center: [longitude, latitude],
            pitch: 55,
            zoom: zoom,
        });

        // Add location search control.
        map.current.addControl( locationSearch, 'top-left' );

        // Add navigation controls.
        map.current.addControl( navigationControl );

        // Add geolocate control.
        map.current.addControl( geolocate );
    });

    // Geocoder effects.
    useEffect( ()=> {
        if ( ! map.current ) return; // Wait for map to initialize.

        locationSearch.on('result', function(e) {
            console.log(e.result.center)
        })

    });

     // Geolocate effects.
     useEffect( ()=> {
        if ( ! map.current ) return; // Wait for map to initialize.

        // Get user's location on map load.
        map.current.on('load', () => {
            geolocate.trigger();
            setPosition([longitude, latitude]);
        })

        // Get user's location after they click on geolocate control.
         geolocate.on( 'geolocate', (e : any) => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
            setPosition([longitude, latitude]);
        }); 

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