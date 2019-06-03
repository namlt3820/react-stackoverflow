import React, { Component } from 'react';
import QuestionUnit from './QuestionUnit';

class QuestionList extends Component {
    render() {
        return (
            <div className="col-12 col-lg-9 col-xl-8">
                <QuestionUnit/>
            </div>
        );
    }
}

export default QuestionList;