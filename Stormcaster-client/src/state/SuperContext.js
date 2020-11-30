import React from 'react';

export const SuperContext = React.createContext({
	coords: '',
	currentMessage: '',
	query: '',
	weatherData: '',
	setCoords: () => {},
	setCurrentMessage: () => {},
	setQuery: () => {},
	setWeatherData: () => {},
});