import React, { Component } from "react";
import { Button } from "antd";
class CustomButton extends Component {
  render() {
    const { content, handleClick, loading, style, className, datatoggle, datatarget, type } = this.props;
    return (
      <div className="btn-auth">
        <Button
          type={type}
          className={"btn " + className}
          onClick={handleClick}
          loading={loading}
          type="primary"
          style={style}
          datatoggle={datatoggle}
          datatarget={datatarget}
        >
          {/* Component Parent passing prop handleClick for Component Child */}
          {content}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
