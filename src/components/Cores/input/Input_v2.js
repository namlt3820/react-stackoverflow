import React, { Component } from "react";
export default class Input extends Component {
  state = {
    value: this.props.value,
    error: false
  };
  componentWillReceiveProps(newProps) {
    this.setState({ value: newProps.value });
  }
  onChange = e => {
    const { handleChange, validate, name } = this.props,
      value = e.target.value,
      error = validate ? validate(value) : false;
    this.setState({ value, error });
    handleChange({ name, value, error });
  };
  render() {
    const { type, name, value, placeholder } = this.props;
    return (
      <div>
        <input
          className="form-control"
          type={type}
          name={name}
          value={value}
          onChange={this.onChange}
          placeholder={placeholder}
        />
        <span style={{ color: 'red' }}>{this.state.error}</span>
      </div>
    );
  }
}
