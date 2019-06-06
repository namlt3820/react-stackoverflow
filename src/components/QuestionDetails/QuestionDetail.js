import React, { Component } from 'react';
import QuestionOfAction from './QuestionOfAction';
import QuestionComment from './QuestionComment';

class QuestionDetail extends Component {
    render() {
        return (
            <div>
                {/* <QuestionOfAction/> */}
                <QuestionComment/>
            </div>
        );
    }
}

export default QuestionDetail;