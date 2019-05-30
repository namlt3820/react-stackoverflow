import React, { Component } from "react";

class QuestionSummary extends Component {
    render() {
        return (
            <div className="summary">
                <h3>
                    <a href="/" className="question-hyperlink">
                        Statistical significance on barplot using matplotlib / seaborn?
                    </a>
                </h3>
                <div className="tags t-python t-matplotlib t-statistics t-seaborn">
                    <a href="/" className="post-tag" title="" rel="tag">
                        python
                    </a>{" "}
                    <a href="/" className="post-tag" title="" rel="tag">
                        matplotlib
                    </a>{" "}
                    <a href="/" className="post-tag" title="" rel="tag">
                        statistics
                    </a>{" "}
                    <a href="/" className="post-tag" title="" rel="tag">
                        seaborn
                    </a>
                </div>
                <div className="started">
                    <a href="/" className="started-link">
                        modified{" "}
                        <span title="2019-05-29 16:29:56Z" className="relativetime">
                            17 secs ago
                        </span>
                    </a>
                    <a href="/">Zoe</a>{" "}
                    <span className="reputation-score" title="reputation score 14,999">
                        15k
                    </span>
                </div>
            </div>
        );
    }
}

export default QuestionSummary;
