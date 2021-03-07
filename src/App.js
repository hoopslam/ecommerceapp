import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Header from "./Component/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					})
				})
			}
			this.setState({currentUser: userAuth}) //set currentUser to null
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
