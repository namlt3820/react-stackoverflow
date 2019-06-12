import React, { Component } from 'react';
import TopicDetailFooter from './TopicDetailFooter';
import Title from '../Cores/CoComponent/Title';
import Content from '../Cores/CoComponent/Content';

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