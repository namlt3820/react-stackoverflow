import React, { Component } from 'react';
import './../TopicDetail/style.css'

class UserUnit extends Component {
    render() {
        return (
            <tr className="userItem">
                <td className="userAva">
                    <div className="avaUser">
                        <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{borderRadius: '50%'}} alt="true"/>
                    </div>
                </td>
                <td className="userName">
                    <p>{this.props.firstName + " " + this.props.lastName}</p>
                    <i>{this.props.email}</i>
                </td>
                <td onClick = {this.props.deleteUser} className="iconClose"><i className="fa fa-window-close" aria-hidden="true"></i></td>
            </tr>
        );
    }
}

export default UserUnit;