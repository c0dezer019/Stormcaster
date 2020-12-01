/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from '@material-ui/core';

const Summary = ({ weatherData, msg }) => {
    if (!weatherData.current) {
        return null;
    }

    const { current, minutely, hourly, daily } = weatherData;

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

    return (
        <Container id="summary-cntr" maxWidth="lg">
            <section>
                <div id="weather_icon">
                    <img src="" alt="Weather icon" />
                </div>
                <Container id="summary-text">
                    <div id="currentTemp">
                        <span>{current.temp}&deg; F</span>
                    </div>
                    <p id="desc1">
                        {current.feels_like}&deg;,&nbsp;
                        {current.weather[0].description}
                    </p>
                    <p id="desc2">
                        <span>
                            {current.wind_speed} MPH{' '}
                            {convertDegrees(current.wind_deg)} /
                        </span>
                        <span>Humidity: {current.humidity}% /</span>
                        <span>UV: {current.uvi}</span>
                    </p>
                    <p id="msg">{msg}</p>
                </Container>
            </section>
        </Container>
    );
};

export default Summary;
