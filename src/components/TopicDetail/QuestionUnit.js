import React, { Component } from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionContent from './QuestionContent';

class QuestionUnit extends Component {
    render() {
        return (
            <div className="card mt-2 mb-2 list-group-item-hover">
                <QuestionTitle/>
                <QuestionContent/>
            </div>
        );
    }
}

export default QuestionUnit;