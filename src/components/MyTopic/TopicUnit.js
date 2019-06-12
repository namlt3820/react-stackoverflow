import React, { Component } from 'react';
import Title from '../Cores/CoComponent/Title';
import Content from '../Cores/CoComponent/Content';
import TopicFooter from './TopicFooter';


class TopicItem extends Component {
    render() {
        console.log('this.props.topicItem', this.props.topicItem)
        return (
                <div className="card mt-2 mb-2 list-group-item-hover">
                    <Title navLink="topic-detail" title={this.props.topicItem.title}/>
                    <Content content={this.props.topicItem.content}/>
                    <TopicFooter className="btn-group w-100" createdAt={this.props.topicItem.createdAt}/>
                </div>
        );
    }
}

export default TopicItem;