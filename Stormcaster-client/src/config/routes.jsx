import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FormContainer from '../containers/FormContainer';
import Login from '../pages/Login';

const Routes = ({ currentUser, storeUser}) => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/profile" component={Profile} />
		<Route path="/register" component={FormContainer} />
		<Route path="/login" render={routeProps => {
			return <Login
						{...routeProps}
						currentUser={currentUser}
						storeUser={storeUser}
					/>
		}} />
	</Switch>
);

export default Routes;
