import React, { Component } from 'react';
import EditQuestion from './EditQuestion';
import DeleteQuestion from './DeleteQuestion';

class QuestionTitle extends Component {
    render() {
        return (
            <div className="container-fluid card-header">
            <div className="row">
                <div className="col-8">
                <a href="true"><h5>The best way to model a one-to-many relationship in hibernate</h5></a>
                </div>
                <div className="col-3">
                <div className="btn-group float-right">
                    <EditQuestion/>
                    <DeleteQuestion/>
                </div>
                </div>
                <div className="col-1" style={{position: 'absolute', right: 0, top: 0}}>
                <div className="btn">
                    <i className="fa fa-heart-o fa-2x" aria-hidden="true" />
                </div>
                </div>
            </div>
            </div>

        );
    }
}

export default QuestionTitle;