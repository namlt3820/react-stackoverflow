import React, { Component } from 'react';
import Title from '../CoComponent/Title';
import Content from '../CoComponent/Content';
import TopicFooter from './TopicFooter';


class TopicItem extends Component {
    render() {
        return (
                <div className="card mt-2 mb-2 list-group-item-hover">
                    <Title navLink="topic-detail"/>
                    <Content/>
                    <TopicFooter className="btn-group w-100"/>
                </div>
        );
    }
}

export default TopicItem;