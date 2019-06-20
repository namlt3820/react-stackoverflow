import React, { Component } from "react";
import QuestionItem from "./QuestionItem";
class QuestionList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="n__question-list">
                {list.map(question => {
                    return <QuestionItem question={question} key={question._id} />;
                })}
            </div>
        );
    }
}

export default QuestionList;
