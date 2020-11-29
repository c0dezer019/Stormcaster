import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/routes';
import UserModel from './models/user';
import { AppContext } from './state/AppContext';

function App() {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));
    const [query, setQuery] = useState('');
    const [coords, setCoords] = useState('');
    const value = {query, setQuery, coords, setCoords };

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
            <AppContext.Provider value={value}>
                <Header currentUser={currentUser} logout={logout} />
                <Routes currentUser={currentUser} storeUser={storeUser} />
            </AppContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
