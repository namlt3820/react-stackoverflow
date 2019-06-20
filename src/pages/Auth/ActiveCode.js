import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input_v2";
import CustomButton from "../../components/Cores/button/CustomButton";
import "./style.css";
import LayoutAuth from "../../layout/LayoutAuth";
import User from "../../services/user.service";

const user = new User();

class ActiveCode extends Component {
    state = {
        loading: {
            active: false,
            resend: false
        },
        code: "",
        errors: {},
        apiError: false
    };
    handleChange = ({ name, value, error }) => {
        this.setState({ [name]: value, apiError: false });
    };
    handleClick = e => {
        const button = e.target.textContent.toLowerCase(),
            self = this,
            { email } = this.props.location.state;
        let params = {};

        switch (button) {
            case "active":
                params = {
                    email,
                    code: this.state.code
                };
                this.setState({
                    loading: {
                        [button]: true
                    }
                });
                user.getActiveCode(params)
                    .then(res => {
                        self.setState({
                            loading: {
                                [button]: false
                            }
                        });
                        return res;
                    })
                    .then(res => {
                        if (res.status === 400) {
                            self.setState({ apiError: "Invalid Active Code" });
                        } else if (res.status === 204) {
                            window.location.href = "/login";
                        }
                    });
                break;

            case "resend":
                params = { email };
                this.setState({
                    loading: {
                        [button]: true
                    }
                });
                user.resendActiveCode(params).then(res => {
                    self.setState({
                        loading: {
                            [button]: false
                        },
                        code: "",
                        apiError: false
                    });
                    return res;
                });
                break;
            default:
                break;
        }
    };

    render() {
        const {
            loading: { active, resend },
            code,
            apiError
        } = this.state;
        const header = {};
        return (
            <LayoutAuth header={header}>
                <div className="auth-page">
                    <div className="active">
                        <div className="mb-3" style={{ width: "300px" }}>
                            <Lable lable="Active Code" />
                            <Input
                                type="text"
                                name="code"
                                value={code}
                                handleChange={this.handleChange}
                                apiError={apiError}
                            />
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-0">
                                    <CustomButton
                                        content="Resend"
                                        loading={resend}
                                        handleClick={this.handleClick}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col pr-0">
                                    <CustomButton
                                        content="Active"
                                        loading={active}
                                        handleClick={this.handleClick}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAuth>
        );
    }
}

export default ActiveCode;
