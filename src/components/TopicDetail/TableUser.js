import React, { Component } from 'react';
import UserUnit from './UserUnit';

class TableUser extends Component {

    mappingData = () => 
        this.props.dataUser.map((user, key) => {
            return this.props.topicParticipants.map((value, key) => {
                if (user.id === value.id) {
                    return <UserUnit 
                            key={key} 
                            firstName={user.name.first} 
                            lastName={user.name.last} 
                            email={user.email}
                            deleteUser={(idNeedDelete) => this.props.deleteUser(value.id)}
                            />
                }
            })
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