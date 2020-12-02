import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/routes';
import UserModel from './models/user';
import { SuperContext } from './state/SuperContext';

import "./css/weather-icons.min.css"
import "./css/weather-icons-wind.min.css"

function App() {
    const [coords, setCoords] = useState({});
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
    const [currentMessage, setCurrentMessage] = useState('');
    const [firstRender, setFirstRender] = useState('');
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const value = {
        query,
        setQuery,
        coords,
        setCoords,
        firstRender,
        setFirstRender,
        weatherData,
        setWeatherData,
        currentMessage,
        setCurrentMessage,
    };

    const storeUser = userId => {
        setCurrentUser({ currentUser: userId });
        localStorage.setItem('id', userId);
    };

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('id');

        // eslint-disable-next-line no-unused-vars
        UserModel.logout().then(res => {
            setCurrentUser(null);
        });
    };

    return (
        <div className="App">
            <SuperContext.Provider value={value}>
                <Header currentUser={currentUser} logout={logout} />
                <Routes currentUser={currentUser} storeUser={storeUser} />
            </SuperContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
