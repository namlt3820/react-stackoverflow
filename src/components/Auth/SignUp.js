import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";

class SignUp extends Component {
    render() {
        return (
            <div className="auth-page">
                <CustomInputAuth lable="Display Name" type="text" />
                <CustomInputAuth lable="Email" type="email" />
                <CustomInputAuth lable="Password" type="password" />
                <CustomButton content="Sign Up" />
            </div>
        );
    }
}

export default SignUp;
