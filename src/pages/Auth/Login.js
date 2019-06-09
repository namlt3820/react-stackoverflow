import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import Facebook from "../../components/Social/FaceBook";
import GoogleLogin from "../../components/Social/Google";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    render() {
        let { loading } = this.state;
        const { match } = this.props;
        return (
            <div className="auth-page">
                <div className="social">
                    <GoogleLogin content="Google" match={match} />
                    <Facebook />
                </div>
                <div className="login">
                    <CustomInputAuth lable="Email" type="email" />
                    <CustomInputAuth lable="Password" type="password" match={match} />
                    <CustomButton content="Login" handleClick={this.handleLogin} loading={loading} />
                </div>
            </div>
        );
    }
}

export default Login;
