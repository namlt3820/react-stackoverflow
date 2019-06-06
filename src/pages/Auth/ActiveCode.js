import React, { Component } from "react";
import CustomInputAuth from "../../components/Cores/input/CustomInputAuth";
import CustomButton from "../../components/Cores/button/CustomButton";
import './style.css'

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
