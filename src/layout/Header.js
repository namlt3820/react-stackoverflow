import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/Cores/button/CustomButton_v2";
import CustomInput from "../components/Cores/input/Input_v2";
import "./style.css";

class Header extends Component {
  handleChange = ({value}) => {
    this.props.onInputChange(value)
  }
  render() {
    const {
      placeholder,
      searchValue,
      onInputChange,
      onSearchClick
    } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <NavLink className="navbar-brand text-info mr-5" to="/">
          Q / A
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavBar"
          aria-controls="mainNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav w-100">
            <div className="mr-auto d-flex align-items-center">
              <form className="form-inline my-2 my-lg-0">
                <div className="search d-flex mr-2">
                  <CustomInput
                    type="search"
                    name="search"
                    placeholder={placeholder}
                    value={searchValue}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="mr-2">
                  <CustomButton content="Search" handleClick={onSearchClick} />
                </div>
              </form>
              <CustomButton
                content={<NavLink to="/ask-question">Ask Question</NavLink>}
              />
            </div>

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
              <div
                className="dropdown-menu"
                aria-labelledby="navbarUserDropdown"
              >
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
