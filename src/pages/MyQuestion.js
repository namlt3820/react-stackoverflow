import React, { Component } from 'react';
import './../components/MyQuestion/style.css'
import QuestionList from '../components/MyQuestion/QuestionList';

class MyQuestion extends Component {
    render() {
        return (
            <div>
                <QuestionList/>
            </div>
        );
    }
}

export default MyQuestion;