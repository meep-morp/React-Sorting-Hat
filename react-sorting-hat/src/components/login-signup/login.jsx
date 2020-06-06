import React from "react";

const Login = props => {
    const {
        onChangeHandler,
        user,
        setUser,
    } = props

    const onSubmitHandler = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className="form">
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Email"
            />
            <input
                type="password"
                placeholder="Password"
            />
            <button className="button" type="submit">Login</button>
        </form>
    )
}

export default Login;