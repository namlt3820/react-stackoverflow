import React, { Component } from 'react';
import LikeReplay from './LikeReplay';
import Content from '../Cores/CoComponent/Content';
import Title from '../Cores/CoComponent/Title';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionInPageDetail extends Component {
    
    render() {
        console.log('this.props.questionDetail', this.props.questionDetail)
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card mt-2 mb-2">
                                <Title
                                navLink="true"
                                classNameHidden="d-none"
                                title={this.props.questionDetail.title}/>
                                <Content content={this.props.questionDetail.content}/>
                                <TopicDetailFooter 
                                createdAt={this.props.questionDetail.createdAt}
                                comment={this.props.questionDetail.comment}
                                views={this.props.questionDetail.views}
                                votes={this.props.questionDetail.votes}
                                author={this.props.questionDetail.creator.name}/>
                                <hr className="non-margin" />
                                <LikeReplay />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionInPageDetail;
