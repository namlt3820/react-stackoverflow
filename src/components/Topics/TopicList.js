import React, { Component } from "react";
import TopicItem from "./TopicItem";
class TopicList extends Component {
    render() {
        const listTopic = this.props.list;
        return (
            <div className="n__question-list">
                {listTopic.map((topic) => {
                    return <TopicItem topic={topic} key={topic.id} />;
                })}
            </div>
        );
    }
}

export default TopicList;
