import React, { useContext, useEffect } from 'react';
import { SuperContext } from '../../state/SuperContext';

const CurrentForecast = () => {
    const { setWeatherData, weatherData, coords } = useContext(SuperContext);

    const fetchWeatherData = async () => {
        const wthrData = await fetch(
            `${process.env.REACT_APP_OWR_URL}/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.REACT_APP_OWR_KEY}`
        ).then(res => res.json());

        return wthrData;
    };

    useEffect(async () => {
        const data = await fetchWeatherData();
        setWeatherData(data);
    }, []);

    useEffect(() => {
        if (weatherData !== '') {
            console.log(weatherData);
        }
    }, [weatherData]);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default CurrentForecast;
