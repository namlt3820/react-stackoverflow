import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";

class ForgotPassWord extends Component {
    render() {
        return (
            <div className="auth-page">
                <CustomInputAuth lable="Email" type="email" />
                <CustomButton content="Send recovery email" />
            </div>
        );
    }
}

export default ForgotPassWord;
