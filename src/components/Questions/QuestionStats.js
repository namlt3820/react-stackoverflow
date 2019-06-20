import React, { Component } from "react";

class QuestionStats extends Component {
    render() {
        const { answerCount, voteCount } = this.props.question;
        return (
            <div className="cp">
                <div className="votes">
                    <div className="mini-counts">
                        <span>{voteCount}</span>
                    </div>
                    <div>votes</div>
                </div>
                <div className="status unanswered">
                    <div className="mini-counts">
                        <span>{answerCount}</span>
                    </div>
                    <div>answers</div>
                </div>
                {/* <div className="views">
                    <div className="mini-counts">
                        <span>{views}</span>
                    </div>
                    <div>views</div>
                </div> */}
            </div>
        );
    }
}

export default QuestionStats;
