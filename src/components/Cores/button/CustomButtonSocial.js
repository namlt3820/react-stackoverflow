import React, { Component } from "react";
import CustomIcon from "./CustomIcon";

class CustomButtonSocial extends Component {
  render() {
    const { content, match } = this.props;
    return (
      <div className="btn-social">
        <button
          type="button"
          className={content === "Facebook" ? `btn btn-fb` : `btn btn-gg`}
          style={{display: 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}
        >
          <CustomIcon icon={content} />
          {match ? `Login with ${content}` : `Sign up with ${content}`}
        </button>
      </div>
    );
  }
}

export default CustomButtonSocial;
