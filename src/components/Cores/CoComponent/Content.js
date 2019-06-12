import React, { Component } from 'react';

class Content extends Component {
    render() {
        const { content } = this.props
        return (
            <div className="card-body" style={{paddingBottom: '5px'}}>
                <p className="card-text">{content}</p>
            </div>
            
        );
    }
}

export default Content;