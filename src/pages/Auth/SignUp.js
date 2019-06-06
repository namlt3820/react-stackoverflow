import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import CustomButtonSocial from "../../components/Cores/button/CustomButtonSocial";
import './style.css'

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
