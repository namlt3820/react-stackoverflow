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
                dataUser={this.props.dataUser}/>
                <SearchUser
                isChange={(event) => this.props.isChange(event)}
                addUser={(userAdd) => this.props.addUser(userAdd)}/>
            </div>
               
        );
    }
}

export default UserList;