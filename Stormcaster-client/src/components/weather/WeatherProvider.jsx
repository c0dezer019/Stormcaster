import { useContext, useEffect } from 'react';
import { LocaleContext } from '../../state/LocaleContext';
import { WeatherContext } from '../../state/WeatherContext';

const WeatherProvider = () => {
    const { coords, firstRender } = useContext(LocaleContext);
    const { setWeatherData } = useContext(WeatherContext);

    useEffect(async () => {
        if (firstRender && coords !== '') {
            const weatherData = await fetch(
                `${process.env.REACT_APP_OWR_URL}/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.REACT_APP_OWR_KEY}`
            ).then(res => res.json());

            console.log(weatherData.results[0]);
            setWeatherData(weatherData.results[0]);
        }
    }, [firstRender]);

    useEffect(async () => {
        if (!firstRender && coords !== '') {
            const weatherData = await fetch(
                `${process.env.REACT_APP_OWR_URL}/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.REACT_APP_OWR_KEY}`
            ).then(res => res.json());

            console.log(weatherData.results[0]);
            setWeatherData(weatherData.results[0]);
        }
    }, [coords])

    return null;
};

export default WeatherProvider;
