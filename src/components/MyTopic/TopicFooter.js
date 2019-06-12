import React, { Component } from 'react';

class TopicFooter extends Component {
    render() {
        const { className, createdAt } = this.props
        return (
            <div className="card-body" style={{paddingBottom: '5px', paddingTop: '5px'}}>
                <div className={className}>
                    <i className="fa fa-calendar" aria-hidden="true"> {createdAt} </i>
                </div>
            </div>
        );
    }
}

export default TopicFooter;