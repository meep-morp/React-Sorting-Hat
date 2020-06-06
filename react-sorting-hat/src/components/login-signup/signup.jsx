
import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {

    const {
        onChangeHandler,
        user,
        setUser,
    } = props

    return (
        <form className="form">
            <h2>Sign Up</h2>

            <div className="nameSignup">
                <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={event => onChangeHandler(event, user, setUser)}
                    value={user.firstName}
                />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={user.lastName}
                />
            </div>

            <input
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                value={user.email}
            />

            <input
                name="password"
                id="password"
                type="password"
                placeholder="Create Password"
                value={user.password}
            />

            <button className="button" type="submit">Sign Up</button>
        </form>
    )
}

export default Signup;