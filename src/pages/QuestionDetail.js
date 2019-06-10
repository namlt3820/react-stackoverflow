import React, { Component } from 'react';
import './../components/QuestionDetails/style.css'
import QuestionComment from './../components/QuestionDetails/QuestionComment';
import QuestionInPageDetail from './../components/QuestionDetails/QuestionInPageDetail';

class QuestionDetail extends Component {
    render() {
        return (
            <div>
                <QuestionInPageDetail/>
                <QuestionComment/>
            </div>
        );
    }
}

export default QuestionDetail;