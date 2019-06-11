import React, { Component } from 'react';
import QuestionCommentItem from './QuestionCommentItem';

class QuestionComment extends Component {
    render() {
        console.log('this.props.answersQuestion.answers', this.props.answersQuestion.answers)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <ol type="none" style={{ padding: 0 }}>
                                <QuestionCommentItem
                                nameCmt={this.props.answersQuestion.answers.creator.name}
                                contentCmt={this.props.answersQuestion.answers.content}
                                numLike={this.props.answersQuestion.answers.votes}
                                numReply={this.props.answersQuestion.answers.hasOwnAnswers}/>
                                <ul type="none">
                                    <QuestionCommentItem
                                    nameCmt={this.props.answersQuestion.answers.creator.name}
                                    contentCmt={this.props.answersQuestion.answers.content}
                                    numLike={this.props.answersQuestion.answers.votes}/>
                                </ul>
                            </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComment;