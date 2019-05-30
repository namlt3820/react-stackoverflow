import React, { Component } from "react";
import CustomInputAuth from "./CustomInputAuth";
import CustomButton from "./CustomButton";

class ActiveCode extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="active">
                    <CustomInputAuth lable="Active Code" />
                    <CustomButton content="Active" />
                </div>
            </div>
        );
    }
}

export default ActiveCode;
