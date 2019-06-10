import React, { Component } from 'react';
import './../components/MyTopic/style.css'
import CreateForm from './../components/MyTopic/CreateForm';
import TopicListDetail from './../components/MyTopic/TopicListDetail';

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