import React, { Component } from "react";
import data from "../../data/data.json";
import _ from "lodash";

class TopicSummary extends Component {
  render() {
    const { createdAt, title, tags } = this.props.topic;
    const tagsDetail = _.flatten(
      tags.map(id => data.tags.filter(tag => tag.id === id))
    );
    return (
      <div className="summary">
        <h3>
          <a href="/" className="n__question-hyperlink" style={{ 
  color: "#ff3232"}}>
            {title}
          </a>
        </h3>
        <div className="tags t-python t-matplotlib t-statistics t-seaborn">
          {tagsDetail.map(tag => {
            return (
              <a href="/" className="post-tag" key={tag.id}>
                {tag.name}
              </a>
            );
          })}
        </div>
        <div className="started">
          <span className="started-link">Created at: </span>
          <a href="/"> {createdAt}</a>
        </div>
      </div>
    );
  }
}

export default TopicSummary;
