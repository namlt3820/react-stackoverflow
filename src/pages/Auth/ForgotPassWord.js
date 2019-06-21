import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import CustomButton from "../../components/Cores/button/CustomButton_v2";
import LayoutAuth from "../../layout/LayoutAuth";
import User from "../../services/user.service";
import { isRequired, isEmail } from "../../components/Cores/input/validation";

import "./style.css";

const user = new User();
class ForgotPassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: "",
            errros: {},
            apiError: false,
            fieldErrors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange({ name, value, error }) {
        let { fieldErrors, apiError } = this.state;
        fieldErrors[name] = error;
        if (apiError !== false) {
            apiError = false;
            this.setState({ email: value, fieldErrors, apiError });
        } else {
            this.setState({ email: value, fieldErrors });
        }
    }
    handleClick() {
        const { email } = this.state;
        const { history } = this.props;
        this.setState({ loading: true });
        user.forgotPassword({ email }).then(res => {
            this.setState({ loading: false });
            if (res && res.status === 204) {
                history.push("/update-password");
            } else {
                this.setState({ apiError: res.data.message });
            }
        });
    }
    validate = () => {
        const { fields, fieldErrors } = this.state,
            errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
        if (!fields.email || !fields.password || errMessages.length) return true;
        return false;
    };
    render() {
        const { email, loading, apiError } = this.state;
        const header = {};
        return (
            <LayoutAuth header={header}>
                <div className="auth-page">
                    <div className="forgot-password">
                        <div className="mb-3">
                            <Lable lable="Email" />
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                apiError={apiError}
                                handleChange={this.handleChange}
                                validate={[isRequired("Email Required"), isEmail("Invalid Email")]}
                            />
                        </div>
                        <CustomButton content="Send recovery email" handleClick={this.handleClick} loading={loading} />
                    </div>
                </div>
            </LayoutAuth>
        );
    }
}

export default ForgotPassWord;
