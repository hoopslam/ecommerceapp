import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from './Pages/Shop/ShopPage';

function App() {
	return (
		<div>
			<Switch> {/*stops once first path is met*/}
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
