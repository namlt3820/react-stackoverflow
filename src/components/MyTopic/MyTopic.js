import React, { Component } from 'react';
import CreateForm from './CreateForm';
import TopicListDetail from './TopicListDetail';

class MyTopic extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <TopicListDetail/>
                        <CreateForm/>
                    </div>
                </div>

        );
    }
}

export default MyTopic;