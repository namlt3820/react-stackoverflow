import React, { Component } from 'react';

class LikeReplay extends Component {
    render() {
        const { background_color } = this.props
        return (
          
                <div className="btn btn-group non-padding">
                    <div name="like" id="thumd-up" className="btn" role="button">
                        <i onClick={this.props.handleClickVote} className={"fa fa-thumbs-o-up " + background_color} aria-hidden="true">Vote</i>
                    </div>
                    <div onClick={this.props.reply} className="btn" role="button" data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-reply-all" aria-hidden="true"> Reply</i>
                    </div>
                </div>
                
       
        );
    }
}

export default LikeReplay;