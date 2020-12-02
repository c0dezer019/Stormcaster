/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';

const Summary = ({ weatherData, msg, loc }) => {
    const [timeOfDay, setTimeOfDay] = useState('day')

    if (!weatherData.current) {
        return null;
    }

    const { current, minutely, hourly, daily } = weatherData;
    const weatherIcon = `wi wi-owm-${timeOfDay}-${current.weather[0].id}`;
    const windIcon = `wi wi-wind towards-${current.wind_deg}`;

    // Toggles between day/night icons
    const tODSwitcher = () => {
        if (current.dt >= current.sunrise && current.dt < current.sunset) {
            setTimeOfDay('day');
        } else {
            setTimeOfDay('night');
        }
    };

    const convertDegrees = deg => {
        const directionalArr = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW',
        ];

        const calcDirValue = Math.floor(deg / 22.5 + 0.5);

        return directionalArr[calcDirValue % 16];
    };

    useEffect(() => {
        tODSwitcher();
    }, [current.dt]);

    return (
        <Box id="summary-cntr" display="flex" justifyContent="center">
            <section>
                <h3>Graham, TX</h3>
                <div id="weather-icon">
                    <i className={weatherIcon} id="weather-i"></i>
                </div>
                <Container id="summary-text">
                    <div id="current-temp">
                        <span>{Math.round(current.temp)}</span>
                        <span id="fahr">
                            <i className="wi wi-fahrenheit"></i>
                        </span>
                    </div>
                    <p id="desc1">
                        Feels like {Math.round(current.feels_like)}
                        <i className="wi wi-fahrenheit"></i>,&nbsp;
                        {current.weather[0].description}
                    </p>
                    <p id="desc2">
                        <span>
                            {Math.round(current.wind_speed)} MPH&nbsp;
                            {convertDegrees(current.wind_deg)} with gusts up to{' '}
                            {Math.round(current.wind_gust)} MPH
                        </span>
                    </p>
                    <p>
                        <span>Humidity: {current.humidity}%</span>
                        <span>UV: {current.uvi}</span>
                    </p>

                    <p id="msg">{msg}</p>
                </Container>
            </section>
        </Box>
    );
};

export default Summary;
