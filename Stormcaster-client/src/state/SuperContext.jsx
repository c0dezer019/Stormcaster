import React, { useState, useMemo, createContext } from 'react';

export const SuperContext = createContext({
    coords: {},
    currentMessage: '',
    currentUser: localStorage.getItem('id'),
    date: new Date(),
    firstRender: true,
    isSubmitting: false,
    location: '',
    query: '',
    regFormOpen: false,
    weatherData: '',
    setCoords: () => {},
    setCurrentMessage: () => {},
    setCurrentUser: () => {},
    setDate: () => {},
    setFirstRender: () => {},
    setIsSubmitting: () => {},
    setLocation: () => {},
    setQuery: () => {},
    setRegFormOpen: () => {},
    setWeatherData: () => {},
})

export const SuperProvider = ({ children }) => {
	const [coords, setCoords] = useState({});
    const [currentMessage, setCurrentMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
    const [date, setDate] = useState(new Date());
    const [firstRender, setFirstRender] = useState('');
    const [isSubmitting, setIsSubmitting] = useState('');
    const [location, setLocation] = useState('');
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState('');
	const [regFormOpen, setRegFormOpen] = useState(false);

	const value = {
        coords,
        currentMessage,
        currentUser,
        date,
        firstRender,
        isSubmitting,
        location,
        query,
        regFormOpen,
        weatherData,
        setCoords,
        setCurrentMessage,
        setCurrentUser,
        setDate,
        setFirstRender,
        setIsSubmitting,
        setLocation,
        setQuery,
        setRegFormOpen,
        setWeatherData,
    };

    const val = useMemo(() => value, [value]);
	
	return (
		<SuperContext.Provider value={val}>
			{children}
		</SuperContext.Provider>
	)
};