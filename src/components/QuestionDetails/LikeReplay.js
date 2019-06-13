import React, { Component } from 'react';

class LikeReplay extends Component {
    render() {
        const { numLike, numReply } = this.props
        return (
            <div className="btn btn-group non-padding">
                <div name="like" id="thumd-up" className="btn" role="button">
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> {numLike} Like</i>
                </div>
                <div className="btn" role="button">
                    <i className="fa fa-reply-all" aria-hidden="true"> {numReply} Reply</i>
                </div>
                {/* <div className="AtCreated" style={{position:"absolute", bottom:"0", right:"0"}}>
                    <i class="fa fa-calendar" aria-hidden="true"> Monday, May 2, 2016 11:13 AM </i>
                </div> */}
            </div>
        );
    }
}

export default LikeReplay;