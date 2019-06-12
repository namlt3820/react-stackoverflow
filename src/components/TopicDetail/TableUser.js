import React, { Component } from 'react';
import UserUnit from './UserUnit';

class TableUser extends Component {

    mappingData = () => this.props.topicParticipants.participants.map((value, key) => <UserUnit key={key} name={value.name}/>)

    render() {
        return (
            <table className="table">
                <tbody>
                   {this.mappingData()}
                </tbody>
                </table>

        );
    }
}

export default TableUser;