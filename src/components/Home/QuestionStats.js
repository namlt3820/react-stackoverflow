import React, { Component } from "react";

class QuestionStats extends Component {
    render() {
        return (
            <div className="cp">
                <div className="votes">
                    <div className="mini-counts">
                        <span title="0 votes">0</span>
                    </div>
                    <div>votes</div>
                </div>
                <div className="status unanswered">
                    <div className="mini-counts">
                        <span title="0 answers">0</span>
                    </div>
                    <div>answers</div>
                </div>
                <div className="views">
                    <div className="mini-counts">
                        <span title="13 views">13</span>
                    </div>
                    <div>views</div>
                </div>
            </div>
        );
    }
}

export default QuestionStats;
