import React from 'react';

export const WeatherContext = React.createContext({
	weatherData: {},
	setWData: () => {},
});