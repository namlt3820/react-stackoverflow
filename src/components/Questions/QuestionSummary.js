import React, { Component } from "react";
import data from "../../data/data.json";
import _ from "lodash";

class QuestionSummary extends Component {
  render() {
    const { lastUpdated, title, author, tags } = this.props.question;
    const tagsDetail = _.flatten(
      tags.map(id => data.tags.filter(tag => tag.id === id))
    );
    const authorName = data.users.filter(user => user.id === author)[0].name;
    return (
      <div className="summary">
        <h3>
          <a href="/" className="n__question-hyperlink">
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
          <span className="started-link">Author: </span>
          <a href="/"> {authorName}</a>
          <span className="started-link">, Last updated: </span>
          <a href="/"> {lastUpdated}</a>
        </div>
      </div>
    );
  }
}

export default QuestionSummary;
