import React, { Component } from 'react';
import data from './../../data/data(2).json'
import LikeReplay from './LikeReplay';
import Content from '../CoComponent/Content';
import Title from '../CoComponent/Title';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionInPageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAnswers: data
        }
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 mb-2">
                                <Title
                                navLink="question-detail"
                                classNameHidden="d-none"/>
                                <Content/>
                                <TopicDetailFooter 
                                />
                                {/* <QuestionUnit/> */}
                                <hr className="non-margin" />
                                <LikeReplay />
                                </div>
                                {/* <TitleQuestion />
                                <Content/>
                                <hr className="non-margin" />
                                <LikeReplay /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionInPageDetail;
