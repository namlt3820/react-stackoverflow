import React, { Component } from 'react';

class TopicContent extends Component {
    render() {
        return (
                <div className="card-body" style={{paddingBottom: '5px'}}>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, eum quibusdam. Eum quo ut
                    suscipit sit vero adipisci repellendus distinctio, asperiores consequatur accusantium
                    laudantium voluptate cupiditate aspernatur numquam ducimus minus!</p>
                <div className="btn-group w-100">
                    <i className="fa fa-calendar" aria-hidden="true"> 20/5/2019</i>
                </div>
                </div>
        );
    }
}

export default TopicContent;