import React, { Component } from "react";
import TopicItem from "./TopicItem";
import data from "../../data/data.json";
class TopicList extends Component {
    render() {
        const listTopic = data;
        return (
            <div className="n__topic-list">
                {listTopic.map((item, index) => {
                    return <TopicItem topicItem={item} key={index} />;
                })}
            </div>
        );
    }
}

export default TopicList;
