import React, { Component } from 'react';

class LikeReplay extends Component {
    render() {
        return (
            <div className="btn btn-group non-padding">
                <div name="like" id="thumd-up" className="btn" role="button">
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> Like</i>
                </div>
                <div className="btn" role="button">
                    <i className="fa fa-reply-all" aria-hidden="true"> Reply</i>
                </div>
            </div>
        );
    }
}

export default LikeReplay;