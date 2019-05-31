import React, { Component } from "react";
import TopicSummary from "./TopicSummary";
import TopicStats from "./TopicStats";

class TopicItem extends Component {
    render() {
        const { statsTopic, summaryTopic, tags } = this.props.topicItem;
        return (
            <div className="n__topic-item">
                <TopicStats statsTopic={statsTopic} />
                <TopicSummary summaryTopic={summaryTopic} tags={tags} />
            </div>
        );
    }
}

export default TopicItem;
