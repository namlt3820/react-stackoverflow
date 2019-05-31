import React, { Component } from "react";

class CustomButton extends Component {
    render() {
        const { content } = this.props;
        return (
            <div className="btn-auth">
                <button type="button" className="btn btn-primary">
                    {content}
                </button>
            </div>
        );
    }
}

export default CustomButton;
