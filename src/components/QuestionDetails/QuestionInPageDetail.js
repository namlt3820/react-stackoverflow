import React, { Component } from 'react';
import TitleQuestion from './TitleQuestion';
import QuestionContent from '../TopicDetail/QuestionContent';
import LikeReplay from './LikeReplay';

class QuestionInPageDetail extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="row">
                <div className="col">
                <div className="card mt-2 mb-2">
                <TitleQuestion/>
                <QuestionContent/>
                <hr className="non-margin"/>
                <LikeReplay/>
                </div>
            </div>
                </div>
            </div>
            </div>
        );
    }
}

export default QuestionInPageDetail;