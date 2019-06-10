import React, { Component } from 'react';
import Title from '../CoComponent/Title';
import Content from '../CoComponent/Content';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionUnit extends Component {
    render() {
        return (
            <div>
                <div className="card mt-2 mb-2 list-group-item-hover">
                <Title navLink="question-detail"/>
                <Content/>
                <TopicDetailFooter/>
                </div>
            </div>
        );
    }
}

export default QuestionUnit;