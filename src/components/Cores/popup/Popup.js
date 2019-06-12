import React, { Component } from "react";
import { Modal } from "antd";
import CustomButton from "../button/CustomButton";

class Popup extends Component {
    state = { visible: false };

    handleClick = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible } = this.state;
        return (
            <div>
                <CustomButton handleClick={this.handleClick} content="Open Modal" />
                <Modal title="Basic Modal" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default Popup;
