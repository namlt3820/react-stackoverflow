import React, { Component } from 'react';

class QuestionContent extends Component {
    render() {
        return (
            <div className="card-body" style={{paddingBottom: '5px'}}>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, eum quibusdam. Eum quo ut
                suscipit sit vero adipisci repellendus distinctio, asperiores consequatur accusantium
                laudantium voluptate cupiditate aspernatur numquam ducimus minus!</p>
            <div className="btn-group w-100">
                <i className="fa fa-calendar" aria-hidden="true"> 20/5/2019</i>
                <i className="fa fa-comments ml-4" aria-hidden="true"> 25</i>
                <i className="fa fa-eye ml-4" aria-hidden="true"> 30 </i>
                <i className="fa fa-thumbs-up ml-4" aria-hidden="true"> 10 </i>
                <a className="text-right" style={{color: '#212529ba'}} href="true">
                    <i className="fa fa-user text-right" aria-hidden="true" style={{position: 'absolute', right: 0}}> Michael Scofield </i>
                </a>
            </div>
            <div className="btn-group mt-2">
                <a className="link-tag" href="true">reactjs</a>
                <a className="link-tag" href="true">nodejs</a>
                <a className="link-tag" href="true">javascript</a>
                <a className="link-tag" href="true">docker</a>
                <a className="link-tag" href="true">balabolo</a>
                <a className="link-tag" href="true">python</a>
            </div>
            </div>

        );
    }
}

export default QuestionContent;