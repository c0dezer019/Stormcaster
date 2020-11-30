import React from 'react';

export const LocaleContext = React.createContext({
	coords: {},
	firstRender: true,
	query: '',
	setCoords: () => {},
	setFirstRender: () => {},
	setQuery: () => {},
});