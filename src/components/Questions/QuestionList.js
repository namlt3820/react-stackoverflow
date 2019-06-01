import React, { Component } from "react";
import QuestionItem from "./QuestionItem";
class QuestionList extends Component {
    render() {
        const listQuestion = this.props.list;
        return (
            <div className="n__question-list">
                {listQuestion.map((question) => {
                    return <QuestionItem question={question} key={question.id} />;
                })}
            </div>
        );
    }
}

export default QuestionList;
