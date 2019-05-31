import React, { Component } from "react";

class TopicSummary extends Component {
    render() {
        const { dataTime, title, user } = this.props.summaryTopic;
        const { tags } = this.props;
        return (
            <div className="summary">
                <h3>
                    <a href="/" className="n__topic-hyperlink">
                        {title}
                    </a>
                </h3>
                <div className="tags t-python t-matplotlib t-statistics t-seaborn">
                    {tags.map((tag, index) => {
                        return (
                            <a href="/" className="post-tag" title="" rel="tag" key={index}>
                                {tag}
                            </a>
                        );
                    })}
                </div>
                <div className="started">
                    <a href="/" className="started-link">
                        modified <span className="relativetime">{dataTime} </span>
                    </a>
                    <a href="/">{user}</a>
                </div>
            </div>
        );
    }
}

export default TopicSummary;
