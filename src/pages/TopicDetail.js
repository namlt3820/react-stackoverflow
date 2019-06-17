import React, { Component } from 'react';
import data from './../data/data(2).json'
import './../components/TopicDetail/style.css'
import UserList from './../components/TopicDetail/UserList';
import TopicDetailList from '../components/TopicDetail/TopicDetailList';
import LayoutMain from "../layout/LayoutMain";
import Loading from "../components/Cores/loading";

class TopicDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTopics: data
        }
    }

    mappingData = () => this.state.dataTopics.topics.map((value, key) => {
        if (value.id === this.props.match.params.id) {
            return <div className="row" key={key}>
                <TopicDetailList topicDetail={value} data={data}/>
                <UserList topicParticipants={value}/>
            </div>
        } else {return null;}
    })
    
    render() {
        const header = {}
        return (
            <LayoutMain header={header}>
            <div className="container-fluid">
                <div className="row">
                    {this.mappingData()}
                </div>
            </div>
            </LayoutMain>
        );
    }
}

export default TopicDetail;