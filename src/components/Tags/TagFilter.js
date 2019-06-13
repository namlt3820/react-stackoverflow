import React, { Component } from "react";
import CustomButton from "../Cores/button/CustomButton_v2";

class TagFilter extends Component {
  onFilterClick = e => {
    this.props.onFilterClick(e.target.textContent);
  };
  render() {
    const styledButton = {
        marginRight: "10px",
        backgroundColor: "#4ca5a5",
        border: "none"
      };
    return (
      <div className="mb-4" style={{ marginRight: "-10px" }}>
        <div className="d-flex row">
          <div className="col" />
          <div className="col">{this.props.paginate}</div>
          <div className="col d-flex justify-content-end">
            {["Popular", "A-Z", "Followed"].map((item, idx) => (
              <CustomButton
                key={idx}
                content={item}
                style={styledButton}
                handleClick={this.onFilterClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TagFilter;
