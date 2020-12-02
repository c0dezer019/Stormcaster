import React, { useEffect, useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import Summary from '../subcomponents/weather_components/Summary';
import '../../css/currentWeather.css';

import { dJAPI, oWAPI, geoAPI } from '../../config/axios';
import { SuperContext } from '../../state/SuperContext';

const CurrentForecast = () => {
    const [weatherData, setWeatherData] = useState({});
    const [message, setMessage] = useState('');
    const { coords, query, setCoords, location } = useContext(SuperContext);

    const getLocation = async () => {
        const localeData = await geoAPI({
            url: `/geocode?q=${query}&api_key=${process.env.REACT_APP_GEO_KEY}`,
        });

        setCoords(localeData.data.results[0].location);
    };

    const fetchData = async () => {
        const wthrData = await oWAPI({
            url: `/onecall?lat=${coords.lat}&lon=${coords.lng}&units=imperial&appid=${process.env.REACT_APP_OWM_KEY3}`,
        });
        const msgData = await dJAPI();

        setWeatherData(wthrData.data);
        setMessage(msgData.data.joke);
    };

    useEffect(async () => {
        if (Object.keys(coords).length !== 0) {
            fetchData();
        }
    }, [coords]);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            fetchData();
        }, 600000);

        return () => clearInterval(updateInterval);
    }, []);

    if (!weatherData.current) {
        return null;
    }

    return (
        <Container maxWidth="xl">
            <Summary weatherData={weatherData} msg={message} loc={location} />
        </Container>
    );
};

export default CurrentForecast;
