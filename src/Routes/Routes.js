import React from 'react';
import Users from '../NavComponents/Users/Users';
import './Routes.css';
import MainContent from '../MainContent/MainContent';
import { Route } from 'react-router-dom';

const Routes = () => {
	return (
		<div className="routes-content">
			<Route exact path="/" component={MainContent} />
			<Route exact path="/users" component={Users} />
			<Route exact path="/products" component={MainContent} />
			<Route exact path="/authentication" component={MainContent} />
			<Route exact path="/typography" component={MainContent} />
			<Route exact path="/icons" component={MainContent} />
			<Route exact path="/account" component={MainContent} />
			<Route exact path="/settings" component={MainContent} />
		</div>
	);
};

export default Routes;
