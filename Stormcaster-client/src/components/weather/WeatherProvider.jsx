import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

const WeatherProvider = () => {
    // const { locationData } = props;
    const [weatherData, setWeatherData] = useState(null);
    // const [locales, setLocales] = useState({});

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_OWR_URL}/onecall?lat=33.1071&lon=98.5895&appid=${process.env.REACT_APP_OWR_KEY}`
        )
            .then(res => res.json())
            .then(result => {
                setWeatherData(result);
            });
    }, []);

	console.log(weatherData);
	
	return (
		<div>This is the weather</div>
	)
};

/* WeatherProvider.propTypes = {
    locationData: PropTypes.object.isRequired,
}; */

export default WeatherProvider;
