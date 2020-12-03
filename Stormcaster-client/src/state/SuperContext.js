import React from 'react';

export const SuperContext = React.createContext({
	coords: '',
	currentMessage: '',
	date: new Date(),
	isSubmitting: false,
	query: '',
	regFormOpen: false,
	location: '',
	weatherData: '',
	setCoords: () => {},
	setCurrentMessage: () => {},
	setDate: () => {},
	setIsSubmitting: () => {},
	setQuery: () => {},
	setRegFormOpen: () => {},
	setLocation: () => {},
	setWeatherData: () => {},
});