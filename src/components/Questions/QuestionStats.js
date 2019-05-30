import React, { Component } from "react";

class QuestionStats extends Component {
    render() {
        const { answers, views, votes } = this.props.statsQuestion;
        return (
            <div className="cp">
                <div className="votes">
                    <div className="mini-counts">
                        <span title="0 votes">{votes}</span>
                    </div>
                    <div>votes</div>
                </div>
                <div className="status unanswered">
                    <div className="mini-counts">
                        <span title="0 answers">{answers}</span>
                    </div>
                    <div>answers</div>
                </div>
                <div className="views">
                    <div className="mini-counts">
                        <span title="13 views">{views}</span>
                    </div>
                    <div>views</div>
                </div>
            </div>
        );
    }
}

export default QuestionStats;
