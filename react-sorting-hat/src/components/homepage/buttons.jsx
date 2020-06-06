import React from "react";
import { Link } from "react-router-dom";

const Buttons = props => {
    return (
        <div className="buttons">
            <Link className="button login float" to="/login">Login</Link>
            <Link className="button signup floatReverse" to="/signup">Sign Up</Link>
        </div>
    )
}

export default Buttons;