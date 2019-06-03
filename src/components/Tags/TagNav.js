import React, { Component } from "react";

class TagNav extends Component {
  render() {
    return (
      <div className="mb-4">
        <form className="form-inline d-block clearfix">
          <div className="form-group mr-2 float-left">
            <input
              type="text"
              className="form-control"
              placeholder="Enter tag name"
            />
          </div>
          <button type="submit" className="btn btn-success float-left">
            Search
          </button>
          <div className="btn-group float-sm-right float-left">
            <button type="button" className="btn btn-outline-info">
              Popular
            </button>
            <button type="button" className="btn btn-outline-info">
              Name
            </button>
            <button type="button" className="btn btn-outline-info">
              Followed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TagNav;
