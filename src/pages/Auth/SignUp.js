import React, { Component } from "react";
import CustomButton from "../../components/Cores/button/CustomButton";
import Facebook from "../../components/Social/FaceBook";
import GoogleLogin from "../../components/Social/Google";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input";
import "./style.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            errors: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        let { loading, firstname, lastname, email, password } = this.state;
        const { match } = this.props;
        const formSignUp = [
            { lable: "First Name", type: "text", name: "firstname", value: firstname },
            { lable: "Last Name", type: "text", name: "lastname", value: lastname },
            { lable: "Email", type: "email", name: "email", value: email },
            { lable: "Password", type: "password", name: "password", value: password }
        ];
        return (
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
                            />
                        </div>
                    ))}
                    <CustomButton content="Sign Up" loading={loading} handleClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default SignUp;
