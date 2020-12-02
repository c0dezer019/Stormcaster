import React from 'react';

export const SuperContext = React.createContext({
	coords: '',
	currentMessage: '',
	query: '',
	location: '',
	weatherData: '',
	setCoords: () => {},
	setCurrentMessage: () => {},
	setQuery: () => {},
	setLocation: () => {},
	setWeatherData: () => {},
});