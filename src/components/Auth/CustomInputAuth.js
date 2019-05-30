import React, { Component } from "react";

class CustomInputAuth extends Component {
    render() {
        const { lable, type } = this.props;
        return (
            <div className="mb-3">
                <div className="input-group-prepend">
                    <div className="label-auth">{lable}</div>
                </div>

                <input type={type} className="form-control" />
            </div>
        );
    }
}

export default CustomInputAuth;
