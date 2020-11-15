import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SevenDayForecast from '../pages/SevenDayForecast';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const Routes = props => {
    const { currentUser, storeUser } = props;

    // eslint-disable-next-line react/jsx-filename-extension
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Seven_day_forecast" component={SevenDayForecast} />
        <Route path="/profile" component={Profile} />
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
};

Routes.propTypes = {
    currentUser: PropTypes.object,
    storeUser: PropTypes.object,
};

Routes.defaultProps = {
    currentUser: null,
    storeUser: null,
};

export default Routes;
