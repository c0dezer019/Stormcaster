import React from 'react';

export const SuperContext = React.createContext({
	coords: '',
	currentMessage: '',
	date: new Date(),
	query: '',
	location: '',
	weatherData: '',
	setCoords: () => {},
	setCurrentMessage: () => {},
	setDate: () => {},
	setQuery: () => {},
	setLocation: () => {},
	setWeatherData: () => {},
});