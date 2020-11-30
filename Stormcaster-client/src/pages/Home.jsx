import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { SuperContext } from '../state/SuperContext';
import CurrentForecast from '../components/weather/CurrentForecast';

const Home = () => {
    const { coords, setCoords } = useContext(SuperContext);

    let isGeolocationSupported = false;

    const setPosition = position => {
        setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition);
            isGeolocationSupported = true;
        } else {
            isGeolocationSupported = false;
        }
    };

    useEffect(() => {
        if (coords === '') {
            getLocation();
        }
    }, []);

    return (
        <Container maxWidth="xl">
            {isGeolocationSupported ? (
                <>
                    <p>
                        Geolocation is not supported by this browser, please
                        supply you location manually or enable it if it is
                        turned off to get automatic current weather for current
                        location.
                    </p>
                </>
            ) : (
                <>
                    <p>
                        lat: {coords.lat} lon: {coords.lng}
                    </p>
                </>
            )}
           
            <CurrentForecast />
        </Container>
    );
};

export default Home;
