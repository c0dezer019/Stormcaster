import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Summary from '../subcomponents/weather_components/Summary';
import '../../css/currentWeather.css'

import { dJAPI, oWAPI } from '../../config/axios';

const CurrentForecast = props => {
    const { coords } = props;
    const [weatherData, setWeatherData] = useState({});
    const [message, setMessage] = useState('');

    const fetchWeatherData = async () => {
        const wthrData = await oWAPI({
            url: `/onecall?lat=${coords.lat}&lon=${coords.lng}&units=imperial&appid=${process.env.REACT_APP_OWM_KEY}`
        });

        return wthrData;
    };

    const fetchMessage = async () => {
        const msgData = await dJAPI();

        return msgData;
    } 

    useEffect(async () => {
        if (Object.keys(coords).length !== 0) {
            const data = await fetchWeatherData();
            setWeatherData(data.data);
        }
        const msg = await fetchMessage();
        setMessage(msg.data.joke);
    }, [coords]);

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
