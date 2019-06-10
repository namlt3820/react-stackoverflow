import React, { Component } from 'react';
import QuestionUnit from './QuestionUnit';
import EditFormModal from '../CoComponent/EditFormModal';

class QuestionList extends Component {
    render() {
        return (
            <div>
                <QuestionUnit/>
                <EditFormModal />
            </div>
        );
    }
}

export default QuestionList;