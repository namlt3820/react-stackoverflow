import React, { Component } from "react";
import "./../components/AskQuestion/style.css";
import SelectedTopic from "./../components/AskQuestion/SelectedTopic";
import QuestionTitleAsk from "./../components/AskQuestion/QuestionTitleAsk";
import QuestionContentAsk from "./../components/AskQuestion/QuestionContentAsk";
import QuestionTags from "./../components/AskQuestion/QuestionTags";
import CreateButtonQuestion from "./../components/AskQuestion/CreateButtonQuestion";
import LayoutMain from "../layout/LayoutMain";

class AskQuestion extends Component {
    render() {
        const header = {};
        return (
            <LayoutMain header={header}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-2">
                            <SelectedTopic />
                            <QuestionTitleAsk />
                            <QuestionContentAsk />
                            <QuestionTags />
                        </div>
                    </div>
                    <CreateButtonQuestion />
                </div>
            </LayoutMain>
        );
    }
}

export default AskQuestion;
