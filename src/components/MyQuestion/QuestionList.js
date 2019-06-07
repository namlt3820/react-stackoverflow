import React, { Component } from 'react';
import QuestionUnit from './QuestionUnit';

class QuestionList extends Component {
    render() {
        return (
            <div className="col">
                <QuestionUnit/>
            </div>
        );
    }
}

export default QuestionList;