import React, { Component } from 'react';
import './../components/TopicDetail/style.css'
import UserList from './../components/TopicDetail/UserList';
import TopicDetailList from '../components/TopicDetail/TopicDetailList';

class TopicDetail extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TopicDetailList/>
                    <UserList/>
                </div>
            </div>
        );
    }
}

export default TopicDetail;