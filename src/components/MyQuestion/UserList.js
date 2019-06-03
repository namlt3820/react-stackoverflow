import React, { Component } from 'react';
import SearchUser from './SearchUser';
import TableUser from './TableUser';

class UserList extends Component {
    render() {
        return (
            <div className="col-12 col-lg-3 col-xl-4 list-user mt-2">
                <SearchUser/>
                <TableUser/>
            </div>
        );
    }
}

export default UserList;