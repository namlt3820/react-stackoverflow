import React, { Component } from 'react';
import LikeReplay from './LikeReplay';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionCommentItem extends Component {
    render() {
        const { nameCmt, contentCmt, numLike, numReply } = this.props
        return (
            <li type="none" className="mt-2">
                <div className="commentBox">
                <div className="btn btn-group w-100" style={{position: 'relative'}}>
                    <div className="avaComment">
                        <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{ borderRadius: '50%' }} alt="true" />
                    </div>
                    <div className="usernameComment"><a href="true">{nameCmt}</a></div>
                    <div className="dropdown" style={{position: 'absolute', right: 20, top: 16}}>
                        <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width: '20px'}}>
                        <i className="fa fa-ellipsis-v" aria-hidden="true" ></i>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div onClick={this.props.objectNeedEdit} className="dropdown-item btn" role="button" data-toggle="modal" data-target="#modelId">Edit</div>
                            <div onClick={this.props.handleClickDelete} className="dropdown-item">Delete</div>
                        </div>
                    </div>
                </div>
                        <hr className="non-margin" />
                        <div className="contentComment">
                            <p>{contentCmt}</p>
                        </div>
                        <TopicDetailFooter
                            createdAt={this.props.answersQuestion.createdAt}
                            votes={this.props.answersQuestion.voteCount}
                            author={this.props.answersQuestion.creator.firstName + ' ' + this.props.answersQuestion.creator.lastName}
                        />
                        <hr className="non-margin" />
                        <LikeReplay 
                        numLike={numLike} 
                        numReply={numReply}
                        handleChange={(event) => this.props.handleChange(event)}
                        handleClickVote={this.props.handleClickVoteAnswer}
                        /> 
                </div>
                </li>
        );
    }
}

export default QuestionCommentItem;