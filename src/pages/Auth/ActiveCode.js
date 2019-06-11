import React, { Component } from "react";
import Lable from "../../components/Cores/lable/Lable";
import Input from "../../components/Cores/input/Input";
import CustomButton from "../../components/Cores/button/CustomButton";
import "./style.css";

class ActiveCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            code: "",
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleClick() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    render() {
        const { loading, code } = this.state;
        return (
            <div className="auth-page">
                <div className="active">
                    <div className="mb-3">
                        <Lable lable="Active Code" />
                        <Input type="text" name="code" value={code} handleChange={this.handleChange} />
                    </div>
                    <CustomButton content="Active" loading={loading} handleClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default ActiveCode;
