import React, { Component } from "react";

export default class Input extends Component {
    render() {
        const { type, name, value, handleChange, placeholder, style } = this.props;

        return (
            <input
                className="form-control"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                style={style}
            />
        );
    }
}
