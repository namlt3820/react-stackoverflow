import React, { Component } from "react";
import QuestionSummary from "./QuestionSummary";
import QuestionStats from "./QuestionStats";

class QuestionItem extends Component {
    render() {
        const { statsQuestion, summaryQuestion, tags } = this.props.questionItem;
        return (
            <div className="n__question-item">
                <QuestionStats statsQuestion={statsQuestion} />
                <QuestionSummary summaryQuestion={summaryQuestion} tags={tags} />
            </div>
        );
    }
}

export default QuestionItem;
