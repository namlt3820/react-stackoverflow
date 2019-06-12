import React, { Component } from "react";
import { Button } from "antd";
class CustomButton extends Component {
    render() {
        const { content, handleClick, loading } = this.props;
        return (
            <div className="btn-auth">
                <Button type="button" className="btn" onClick={handleClick} loading={loading}>
                    {/* Component Parent passing prop handleClick for Component Child */}
                    {content}
                </Button>
            </div>
        );
    }
}

export default CustomButton;
