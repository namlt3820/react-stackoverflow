import React, { Component } from 'react';
import TopicUnit from './TopicUnit';
import EditFormModal from './EditFormModal';

class TopicListDetail extends Component {
    render() {
        return (
        <div className="col-12 col-lg-9 col-xl-8 mt-2">
            <TopicUnit/>
            <EditFormModal/>
        </div>
        );
    }
}

export default TopicListDetail;