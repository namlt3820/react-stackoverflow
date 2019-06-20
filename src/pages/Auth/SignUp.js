import React, { Component } from "react";
import CustomButton from "../../components/Cores/button/CustomButton_v2";
import Facebook from "../../components/Social/FaceBook";
import GoogleLogin from "../../components/Social/Google";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import {
  isRequired,
  isEmail,
  isLongerThanSix
} from "../../components/Cores/input/validation";
import LayoutAuth from "../../layout/LayoutAuth";
import User from "../../services/user.service";
import { Redirect } from "react-router-dom";
import "./style.css";

const user = new User();

export default class SignUp extends Component {
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
      fieldErrors: {},
      apiError: false,
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    const { email, password, firstName, lastName } = this.state.fields;
    const params = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    const signup = this;
    this.setState({ loading: true });
    user.signUp(params).then(response => {
      if (response.status === 201) signup.setState({ redirect: true });
      if (response.status === 409)
        signup.setState({ apiError: "This email is already existed."});
    });
    this.setState({loading: false })
  }
  handleChange({ name, value, error }) {
    let { fields, fieldErrors, apiError } = this.state;
    fields[name] = value;
    fieldErrors[name] = error;
    if (apiError !== false) {
      apiError = false;
      this.setState({ fields, fieldErrors, apiError });
    } else {
      this.setState({ fields, fieldErrors });
    }
  }
  validate = () => {
    const { fields, fieldErrors } = this.state,
      errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
    if (!fields.email || !fields.password || errMessages.length)  return true;
    return false;
  };
  render() {
    let {
      loading,
      fields: { firstName, lastName, email, password },
      apiError,
      redirect
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
        validate: [isRequired("Email Required"), isEmail("Invalid Email")],
        apiError: apiError
      },
      {
        lable: "Password",
        type: "password",
        name: "password",
        value: password,
        validate: [
          isRequired("Password Required"),
          isLongerThanSix("Password must be longer than 6 characters.")
        ]
      }
    ];
    const header = {};

    var result = redirect ? (
      <Redirect
        to={{
          pathname: "/users/active",
          state: { email: email }
        }}
      />
    ) : (
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
                  apiError={item.apiError}
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
    return result;
  }
}
