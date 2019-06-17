import React, { Component } from "react";
import moment from 'moment'

class QuestionSummary extends Component {
  render() {
    const { lastEdited, title, creator, tags } = this.props.question;
    return (
      <div className="summary">
        <h3>
          <a href="/" className="n__question-hyperlink">
            {title}
          </a>
        </h3>
        <div className="tags t-python t-matplotlib t-statistics t-seaborn">
          {tags.map(tag => {
            return (
              <a href={tag.id} className="post-tag" key={tag.id}>
                {tag.title}
              </a>
            );
          })}
        </div>
        <div className="started">
          <span className="started-link">Author: </span>
          <a href={creator.id}> {creator.name}</a>
          <span className="started-link">, Last updated: </span>
          <a href="/"> {moment(lastEdited).format("MMM Do YYYY")}</a>
        </div>
      </div>
    );
  }
}

export default QuestionSummary;
