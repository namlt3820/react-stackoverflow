import React, { Component } from 'react';
import QuestionList from './QuestionList';
import UserList from './UserList';

class MyQuestion extends Component {
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

export default MyQuestion;