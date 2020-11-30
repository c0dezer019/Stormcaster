import React from 'react';

export const LocaleContext = React.createContext({
	query: '',
	coords: {},
	setCoords: () => {},
	setQuery: () => {},
});