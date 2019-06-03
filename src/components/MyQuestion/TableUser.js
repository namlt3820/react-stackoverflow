import React, { Component } from 'react';
import UserUnit from './UserUnit';

class TableUser extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                   <UserUnit/>
                </tbody>
                </table>

        );
    }
}

export default TableUser;