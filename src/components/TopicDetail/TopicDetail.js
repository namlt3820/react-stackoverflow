import React, { Component } from 'react';
import QuestionList from './QuestionList';
import UserList from './UserList';

class TopicDetail extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <QuestionList/>
                    <UserList/>
                </div>
            </div>
        );
    }
}

export default TopicDetail;