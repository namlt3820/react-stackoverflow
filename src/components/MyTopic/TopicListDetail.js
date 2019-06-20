import React, { Component } from 'react';
import TopicUnit from './TopicUnit';

class TopicListDetail extends Component {
    
    mappingData = () => this.props.dataTopics.map((value, key) => (
            <TopicUnit
            key={key}
            topicItem={value}
            topicNeedEdit={(topicNeedEdit) => this.props.topicNeedEdit(value)}
            deleteTopic={(idNeedDelete) => this.props.deleteTopic(value._id)}
            />
        )
    )
    
    render() {
        return (
        <div>
            {this.mappingData()}
        </div>
        );
    }
}

export default TopicListDetail;