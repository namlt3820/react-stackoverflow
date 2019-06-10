import React, { Component } from 'react';
import TopicDetailFooter from './TopicDetailFooter';
import Title from '../CoComponent/Title';
import Content from '../CoComponent/Content';

class TopicDetailUnit extends Component {
    render() {
        return (
            <div className="card mt-2 mb-2 list-group-item-hover">
                <Title navLink="question-detail"/>
                <Content/>
                <TopicDetailFooter/>
            </div>
        );
    }
}

export default TopicDetailUnit;