import React, { Component } from 'react';

class LikeReplay extends Component {
    render() {
        return (
            <div className="btn btn-group non-padding">
                <a name="like" id="thumd-up" className="btn" href="true" role="button">
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> Like</i>
                </a>
                <div className="btn" role="button">
                    <i className="fa fa-reply-all" aria-hidden="true"> Replay</i>
                </div>
            </div>
        );
    }
}

export default LikeReplay;