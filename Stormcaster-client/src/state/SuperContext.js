import React from 'react';

export const SuperContext = React.createContext({
	coords: '',
	currentMessage: '',
	date: new Date(),
	query: '',
	regFormOpen: false,
	location: '',
	weatherData: '',
	setCoords: () => {},
	setCurrentMessage: () => {},
	setDate: () => {},
	setQuery: () => {},
	setRegFormOpen: () => {},
	setLocation: () => {},
	setWeatherData: () => {},
});