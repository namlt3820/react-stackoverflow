import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import CustomButtonSocial from "../../components/Cores/button/CustomButtonSocial";
class Login extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="auth-page">
                <div className="social">
                    <CustomButtonSocial content="Google" match={match} />
                    <CustomButtonSocial content="Facebook" match={match} />
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
