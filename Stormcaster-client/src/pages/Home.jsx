import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { SuperContext } from '../state/SuperContext';
import CurrentForecast from '../components/weather/CurrentForecast';

let isGeolocationSupported = false;

const Home = () => {
    const { coords, setCoords } = useContext(SuperContext);

    const toggle = state => {
        isGeolocationSupported = state;
    };

    const setPosition = position => {
        toggle(true);
        setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    };

    const getLost = error => {
        switch (error) {
            case error.PERMISSION_DENIED:
                toggle(false);
                break;
            case error.POSITION_UNAVAILABLE:
                toggle(false);
                break;
            default:
                break;
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, getLost);
            isGeolocationSupported = true;
        } else {
            isGeolocationSupported = false;
        }
    };

    useEffect(() => {
        if (Object.keys(coords).length === 0) {
            getLocation();
        }
    }, []);
   
    return (
        <Container maxWidth="xl">
            {isGeolocationSupported ?
                null : (
                <>
                    <p>
                        Geolocation is not supported by this browser, please
                        supply you location manually or enable it if it is
                        turned off to get automatic current weather for current
                        location.
                    </p>
                </>
            )}
                <CurrentForecast coords={coords} />
            
        </Container>
    );
};

export default Home;
