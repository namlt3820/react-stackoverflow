import React, { Component } from "react";
import CustomButton from "../Cores/button/CustomButton_v2";
import CustomInput from "../Cores/input/input_v2";

class TagNav extends Component {
  state = {
    search: "",
    error: "",
    loading: false
  };
  onInputChange = ({ name, value, error }) => {
    this.setState({ search: value });
  };
  render() {
    const { search, error, loading } = this.state,
    styledButton = {
      marginRight: '10px',
      backgroundColor: '#4ca5a5',
      border: 'none'
    };
    return (
      <div className="mb-4" style={{marginRight: "-10px"}}>
        <form className="form-inline d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="form-group mr-2">
              <CustomInput
                type="text"
                name="search"
                value={search}
                handleChange={this.onInputChange}
                placeholder="Enter tag name"
                validate={() => console.log('ok')}
              />
            </div>
            <CustomButton content="Search" loading={loading} />
          </div>
          <div className="d-flex">
            <CustomButton content="Popular" loading={loading} style={styledButton}/>
            <CustomButton content="A-Z" loading={loading} style={styledButton} />
            <CustomButton content="Followed" loading={loading} style={styledButton} />
          </div>
        </form>
      </div>
    );
  }
}

export default TagNav;
