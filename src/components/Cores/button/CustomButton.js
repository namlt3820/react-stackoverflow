import React, { Component } from "react";

class CustomButton extends Component {
    render() {
        const { content, handleClick } = this.props;
        return (
            <div className="btn-auth">
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                    {/* Component Parent passing prop handleClick for Component Child */}
                    {content}
                </button>
            </div>
        );
    }
}

export default CustomButton;
