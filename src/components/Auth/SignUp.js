import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";
import CutomButtonSocial from "./CutomButtonSocial";

class SignUp extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="social">
                    <CutomButtonSocial content="Google" />
                    <CutomButtonSocial content="Facebook" />
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
