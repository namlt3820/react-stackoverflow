import React, { Component } from 'react';
import './../components/TopicDetail/style.css'
import QuestionList from './../components/TopicDetail/QuestionList';
import UserList from './../components/TopicDetail/UserList';

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