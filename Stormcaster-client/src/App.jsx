import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/routes';
import UserModel from './models/user';
import { LocaleContext } from './state/LocaleContext';
import { WeatherContext } from './state/WeatherContext';

function App() {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
    const [query, setQuery] = useState('');
    const [coords, setCoords] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const value = { query, setQuery, coords, setCoords, firstRender, setFirstRender };
    const wthrValue = { weatherData, setWeatherData };

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
            <LocaleContext.Provider value={value}>
                <WeatherContext.Provider value={wthrValue}>
                    <Header currentUser={currentUser} logout={logout} />
                    <Routes currentUser={currentUser} storeUser={storeUser} />
                </WeatherContext.Provider>
            </LocaleContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
