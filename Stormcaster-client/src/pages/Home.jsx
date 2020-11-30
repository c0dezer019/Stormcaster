import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import WeatherProvider from '../components/weather/WeatherProvider';
import { LocaleContext } from '../state/LocaleContext';
import CurrentForecast from '../components/weather/CurrentForecast';

const Home = () => {
    const { coords, setCoords, firstRender, setFirstRender } = useContext(LocaleContext);
    const location = useLocation();

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
        if (coords === '' && firstRender) {
            getLocation();
            setFirstRender(false)
            console.log(isGeolocationSupported);
        }
    }, []);

    useEffect(() => {
        setFirstRender(true);
    }, [location.pathname]);

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
            <LocaleContext />
            <WeatherProvider />
            <CurrentForecast />
        </Container>
    );
};

export default Home;
