import React, { Component } from 'react';

class SearchUser extends Component {
    render() {
        return (
            <div className="btn-group w-100">
            <div className="form-group w-100" style={{marginBottom: 0}}>
              <input type="text" className="form-control" name="Search_User" id="true" aria-describedby="helpId" placeholder="Nhập tên user cần add" />
            </div>
            <button className="btn btn-info">Add</button>
          </div>
        );
    }
}

export default SearchUser;