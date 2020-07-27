import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Routes from '../Routes/Routes';

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<SideBar />
				<Switch>
				<Routes />
			</Switch>
			</div>
		</Router>
	);
}

export default App;
