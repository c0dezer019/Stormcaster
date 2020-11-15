import React, { useState } from 'react';

import Routes from './config/routes';
import Header from './components/Header';
import Footer from './components/Footer';
import UserModel from './models/user';

function App() {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'));

    const storeUser = userId => {
        setCurrentUser({ currentUser: userId });
        localStorage.setItem('id', userId);
    };

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('id');

        UserModel.logout().then(res => {
            setCurrentUser(null);
            console.log(res)
        });
    };

    return (
        <div className="App">
            <Routes currentUser={currentUser} storeUser={storeUser}>
                <Header currentUser={currentUser} logout={logout} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
