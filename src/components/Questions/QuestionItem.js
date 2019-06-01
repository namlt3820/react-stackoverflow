import React, { Component } from "react";
import QuestionSummary from "./QuestionSummary";
import QuestionStats from "./QuestionStats";

class QuestionItem extends Component {
  render() {
    const question = this.props.question
    return (
      <div className="n__question-item">
        <QuestionStats question={question} />
        <QuestionSummary  question={question}  />
      </div>
    );
  }
}

export default QuestionItem;
