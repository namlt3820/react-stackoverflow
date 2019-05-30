import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuRight extends Component {
    render() {
        return (
            <div className="menu-right">
                <i className="far fa-user">Avatar</i>
                <button type="button" className="btn btn-primary">
                    Add Question
                </button>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Setting
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <div>
                            <NavLink to="/change-password">Change PassWord</NavLink>
                        </div>
                    </div>
                </div>
                <div className="btn-authen">
                    <div>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                    <div>
                        <NavLink to="/register">Register</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuRight;
