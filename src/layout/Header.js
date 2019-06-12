import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CustomInput from ".././components/Cores/input/Input";
import CustomButton from ".././components/Cores/button/CustomButton";
// import { Menu, Dropdown, Badge } from "antd";
// import Notify from "../Notify";
// import HeaderNotify from "../Notify/HeaderNotify";

import "./style.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        // const menu = (
        //     <Menu>
        //         <HeaderNotify />
        //         <Menu.Item>
        //             <Notify />
        //         </Menu.Item>
        //         <Menu.Item>
        //             <Notify />
        //         </Menu.Item>
        //         <Menu.Item>
        //             <Notify />
        //         </Menu.Item>
        //     </Menu>
        // );
        const styledInput = {
            marginRight: "10px",
            minWidth: "600px"
        };

        const { search } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <NavLink className="navbar-brand text-info mr-5" to="/">
                    Q / A
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100">
                        <form className="form-inline my-2 my-lg-0 mr-auto">
                            <CustomInput
                                placeholder="Search"
                                style={styledInput}
                                name="search"
                                value={search}
                                handleChange={this.handleChange}
                                type="search"
                            />
                            {/* <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                                <NavLink to="/ask-question">Ask Question</NavLink>
                            </button> */}
                            <CustomButton content="Ask Question" />
                        </form>
                        {/* <li className="nav-item">
                            <Dropdown overlay={menu} placement="topCenter" trigger={["click"]}>
                                <a className="ant-dropdown-link" href="#">
                                    <Badge count={5}>
                                        <span className="head-example" />
                                    </Badge>
                                </a>
                            </Dropdown>
                        </li> */}

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tags">
                                Tags
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                id="navbarNews"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                News
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarNews">
                                <NavLink className="dropdown-item" to="/my-topics">
                                    Questions Update
                                </NavLink>
                                <NavLink className="dropdown-item" to="/my-questions">
                                    Topics Update
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                id="navbarUserDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                User
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                                <NavLink className="dropdown-item" to="/my-topics">
                                    My Topics
                                </NavLink>
                                <NavLink className="dropdown-item" to="/my-questions">
                                    My Questions
                                </NavLink>
                                <NavLink className="dropdown-item" to="/my-profile">
                                    My Profile
                                </NavLink>
                                <NavLink className="dropdown-item" to="/change-password">
                                    Change Password
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;
