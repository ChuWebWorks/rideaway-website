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
    // Initial map states.
    const mapContainer = React.useRef<any>(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [longitude, setLongitude] = useState(-70.25689);
    const [latitude, setLatitude] = useState(43.6591);
    const [zoom, setZoom] = useState(12);
    const [position, setPosition] = useState([longitude, latitude]);

    // Initial user's states.
    const [userPosition, setUserPosition] = useState({
        userLongitude: 0,
        userLatitude: 0
    });

    // Initial destination states.
    const [destination, setDestination] = useState({
        destinationLong: 0,
        destinationLat: 0
    });

    /**
     * Create Mapbox controls.
     */

    // Geocoder controls.
    const locationSearch = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        // @ts-ignore
        mapboxgl: mapboxgl,
        marker: false
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

    // Directions.
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'imperial',
        profile: 'mapbox/driving-traffic',
        alternatives: true,
        controls: false,
        steps: true,
        banner_instructions: true,
        interactive: false,
        exclude: 'toll',
        // Use geometries to decide which alternate route to take.
    });
    const marker = new mapboxgl.Marker({
        draggable: true,
        color: 'blue',
    });

    // Array of direction routes. 
    // Distance is stored in meters.
    // Duration is stored in seconds.
    const [directionRoutes, setDirectionRoutes] = useState<any>([]);
    
    /**
     * Create map and add controls.
     **/
    useEffect( () => {
        if ( ! map.current ) {
            // Initialize the map.
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/gentleminh/cl00fq8tp000115ns6euxejua',
                center: [longitude, latitude],
                //pitch: 55,
                zoom: zoom,
            });

            // Add location search control.
            map.current.addControl( locationSearch, 'top-left' );

            // Add navigation controls.
            map.current.addControl( navigationControl );

            // Add geolocate control.
            map.current.addControl( geolocate );

            // Add directions controls.
            map.current.addControl( directions );
        };
        return;
    }, []);

    // Geocoder effects.
    useEffect( ()=> {
        if ( ! map.current ) return; // Wait for map to initialize.
        
        locationSearch.on( 'result', (e : any) => {
            marker.setLngLat( e.result.center );
            // @ts-ignore
            marker.addTo( map.current ); // This already gets checked.

            setDestination({
                destinationLong: e.result.center[0],
                destinationLat: e.result.center[1],
            });
        });

        marker.on( 'dragend', (e : any) => {
            let markerLngLat = e.target.getLngLat();
            setDestination({
                destinationLong: markerLngLat['lng'],
                destinationLat: markerLngLat['lat'],
            });
        });
    }, []);

    // Geolocate effects.
    useEffect( ()=> {
        if ( ! map.current ) return; // Wait for map to initialize.

        // Get user's location on map load.
        map.current.on('load', () => {
            geolocate.trigger();
        })

        // Get user's location after they click on geolocate control.
        geolocate.on( 'geolocate', (e : any) => {
            setUserPosition({
                userLongitude: e.coords.longitude,
                userLatitude: e.coords.latitude,
            });
        }); 
    },[]);

    useEffect(() => {
        if ( ! map.current ) return; // Wait for map to initialize.

        let isSubscribed = true;

        if ( isSubscribed ) {
            directions.setOrigin(userPosition.userLongitude + ',' + userPosition.userLatitude);
            directions.setDestination(destination.destinationLong + ',' + destination.destinationLat);
        }

        return () => {
            isSubscribed = false;
        }

    }, [destination]);

    useEffect(() => {
        if ( ! map.current ) return; // Wait for map to initialize.

        directions.on( 'route', (routes : any) => {
            setDisplayRoute(routes.route.map((r : (any), index : (number)) => {
                const {distance, duration} = r;
                return (
                    <button key={index} onClick={() => {setSelectedRoute(r)}} className='block bg-royal-blue text-white py-2 px-5 mb-3 rounded-l-full hover:cursor hover:bg-persian-blue ease-in-out duration-100'>Route {index+1}: {(distance * 0.000621371).toFixed(0)}mi, {(duration / 60).toFixed(0)}min.</button>
                )
            })
            );
        });
    },[]);

    const [selectedRoute, setSelectedRoute] = useState<any>(null);
    const [displayRoute, setDisplayRoute] = useState<any>(null);
    const directionsRef = React.useRef<any>(null);

    useEffect(() => {
        if ( ! map.current ) return; // Wait for map to initialize.

        let isSubscribed = true;

        if ( isSubscribed ) {
            const clickElement = (element : HTMLElement) => {
                element.click();
            }

            // We want the Geolocate control to be in an "active" state after user click on a route.
            // Documentation states that "These interaction states can't be controlled programmatically. Instead, they are set based on user interactions."
            // https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol
            // We mimic the user's interaction. When user clicks on the route, the click event is also triggered on the Geolocate button.
            let element : HTMLElement = document.getElementsByClassName('mapboxgl-ctrl-geolocate')['0'] as HTMLElement;
            if ( element ) {
                clickElement( element );
                directionsRef.current.classList.add('hidden');
            }
        };
        return () => {
            isSubscribed = false;
        }
    }, [selectedRoute]);

    const [displayDirections, setDisplayDirections] = useState<any>(null);

    return (
        <>
            <div ref={mapContainer} className="map-container relative/"/>
            <div className='absolute left-0 bottom-16 z-20'>
                <button><img alt='' src={MenuIcon} /></button>
            </div>
            <div className='absolute z-20 bottom-0 w-full bg-royal-blue text-white'>
                <ul className='flex justify-around'>
                    <li className='inline-block hover:bg-persian-blue ease-in-out duration-100'><button className='py-5 px-5' title='Invite'>Invite</button></li>
                    <li className='inline-block hover:bg-persian-blue ease-in-out duration-100'><button className='py-5 px-5' title='Routes'>Routes</button></li>
                    <li className='inline-block hover:bg-persian-blue ease-in-out duration-100'><button className='py-5 px-5' title='Riders'>Riders</button></li>
                    <li className='inline-block hover:bg-persian-blue ease-in-out duration-100'><button className='py-5 px-5' title='Settings'>Settings</button></li>
                </ul>
            </div>
            <div ref={directionsRef} className='absolute right-0 bottom-28'>
                {displayRoute}
            </div>
            <div className='absolute top-0 left-0 right-0 m-auto z-20 bg-white'>
                {displayDirections}
            </div>
        </>
    )
}

export default Map