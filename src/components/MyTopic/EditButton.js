import React, { Component } from 'react';

class EditButton extends Component {
    render() {
        return (
                <div className="btn btn-warning" data-toggle="modal" data-target="#modelId">
                <i className="fa fa-edit"> Sửa</i>
                </div>
        );
    }
}

export default EditButton;