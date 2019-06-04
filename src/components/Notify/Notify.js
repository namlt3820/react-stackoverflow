import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Notify extends Component {
    render() {
        return (
            <div className="notify">
                <div className="notify-item">
                    <h3 className="notify-title">
                        <NavLink to="/forgot-password">
                            UWP:Uncheck checkboxes inside ListView on Button Click Event
                        </NavLink>
                    </h3>
                    <span className="notify-time">12 a.m</span>
                </div>
            </div>
        );
    }
}

export default Notify;
