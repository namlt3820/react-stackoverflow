import React, { Component } from 'react';
import TopicUnit from './TopicUnit';

class TopicListDetail extends Component {
    
    mappingData = () => this.props.dataTopic.map((value, key) => (
            <TopicUnit
            key={key}
            topicItem={value}
            topicNeedEdit={(topicNeedEdit) => this.props.topicNeedEdit(value)}
            deleteTopic={(idNeedDelete) => this.props.deleteTopic(value.id)}
            />
        )
    )
    
    render() {
        return (
        <div className="col-12 col-lg-9 col-xl-8 mt-2">
            {this.mappingData()}
        </div>
        );
    }
}

export default TopicListDetail;