/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./config/routes";
import UserModel from "./models/user";
import { SuperContext } from "./state/SuperContext";

import "./css/weather-icons.min.css";
import "./css/weather-icons-wind.min.css";

function App() {
    const { setCurrentUser } = useContext(SuperContext);

    const storeUser = userId => {
        setCurrentUser(userId);
        localStorage.setItem('id', userId);
    };

    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('id');

        UserModel.logout().then(res => {
            setCurrentUser(null);
        });
    };

    return (
        <div className="App">
            <Header logout={logout} />
            <Routes storeUser={storeUser} />
            <Footer />
        </div>
    );
}

export default App;
