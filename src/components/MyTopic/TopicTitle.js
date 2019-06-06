import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

class TopicTitle extends Component {
    render() {
        return (
            <div className="container-fluid card-header">
                <div className="row">
                    <div className="col-8">
                    <a href="/my-questions"><h5>The best way to model a one-to-many relationship in hibernate</h5></a>
                    </div>
                    <div className="col-3">
                    <div className="btn-group float-right">
                        <EditButton/>
                        <DeleteButton/>
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

export default TopicTitle;