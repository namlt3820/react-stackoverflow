import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";

class Login extends Component {
    render() {
        return (
            <div className="auth-page">
                <CustomInputAuth lable="Email" type="email" />
                <CustomInputAuth lable="Password" type="password" />
                <CustomButton content="Login" />
            </div>
        );
    }
}

export default Login;
