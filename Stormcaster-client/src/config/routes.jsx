import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FormContainer from '../containers/FormContainer';
import Login from '../pages/Login';
import { SuperContext } from '../state/SuperContext';
import Locations from '../pages/Locations';

const Routes = ({ storeUser }) => {
    const { currentUser } = useContext(SuperContext);

    return (
        <Switch>
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
        </Switch>
    );
};

export default Routes;
