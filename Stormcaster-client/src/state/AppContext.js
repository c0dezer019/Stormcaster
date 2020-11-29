import React from 'react';

export const AppContext = React.createContext({
	query: '',
	coords: {},
	setCoords: () => {},
	setQuery: () => {},
});