import React, { Component } from 'react';

class TitleQuestion extends Component {
    render() {
        return (
            <div className="container-fluid card-header">
                <div className="row">
                    <div className="col-10">
                        <a href="/question-detail">
                        <h5>The best way to model a one-to-many relationship in hibernate</h5>
                        </a>
                    </div>
                <div className="col-2" style={{position: 'relative'}}>
                    <div className="btn" style={{position: 'absolute', right: '0px', top: '0px'}}><i className="fa fa-heart-o fa-2x" aria-hidden="true" />
                        </div>
                        </div>
                        </div>
                        </div>
        );
    }
}

export default TitleQuestion;