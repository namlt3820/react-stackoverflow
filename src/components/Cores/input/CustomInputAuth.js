import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class CustomInputAuth extends Component {
    render() {
        const { lable, type, match } = this.props;
        return (
            <div className="mb-3">
                <div className="input-group-prepend">
                    <div className="label-auth">{lable}</div>
                    {match && (
                        <div>
                            <NavLink to="/forgot-password">Forgot password?</NavLink>
                        </div>
                    )}
                </div>
                <input type={type} className="form-control" />
            </div>
        );
    }
}

export default CustomInputAuth;
