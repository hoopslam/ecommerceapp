import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch> {/*stops once first path is met*/}
				<Route exact path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
