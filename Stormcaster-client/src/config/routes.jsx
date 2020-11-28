import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/profile" component={Profile} />
	</Switch>
);

export default Routes;
