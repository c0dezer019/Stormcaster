import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FormContainer from '../containers/FormContainer';
import Login from '../pages/Login';
import { SuperContext } from '../state/SuperContext';
import Locations from '../pages/Locations';

const Routing = ({ storeUser }) => {
    const { currentUser } = useContext(SuperContext);

	return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={FormContainer} />
            <Route path="/locations" component={Locations} />
            <Route
                path="/login"
                render={routeCProps => {
                    return (
                        <Login
                            {...routeCProps}
                            currentUser={currentUser}
                            storeUser={storeUser}
                        />
                    );
                }}
            />
        </Routes>
    );
};

export default Routing;
