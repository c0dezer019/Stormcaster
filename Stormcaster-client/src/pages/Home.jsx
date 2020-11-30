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
            console.log(isGeolocationSupported);
            isGeolocationSupported = true;
        } else {
            isGeolocationSupported = false;
        }
    };

    useEffect(() => {
        if (Object.keys(coords).length === 0) {
            getLocation();
            console.log(isGeolocationSupported);
        }
    }, []);

    return (
        <Container maxWidth="xl">
            {isGeolocationSupported ? (
                <>
                    <p>
                        lat: {coords.lat} lon: {coords.lng}
                    </p>
                </>
            ) : (
                <>
                    <p>
                        Geolocation is not supported by this browser, please
                        supply you location manually or enable it if it is
                        turned off to get automatic current weather for current
                        location.
                    </p>
                </>
            )}

            {Object.keys(coords).length > 0 ? (
                <CurrentForecast coords={coords} />
            ) : (
                <>
                    <p>
                        For some reason things aren&apos;t loading right. Please
                        refresh.
                    </p>
                </>
            )}
        </Container>
    );
};

export default Home;
