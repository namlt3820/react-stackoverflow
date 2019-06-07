import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import CustomButtonSocial from "../../components/Cores/button/CustomButtonSocial";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        alert("hello Tom");
    }
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
                    <CustomButton content="Login" handleClick={this.handleLogin} />
                </div>
            </div>
        );
    }
}

export default Login;
