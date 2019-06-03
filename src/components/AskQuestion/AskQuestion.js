import React, { Component } from 'react';
import SelectedTopic from './SelectedTopic';
import QuestionTitleAsk from './QuestionTitleAsk';
import QuestionContentAsk from './QuestionContentAsk';
import QuestionTags from './QuestionTags';
import CreateButtonQuestion from './CreateButtonQuestion';

class AskQuestion extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-2">
                        <SelectedTopic/>
                        <QuestionTitleAsk/>
                        <QuestionContentAsk/>
                        <QuestionTags/>
                    </div>
                </div>
                <CreateButtonQuestion/>
            </div>
        );
    }
}

export default AskQuestion;