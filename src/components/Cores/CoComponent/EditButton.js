import React, { Component } from 'react';

class EditButton extends Component {
    render() {
        const { className } = this.props
        return (
                <div className={className} data-toggle='modal' data-target='#modelId'>
                    <i className="fa fa-edit"> Sửa</i>
                </div>
        );
    }
}

export default EditButton;

