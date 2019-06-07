import React, { Component } from 'react';
import QuestionComment from './QuestionComment';
import QuestionInPageDetail from './QuestionInPageDetail';

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