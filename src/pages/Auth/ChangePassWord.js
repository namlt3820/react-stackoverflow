import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import CustomButton from "../../components/Cores/button/CustomButton_v2";
import "./style.css";
import LayoutAuth from "../../layout/LayoutAuth";
import User from "../../services/user.service";
import { isRequired } from "../../components/Cores/input/validation";
import { connect } from "react-redux";

const user = new User();

class ChangePassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fields: {
                currentPassword: "",
                newPassword: ""
            },
            apiError: false,
            fieldErrors: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick() {
        const { currentPassword, newPassword } = this.state.fields;
        const { isAuthenticated } = this.props;
        this.setState({ loading: true });
        const { history } = this.props;
        const params = {
            currentPassword: currentPassword,
            newPassword: newPassword
        };
        if (isAuthenticated) {
            user.changePassword(params).then(res => {
                this.setState({ loading: false });
                if (res && res.status === 204) {
                    history.push("/");
                } else {
                    this.setState({ apiError: res.data.errors[0].message });
                }
            });
        }
    }
    handleChange({ name, value, error }) {
        let { fieldErrors, apiError, fields } = this.state
        fieldErrors[name] = error
        fields[name] = value
        if (apiError !== false) {
            apiError = false;
            this.setState({ email: value, fieldErrors, apiError });
        } else {
            this.setState({ email: value, fieldErrors });
        }

    }
    validate = () => {
        const { fields, fieldErrors } = this.state,
            errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
        if (!fields.email || !fields.password || errMessages.length) return true;
        return false;
    };
    render() {
        const { loading, apiError } = this.state;
        const { currentPassword, newPassword } = this.state.fields
        const formChange = [
            {
                lable: "Current Password",
                type: "password",
                name: "currentPassword",
                value: currentPassword,
                error: apiError,
                validate: [isRequired("Password Required")]
            },
            {
                lable: "New Password",
                type: "password",
                name: "newPassword",
                value: newPassword,
                validate: [isRequired("New Password Required")]
            }
        ];
        const header = {};
        return (
            <LayoutAuth header={header}>
                <div className="auth-page">
                    <div className="change-password">
                        {formChange.map((item, index) => (
                            <div className="mb-3" key={index}>
                                <Lable lable={item.lable} />
                                <Input
                                    type={item.type}
                                    name={item.name}
                                    value={item.value}
                                    apiError={item.error}
                                    handleChange={this.handleChange}
                                    validate={item.validate}
                                />
                            </div>
                        ))}
                        <CustomButton content="Change Password" handleClick={this.handleClick} loading={loading} />
                    </div>
                </div>
            </LayoutAuth>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.users.isAuthenticated
});
export default connect(mapStateToProps)(ChangePassWord);
