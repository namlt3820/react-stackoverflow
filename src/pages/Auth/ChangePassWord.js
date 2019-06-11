import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input";
import CustomButton from "../../components/Cores/button/CustomButton";
import "./style.css";

class ChangePassWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
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
        const { loading, currentPassword, newPassword, confirmPassword } = this.state;
        const formChange = [
            { lable: "Current Password", type: "password", name: "currentPassword", value: currentPassword },
            { lable: "New Password", type: "password", name: "newPassword", value: newPassword },
            { lable: "Confirm Password", type: "password", name: "confirmPassword", value: confirmPassword }
        ];
        return (
            <div className="auth-page">
                <div className="change-password">
                    {formChange.map((item, index) => (
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
                    <CustomButton content="Change Password" handleClick={this.handleClick} loading={loading} />
                </div>
            </div>
        );
    }
}

export default ChangePassWord;
