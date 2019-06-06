import React, { Component } from 'react';

class QuestionOfAction extends Component {
    render() {
        return (
            <div className="container float-center">
            <div className="row">
                <div className="col-12">
                <div className="btn btn-group btn-block">
                    <div className="btn btn-primary">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"> Like</i>
                    </div>
                    <div className="btn btn-warning">
                        <i class="fa fa-comment-o" aria-hidden="true"> Comment</i>
                    </div>
                    <div className="btn btn-info">
                        <i class="fa fa-share" aria-hidden="true"> Share</i>
                    </div>
        </div>
                </div>
            </div>
        </div>
        );
    }
}

export default QuestionOfAction;