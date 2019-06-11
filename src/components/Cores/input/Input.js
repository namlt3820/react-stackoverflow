import React, { Component } from "react";

export default class Input extends Component {
    render() {
        const { type, name, value, handleChange } = this.props;
        return <input className="form-control" type={type} name={name} value={value} onChange={handleChange} />;
    }
}
