import React, { Component } from "react";

class TopicStats extends Component {
    render() {
        const { questions, views, votes } = this.props.topic;
        return (
            <div className="cp">
                <div className="votes">
                    <div className="mini-counts">
                        <span>{votes}</span>
                    </div>
                    <div>votes</div>
                </div>
                <div className="status unanswered">
                    <div className="mini-counts">
                        <span>{questions.length}</span>
                    </div>
                    <div>questions</div>
                </div>
                <div className="views">
                    <div className="mini-counts">
                        <span>{views}</span>
                    </div>
                    <div>views</div>
                </div>
            </div>
        );
    }
}

export default TopicStats;
