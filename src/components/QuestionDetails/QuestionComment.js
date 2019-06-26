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
                                answersQuestion={this.props.answersQuestion}
                                nameCmt={this.props.answersQuestion.creator.firstName + " " + this.props.answersQuestion.creator.lastName}
                                contentCmt={this.props.answersQuestion.content}
                                numLike={this.props.answersQuestion.voteCount}
                                handleChange={(event) => this.props.handleChange(event)}
                                handleClickDelete={this.props.handleClickDeleteAnswer}
                                objectNeedEdit={this.props.answerNeedEdit}
                                handleClickVoteAnswer={this.props.handleClickVoteAnswer}
                                />
                            </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComment;