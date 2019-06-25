import React, { Component } from 'react';
import QuestionCommentItem from './QuestionCommentItem';

class QuestionComment extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <ol type="none" style={{ padding: 0 }}>
                                <QuestionCommentItem
                                nameCmt={this.props.answersQuestion.creator.firstName + " " + this.props.answersQuestion.creator.lastName}
                                contentCmt={this.props.answersQuestion.content}
                                numLike={this.props.answersQuestion.voteCount}
                                handleChange={(event) => this.props.handleChange(event)}
                                handleClick={this.props.handleClick}
                               
                                // numReply={this.props.answersQuestion.answerCount}
                                />
                                {/* <ul type="none">
                                    <QuestionCommentItem
                                    nameCmt={this.props.answersQuestion.creator.firstName + " " + this.props.answersQuestion.creator.lastName}
                                    contentCmt={this.props.answersQuestion.content}
                                    numLike={this.props.answersQuestion.votes}/>
                                </ul> */}
                            </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComment;