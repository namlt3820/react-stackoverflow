import React, { Component } from "react";
import FaceBookLogin from "react-facebook-login";
import CustomIcon from "../../components/Cores/button/CustomIcon";
import config from "../../config/configSocial";
import { loginFb } from "../../store/actions/socialAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class FaceBook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };
    loginFb() {
        const { email, name } = this.state;
        const { loginFb } = this.props;
        const params = {
            email: email,
            firstName: name
        };
        loginFb(params);
    }
    handleCallBack = respone => {
        this.setState(
            {
                isLoggedIn: true,
                userID: respone.userID,
                name: respone.name,
                email: respone.email,
                picture: respone.picture.data.url
            },
            () => {
                this.loginFb();
            }
        );
    };
    handleClick = () => {};
    render() {
        let fbContent;
        const { isLoggedIn } = this.state;
        if (isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FaceBookLogin
                    appId={config.facebook}
                    // autoLoad={true}
                    fields="name, email, picture"
                    onClick={this.handleClick}
                    callback={this.handleCallBack}
                    icon={<CustomIcon icon="Facebook" />}
                    cssClass="btn btn-fb"
                />
            );
        }
        return fbContent;
    }
}

export default connect(
    null,
    { loginFb }
)(FaceBook);
