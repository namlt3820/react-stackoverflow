import React, { Component } from 'react';

class TopicDetailFooter extends Component {

    render() {
        const { createdAt, comment, views, votes, author, mappingTags } = this.props
        return (
            <div className="card-body" style={{paddingBottom: '5px', paddingTop: '5px'}}>
                <div>
                <div className="btn-group w-100">
                <i className="fa fa-calendar" aria-hidden="true"> {createdAt} </i>
                <i className="fa fa-comments ml-4" aria-hidden="true"> {comment}</i>
                <i className="fa fa-eye ml-4" aria-hidden="true"> {views} </i>
                <i className="fa fa-arrow-up ml-4" aria-hidden="true"> {votes} </i>
                <a className="text-right" style={{color: '#212529ba'}} href="true">
                    <i className="fa fa-user text-right" aria-hidden="true" style={{position: 'absolute', right: 0}}> {author} </i>
                </a>
            </div>
            <div className="btn-group mt-2">
                {/* {this.props.mappingTags()} */}
                {mappingTags}
                 
                {/*<a className="link-tag" href="true">javascript</a>
                <a className="link-tag" href="true">docker</a>
                <a className="link-tag" href="true">balabolo</a>
                <a className="link-tag" href="true">python</a> */}
            </div>
            </div>
            </div>
            
        );
    }
}

export default TopicDetailFooter;