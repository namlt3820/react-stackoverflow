import React, { Component } from 'react';
import TopicDetailUnit from './TopicDetailUnit';
import EditFormModal from '../CoComponent/EditFormModal';

class TopicDetailList extends Component {
    render() {
        return (
            <div className="col">
                <TopicDetailUnit/>
                <EditFormModal/>
            </div>
        );
    }
}

export default TopicDetailList;