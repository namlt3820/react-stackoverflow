import React, { Component } from "react";
import QuestionSummary from "./QuestionSummary";
import QuestionStats from "./QuestionStats";

class QuestionItem extends Component {
    render() {
        return (
            <div className="question-item">
                <QuestionStats />
                <QuestionSummary />
            </div>
        );
    }
}

export default QuestionItem;
