/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { SuperContext } from '../../../state/SuperContext';
import LocationModel from '../../../models/location';
import UserModel from '../../../models/user';

const Summary = ({ weatherData, msg, loc }) => {
    const { coords, currentUser } = useContext(SuperContext);
    const [timeOfDay, setTimeOfDay] = useState('day');

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

    const saveLocation = async () => {
        console.log('save');
        const localeData = await fetch(
            `${process.env.REACT_APP_GEO_URL}/reverse?q=${coords.lat},${coords.lng}&api_key=${process.env.REACT_APP_GEO_KEY}`
        ).then(res => res.json());

        const { city, state, zip } = localeData.results[0].address_components;
        const zipcode = zip;
        const user = localStorage.getItem('id');

        const data = { city, state, zipcode, user };

        const located = await LocationModel.create({
            ...data,
        });

        /* const user = await UserModel.findOne({
            where: { id: currentUser.id}
        }) */

        /* try {
            await currentUser.addLocation(located)
        } catch(err) {
            console.log(err)
        } */
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
        console.log(currentUser);
    }, []);

    useEffect(() => {
        tODSwitcher();
    }, [current.dt]);

    return (
        <Box id="summary-cntr" display="flex" justifyContent="center">
            <section>
                <header>
                    <div>
                        <span>
                            <h3>{loc}</h3>
                        </span>
                        <span>
                            <Button
                                id="save_loc"
                                onClick={() => saveLocation()}
                                variant="link">
                                Save Location
                            </Button>
                        </span>
                    </div>
                </header>
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
                    <p className="wthr-text" id="desc1">
                        Feels like {Math.round(current.feels_like)}
                        <i className="wi wi-fahrenheit"></i>,&nbsp;
                        {current.weather[0].description}
                    </p>
                    <p className="wthr-text" id="desc2">
                        <span>
                            {Math.round(current.wind_speed)} MPH&nbsp;
                            {convertDegrees(current.wind_deg)}
                            {current.wind_gust ? (
                                <span>
                                    with gusts up to&nbsp;
                                    {Math.round(current.wind_gust)} MPH
                                </span>
                            ) : null}
                        </span>
                    </p>
                    <p className="wthr-text">
                        <span>Humidity: {current.humidity}%</span>
                        <span>UV: {current.uvi}</span>
                    </p>

                    <p className="wthr-text" id="msg">
                        {msg}
                    </p>
                </Container>
            </section>
        </Box>
    );
};

export default Summary;
