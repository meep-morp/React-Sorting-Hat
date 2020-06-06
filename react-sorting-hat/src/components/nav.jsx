  
import React from "react";
import logo from "../images/logo.svg";

const Nav = props => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
            <a href="">About</a>
        </nav>
    )
}

export default Nav;