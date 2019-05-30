import React, { Component } from "react";
import QuestionItem from "./QuestionItem";
import data from "../../data/data.json";
class QuestionList extends Component {
    render() {
        const listQuestion = data;
        return (
            <div className="question-list">
                {listQuestion.map((item, index) => {
                    return <QuestionItem questionItem={item} key={index} />;
                })}
            </div>
        );
    }
}

export default QuestionList;
