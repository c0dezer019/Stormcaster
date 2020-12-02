import React, { useEffect, useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import Summary from '../subcomponents/weather_components/Summary';
import '../../css/currentWeather.css';

import { dJAPI, oWAPI } from '../../config/axios';
import { SuperContext } from '../../state/SuperContext';

const CurrentForecast = () => {
    const [weatherData, setWeatherData] = useState({});
    const [message, setMessage] = useState('');
    const { coords } = useContext(SuperContext);

    const fetchData = async () => {
        const wthrData = await oWAPI({
            url: `/onecall?lat=${coords.lat}&lon=${coords.lng}&units=imperial&appid=${process.env.REACT_APP_OWM_KEY3}`,
        });
        const msgData = await dJAPI();

        setWeatherData(wthrData);
        setMessage(msgData)
    };

    useEffect(async () => {
        if (Object.keys(coords).length !== 0) {
            fetchData();
        }
    }, [coords]);

    useEffect(() => {
        if (Object.keys(weatherData).length !== 0 && message !== '') {
            const updateInterval = setInterval(() => {
                fetchData();
            }, 10000);

            clearInterval(updateInterval)
        }
    }, []);

    if (!weatherData.current) {
        return null;
    }

    return (
        <Container maxWidth="xl">
            <Summary weatherData={weatherData} msg={message} />
        </Container>
    );
};

export default CurrentForecast;
