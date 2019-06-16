import React, { Component } from "react";
import { Button } from "antd";
class CustomButton extends Component {
  render() {
    const { content, handleClick, loading, style, disabled, className, datatoggle, datatarget } = this.props;
    return (
      <div className="btn-auth">
        <Button
          className={"btn " + className}
          onClick={handleClick}
          loading={loading}
          type="primary"
          style={style}
          datatoggle={datatoggle}
          datatarget={datatarget}
          disabled={disabled}
        >
          {/* Component Parent passing prop handleClick for Component Child */}
          {content}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
