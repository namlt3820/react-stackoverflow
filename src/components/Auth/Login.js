import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";
import CutomButtonSocial from "./CutomButtonSocial";
class Login extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="auth-page">
                <div className="social">
                    <CutomButtonSocial content="Google" match={match} />
                    <CutomButtonSocial content="Facebook" match={match} />
                </div>
                <div className="login">
                    <CustomInputAuth lable="Email" type="email" />
                    <CustomInputAuth lable="Password" type="password" match={match} />
                    <CustomButton content="Login" />
                </div>
            </div>
        );
    }
}

export default Login;
