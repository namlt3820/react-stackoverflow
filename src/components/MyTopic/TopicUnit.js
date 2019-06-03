import React, { Component } from 'react';
import TopicTitle from './TopicTitle';
import TopicContent from './TopicContent';

class TopicItem extends Component {
    render() {
        return (
                <div className="card mt-2 mb-2 list-group-item-hover">
                    <TopicTitle/>
                    <TopicContent/>
                </div>
        );
    }
}

export default TopicItem;