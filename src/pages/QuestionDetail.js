import React, { Component } from 'react';
import './../components/QuestionDetails/style.css'
import QuestionComment from './../components/QuestionDetails/QuestionComment';
import QuestionInPageDetail from './../components/QuestionDetails/QuestionInPageDetail';

class QuestionDetail extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <QuestionInPageDetail/>
                <QuestionComment/>
            </div>
        );
    }
}

export default QuestionDetail;