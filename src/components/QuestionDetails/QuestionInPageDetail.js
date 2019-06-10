import React, { Component } from 'react';
import LikeReplay from './LikeReplay';
import Content from '../CoComponent/Content';
import Title from '../CoComponent/Title';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionInPageDetail extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 mb-2">
                                <Title navLink="question-detail" classNameHidden="d-none"/>
                                <Content/>
                                <TopicDetailFooter/>
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
