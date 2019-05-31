import React, { Component } from "react";
import CustomInputAuth from "./input/CustomInputAuth";
import CustomButton from "./button/CustomButton";

class ChangPassWord extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="change-password">
                    <CustomInputAuth lable="Current Password" type="password" />
                    <CustomInputAuth lable="New Password" type="password" />
                    <CustomInputAuth lable="Confirm Password" type="password" />
                    <CustomButton content="Change Password" />
                </div>
            </div>
        );
    }
}

export default ChangPassWord;
