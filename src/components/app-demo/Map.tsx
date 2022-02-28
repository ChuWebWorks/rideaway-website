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
    const [directionRoutes, setDirectionRoutes] = useState<Array<object>>([]);
    
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
        marker.on( 'click', (e : any) => {
            e.preventDefault();
        })
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
            routes.route.forEach( (r : any) => {
                setDirectionRoutes([
                    {
                        route: r.geometry,
                        distance: r.distance,
                        duration: r.duration
                    }
                ]);
            });
        });
    },[]);

    useEffect(() => {
        if ( ! map.current ) return; // Wait for map to initialize.

        let isSubscribed = true;

        if ( isSubscribed ) {
            //console.log(directionRoutes);
        }
        return () => {
            isSubscribed = false;
        }
    }, [directionRoutes]);

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