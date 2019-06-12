import React, { Component } from 'react';

class DeleteButton extends Component {
    render() {
        const { className } = this.props
        return (
                <div className={className}>
                    <i className="fa fa-trash">Xóa</i>
                </div>
        );
    }
}

export default DeleteButton;