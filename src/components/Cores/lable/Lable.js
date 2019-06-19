import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Lable extends Component {
    render() {
        const { lable, match } = this.props;
        return (
            <div className="input-group-prepend" style={{paddingLeft: '0', width: '100%'}}>
                <div className="label-auth">{lable}</div>
                {match && lable === "Password" && (
                    <div>
                        <NavLink to="/forgot-password">Forgot password?</NavLink>
                    </div>
                )}
            </div>
        );
    }
}
