import React, { Component } from 'react';
import LikeReplay from './LikeReplay';
import Content from '../Cores/CoComponent/Content';
import Title from '../Cores/CoComponent/Title';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionInPageDetail extends Component {
    
    render() {
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
                                fa_comment={<i className="fa fa-comments ml-4" aria-hidden="true"> {this.props.questionDetail.answerCount}</i>}
                                createdAt={this.props.questionDetail.createdAt}
                                // comment={this.props.questionDetail.answerCount}
                                // views={this.props.questionDetail.views}
                                votes={this.props.questionDetail.voteCount}
                                author={this.props.questionDetail.creator.firstName + " " + this.props.questionDetail.creator.lastName}/>
                                <hr className="non-margin" />
                                <LikeReplay 
                                    background_color={this.props.background_color}
                                    handleClick={this.props.handleClick}
                                    handleClickVote={this.props.handleClickVoteQuestion}
                                />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionInPageDetail;
