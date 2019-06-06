import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import './style.css'

class ForgotPassWord extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="forgot-password">
                    <CustomInputAuth lable="Email" type="email" />
                    <CustomButton content="Send recovery email" />
                </div>
            </div>
        );
    }
}

export default ForgotPassWord;
