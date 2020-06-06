import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from "./homepage/Logo";
import Nav from "./nav";
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import Footer from "./footer";
import Buttons from "./homepage/buttons";
import "./styles/App.css";
import "./styles/animations.css";

function App() {
	// STATES
	const [login, setLogin] = useState([]);
	const [signup, setSignup] = useState([]);

	// FUNCTIONS
	const onChangeHandler = (event, user, setUser) => {
		const name = event.target.name;
		const value = event.target.value;

		setUser({ ...user, [name]: value });
		console.log(user);
	};

	return (
		<div className="App">
			<Nav />
			<Router>
				<Route path="/" exact>
					<div className="home">
						<Logo />
						<Buttons />
					</div>
				</Route>
				<Route path="/login">
					<Login
						onChangeHandler={onChangeHandler}
						user={login}
						setUser={setLogin}
					/>
				</Route>
				<Route path="/signup">
					<Signup
						onChangeHandler={onChangeHandler}
						user={signup}
						setUser={setSignup}
					/>
				</Route>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
