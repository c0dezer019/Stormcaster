/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Footer from "./components/Footer";
import Routes from "./config/routes";
import { SuperContext } from "./state/SuperContext";

import "./css/weather-icons.min.css";
import "./css/weather-icons-wind.min.css";

function App() {
    const { setCurrentUser } = useContext(SuperContext);

    const storeUser = userId => {
        setCurrentUser(userId);
        localStorage.setItem('id', userId);
    };

    return (
        <div className="App">
            <Routes storeUser={storeUser} />
            <Footer />
        </div>
    );
}

export default App;
