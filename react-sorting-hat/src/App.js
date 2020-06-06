import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from "./components/homepage/Logo";
import Nav from "./components/nav";
import Login from "./components/login-signup/login";
import Signup from "./components/login-signup/signup";
import Footer from "./components/footer";
import Buttons from "./components/homepage/buttons";
import "./components/styles/App.css";
import "./components/styles/animations.css";

const App = () => {
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

	//RENDER
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
};

export default App;
