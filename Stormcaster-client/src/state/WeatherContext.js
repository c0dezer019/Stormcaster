import React from 'react';

export const WeatherContext = React.createContext({
	currentMessage: '',
	weatherData: {},
	setCurrentMessage: () => {},
	setWeatherData: () => {},
});