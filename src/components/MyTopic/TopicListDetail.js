import React, { Component } from 'react';
import TopicUnit from './TopicUnit';
import data from './../../data/data(2).json'

class TopicListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTopic: data
        }
    }
    mappingData = () => this.state.dataTopic.topics.map((value, key) => (
            <TopicUnit
            key={key}
            topicItem={value}/>
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