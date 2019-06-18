import React, { Component } from "react";
import CustomButton from "../../components/Cores/button/CustomButton_v2";
import Facebook from "../../components/Social/FaceBook";
import GoogleLogin from "../../components/Social/Google";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import { isRequired, isEmail } from "../../components/Cores/input/validation";
import LayoutAuth from "../../layout/LayoutAuth";
import { signUp } from "../../store/actions/userAction";
import { connect } from "react-redux";
import "./style.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fields: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            fieldErrors: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick() {
        // this.setState({
        //     loading: true
        // });
        const { email, password, firstName, lastName } = this.state.fields;
        const { signUp } = this.props;
        const params = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        signUp(params);
    }
    handleChange({ name, value, error }) {
        const { fields, fieldErrors } = this.state;
        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({ fields, fieldErrors });
    }
    validate = () => {
        const { fields, fieldErrors } = this.state,
            errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
        if (!fields.email || !fields.password || errMessages.length) return true;
        return false;
    };
    render() {
        let {
            loading,
            fields: { firstName, lastName, email, password }
        } = this.state;
        const { match } = this.props;
        const formSignUp = [
            {
                lable: "First Name",
                type: "text",
                name: "firstName",
                value: firstName,
                validate: [isRequired("First Name Required")]
            },
            {
                lable: "Last Name",
                type: "text",
                name: "lastName",
                value: lastName,
                validate: [isRequired("Last Name Required")]
            },
            {
                lable: "Email",
                type: "email",
                name: "email",
                value: email,
                validate: [isRequired("Email Required"), isEmail("Invalid Email")]
            },
            {
                lable: "Password",
                type: "password",
                name: "password",
                value: password,
                validate: [isRequired("Password Required")]
            }
        ];
        const header = {};
        return (
            <LayoutAuth header={header}>
                <div className="auth-page">
                    <div className="social">
                        <GoogleLogin content="Google" match={match} />
                        <Facebook />
                    </div>
                    <div className="signup">
                        {formSignUp.map((item, index) => (
                            <div className="mb-3" key={index}>
                                <Lable lable={item.lable} />
                                <Input
                                    type={item.type}
                                    name={item.name}
                                    value={item.value}
                                    handleChange={this.handleChange}
                                    validate={item.validate}
                                />
                            </div>
                        ))}
                        <CustomButton
                            content="Sign Up"
                            handleClick={this.handleClick}
                            loading={loading}
                            disabled={this.validate()}
                        />
                    </div>
                </div>
            </LayoutAuth>
        );
    }
}

export default connect(
    null,
    { signUp }
)(SignUp);
