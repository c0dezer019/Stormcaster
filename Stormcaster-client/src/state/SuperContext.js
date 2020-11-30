import React from 'react';

export const SuperContext = React.createContext({
	coords: {},
	currentMessage: '',
	firstRender: true,
	query: '',
	weatherData: {},
	setCoords: () => {},
	setCurrentMessage: () => {},
	setFirstRender: () => {},
	setQuery: () => {},
	setWeatherData: () => {},
});