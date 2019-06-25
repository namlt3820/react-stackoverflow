import React, { Component } from 'react';
import Reply from './Reply';

class LikeReplay extends Component {
    render() {
        const { numLike, numReply } = this.props
        return (
          
                <div className="btn btn-group non-padding">
                    <div name="like" id="thumd-up" className="btn" role="button">
                        <i onClick={this.props.handleClickVote} className="fa fa-thumbs-o-up" aria-hidden="true"> {numLike} Vote</i>
                    </div>
                    <div className="btn" role="button" data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-reply-all" aria-hidden="true"> {numReply} Reply</i>
                    </div>
                    <Reply
                        handleChange={(event) => this.props.handleChange(event)}
                        handleClick={this.props.handleClick}
                    />
                </div>
                
       
        );
    }
}

export default LikeReplay;