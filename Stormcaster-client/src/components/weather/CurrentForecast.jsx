/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import '../../css/currentWeather.css';
import Summary from '../subcomponents/weather_components/Summary';

import { dJAPI, oWAPI } from '../../config/axios';
import { SuperContext } from '../../state/SuperContext';

const CurrentForecast = () => {
    const [weatherData, setWeatherData] = useState({});
    const [message, setMessage] = useState('');
    const { coords, query, setCoords, location, setLocation } = useContext(
        SuperContext
    );

    const getLocation = async (type, params) => {
        let q;

        if (!params) {
            q = `${query}`;
        } else {
            q = `${params}`;
        }

        const localeData = await fetch(
            `${process.env.REACT_APP_GEO_URL}/${type}?q=${q}&api_key=${process.env.REACT_APP_GEO_KEY}`
        ).then(res => res.json());

        const { city, state, zip } = localeData.results[0].address_components;

        if (location) {
            console.log("me!")
            setCoords(localeData.data.results[0].location);
        } else {
            setLocation(`${city} ${state}, ${zip}`);
        }
    };

    const fetchData = async () => {
        const wthrData = await oWAPI({
            url: `/weather?lat=${coords.lat}&lon=${coords.lng}&units=imperial&appid=${process.env.REACT_APP_OWM_KEY}`,
        });
        const msgData = await dJAPI();

        setWeatherData(wthrData.data);
        setMessage(msgData.data.joke);
    };

    useEffect(async () => {
        if (Object.keys(coords).length) {
            fetchData();
            getLocation('reverse', `${coords.lat},${coords.lng}`);
        }
    }, [coords]);

    useEffect(() => {
        if (query) {
            getLocation('geocode');
        } else if (Object.keys(coords).length) {
            getLocation(`reverse`, `${coords.lat},${coords.lng}`);
        }
    }, [query]);

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
