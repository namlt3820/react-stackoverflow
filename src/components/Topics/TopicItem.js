import React, { Component } from "react";
import TopicSummary from "./TopicSummary";
import TopicStats from "./TopicStats";

class TopicItem extends Component {
  render() {
    const topic = this.props.topic
    return (
      <div className="n__question-item">
        <TopicStats topic={topic} />
        <TopicSummary  topic={topic}  />
      </div>
    );
  }
}

export default TopicItem;
