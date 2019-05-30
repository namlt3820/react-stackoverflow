import React, { Component } from "react";
import QuestionItem from "./QuestionItem";

class QuestionList extends Component {
    render() {
        return (
            <div className="question-list">
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
        );
    }
}

export default QuestionList;
