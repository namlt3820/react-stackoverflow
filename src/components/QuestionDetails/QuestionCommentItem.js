import React, { Component } from 'react';
import LikeReplay from './LikeReplay';

class QuestionCommentItem extends Component {
    render() {
        const { nameCmt, contentCmt, numLike, numReply } = this.props
        return (
            <li type="none" className="mt-2">
                <div className="commentBox">
                <div className="btn btn-group">
                    <div className="avaComment">
                        <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{ borderRadius: '50%' }} alt="true" />
                    </div>
                    <div className="usernameComment"><a href="true">{nameCmt}</a></div>
                        </div>
                        <hr className="non-margin" />
                        <div className="contentComment">
                            <p>{contentCmt}</p>
                        </div>
                        <hr className="non-margin" />
                        <LikeReplay 
                        numLike={numLike} 
                        numReply={numReply}
                        handleChange={(event) => this.props.handleChange(event)}
                        handleClick={this.props.handleClick}
                        /> 
                </div>
                </li>
        );
    }
}

export default QuestionCommentItem;