import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from './Pages/Shop/ShopPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Header from './Component/Header/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch> {/*stops once first path is met*/}
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInPage} />
			</Switch>
		</div>
	);
}

export default App;
