import React, { Component } from 'react';
import UserUnit from './UserUnit';

class TableUser extends Component {

    mappingData = () => 
        this.props.topicParticipants.map((value, key) => {
            console.log('value', value)
            return <UserUnit 
            key={key} 
            firstName={value.firstName} 
            lastName={value.lastName} 
            email={value.email}
            deleteUser={(idNeedDelete) => this.props.deleteUser(value._id)}
            />
        })
    
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