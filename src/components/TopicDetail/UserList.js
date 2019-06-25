import React, { Component } from 'react';
import SearchUser from './SearchUser';
import TableUser from './TableUser';

class UserList extends Component {
    render() {
        return (
            <div>
                <TableUser
                topicParticipants={this.props.topicParticipants}
                deleteUser={(idNeedDelete) => this.props.deleteUser(idNeedDelete)}
                dataUser={this.props.dataUser}
                />
                <SearchUser
                onInputChange={this.props.onInputChange}
                addUser={this.props.addUser}/>
            </div>
               
        );
    }
}

export default UserList;