import React, { Component } from 'react';
import TopicDetailUnit from './TopicDetailUnit';
import EditFormModal from '../Cores/CoComponent/EditFormModal';

class TopicDetailList extends Component {
    render() {
        
        return (
            <div className="col">
                <TopicDetailUnit topicDetail={this.props.topicDetail} data={this.props.data}/>
                <EditFormModal/>
            </div>
        );
    }
}

export default TopicDetailList;