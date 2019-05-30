import React, { Component } from "react";
import MenuRight from "./MenuRight";
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="icon-main">
                        <NavLink to="/">Q & A</NavLink>
                    </div>
                    <form className="form-search">
                        <div className="search">
                            <input type="email" className="form-control" id="search" placeholder="Search" />
                        </div>
                    </form>
                    <MenuRight />
                </div>
            </div>
        );
    }
}
export default Header;
