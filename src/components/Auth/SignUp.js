import React, { Component } from "react";
import CustomInputAuth from "./input/CustomInputAuth";
import CustomButton from "./button/CustomButton";
import CustomButtonSocial from "./button/CustomButtonSocial";

class SignUp extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="social">
                    <CustomButtonSocial content="Google" />
                    <CustomButtonSocial content="Facebook" />
                </div>
                <div className="signup">
                    <CustomInputAuth lable="Display Name" type="text" />
                    <CustomInputAuth lable="Email" type="email" />
                    <CustomInputAuth lable="Password" type="password" />
                    <CustomButton content="Sign Up" />
                </div>
            </div>
        );
    }
}

export default SignUp;
