import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import CustomButton from "../../components/Cores/button/CustomButton_v2";
import "./style.css";
import LayoutAuth from "../../layout/LayoutAuth";
import User from "../../services/user.service";
import { isRequired, isEmail } from "../../components/Cores/input/validation";

const user = new User();
class UpdatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fields: {
                email: "",
                code: "",
                password: ""
            },
            errorEmail: false,
            errorCode: false,
            fieldErrors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange({ name, value, error }) {
        let { fields, fieldErrors, errorEmail, errorCode } = this.state;
        fields[name] = value;
        fieldErrors[name] = error;
        if (errorEmail !== false || errorCode !== false) {
            errorEmail = false;
            errorCode = false;
            this.setState({ fields, fieldErrors, errorEmail, errorCode });
        } else {
            this.setState({ fields, fieldErrors });
        }
    }
    validate = () => {
        const { fields, fieldErrors } = this.state,
            errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
        if (!fields.email || !fields.password || errMessages.length) return true;
        return false;
    };
    handleClick() {
        const { email, password, code } = this.state.fields;
        this.setState({ loading: true });
        const { history } = this.props;
        const params = {
            email: email,
            password: password,
            code: code
        };
        user.updatePassword(params).then(res => {
            this.setState({ loading: false });
            if (res && res.status === 204) {
                history.push("/");
            } else if (res.status === 404) {
                this.setState({ errorCode: res.data.message });
            } else if (res.status === 400) {
                this.setState({ errorEmail: res.data.errors[0].message });
            }
        });
    }
    render() {
        const { email, password, code, loading, errorCode, errorEmail } = this.state;
        const header = {};
        const formUpdate = [
            {
                lable: "Email",
                type: "email",
                name: "email",
                value: email,
                error: errorCode,
                validate: [isRequired("Email Required"), isEmail("Invalid Email")]
            },
            {
                lable: "Password",
                type: "password",
                name: "password",
                value: password,
                validate: [isRequired("Password Required")]
            },
            {
                lable: "Code",
                type: "code",
                name: "code",
                value: code,
                error: errorEmail,
                validate: [isRequired("Code Required")]
            }
        ];
        return (
            <LayoutAuth header={header}>
                <div className="auth-page">
                    <div className="forgot-password">
                        {formUpdate.map((item, index) => (
                            <div className="mb-3" key={index}>
                                <Lable lable={item.lable} />
                                <Input
                                    type={item.type}
                                    name={item.name}
                                    value={item.value}
                                    handleChange={this.handleChange}
                                    apiError={item.error}
                                    validate={item.validate}
                                />
                            </div>
                        ))}
                        <CustomButton content="Update Password" handleClick={this.handleClick} loading={loading} />
                    </div>
                </div>
            </LayoutAuth>
        );
    }
}

export default UpdatePassword;
