import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input";
import CustomButton from "../../components/Cores/button/CustomButton";
import "./style.css";
import LayoutAuth from "../../layout/LayoutAuth";

class ForgotPassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: "",
            errros: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleClick() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    render() {
        const { email, loading } = this.state;
        const header = {}
        return (
            <LayoutAuth header={header}>
            <div className="auth-page">
                <div className="forgot-password">
                    <div className="mb-3">
                        <Lable lable="Email" />
                        <Input type="email" name="email" value={email} handleChange={this.handleChange} />
                    </div>
                    <CustomButton content="Send recovery email" handleClick={this.handleClick} loading={loading} />
                </div>
            </div>
            </LayoutAuth>
        );
    }
}

export default ForgotPassWord;
