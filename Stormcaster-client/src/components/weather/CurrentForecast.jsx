import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { dJAPI, oWAPI } from '../../config/axios';
import { SuperContext } from '../../state/SuperContext';

const CurrentForecast = props => {
    const { coords } = props;
    const { setCurrentMessage, setWeatherData, weatherData } = useContext(SuperContext);

    const fetchWeatherData = async () => {
        const wthrData = await oWAPI(`/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.REACT_APP_OWR_KEY}`);

        return wthrData;
    };

    const fetchMessage = async () => {
        const msgData = await dJAPI();
        console.log(msgData);
    } 

    useEffect(async () => {
        if (Object.keys(coords).length !== 0) {
            const data = await fetchWeatherData();
            setWeatherData(data);
        }
        const msg = await fetchMessage();
        setCurrentMessage(msg);
    }, []);

    useEffect( async () => {
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

CurrentForecast.propTypes = {
    coords: PropTypes.object.isRequired,
}

export default CurrentForecast;
