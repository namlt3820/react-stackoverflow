import React, { Component } from 'react';

class DeleteButton extends Component {
    render() {
        return (
                <div className="btn btn-danger">
                <i className="fa fa-trash"> Xóa</i>
                </div>
        );
    }
}

export default DeleteButton;