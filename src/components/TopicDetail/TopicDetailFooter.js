import React, { Component } from 'react';

class TopicDetailFooter extends Component {

    render() {
        const { createdAt, comment, views, votes, author, mappingTags, fa_comment } = this.props
        return (
            <div className="card-body" style={{paddingBottom: '5px', paddingTop: '5px'}}>
                <div>
                <div className="btn-group w-100">
                <i className="fa fa-calendar" aria-hidden="true"> {createdAt} </i>
                {fa_comment}
                {/* <i className="fa fa-eye ml-4" aria-hidden="true"> {views} </i> */}
                <i className="fa fa-arrow-up ml-4" aria-hidden="true"> {votes} </i>
                <a className="text-right" style={{color: '#212529ba'}} href="true">
                    <i className="fa fa-user text-right" aria-hidden="true" style={{position: 'absolute', right: 0}}> {author} </i>
                </a>
            </div>
            <div className="btn-group mt-2">
                {mappingTags}
            </div>
            </div>
            </div>
            
        );
    }
}

export default TopicDetailFooter;