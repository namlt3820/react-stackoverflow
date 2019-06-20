import React, { Component } from "react";
import moment from "moment";

class QuestionSummary extends Component {
    render() {
        const { title, creator, tags, createdAt } = this.props.question;
        return (
            <div className="summary">
                <h3>
                    <a href="/" className="n__question-hyperlink">
                        {title}
                    </a>
                </h3>
                <div className="tags t-python t-matplotlib t-statistics t-seaborn">
                    {tags.map(tag => {
                        return (
                            <a href={tag._id} className="post-tag" key={tag._id}>
                                {tag.name}
                            </a>
                        );
                    })}
                </div>
                <div className="started">
                    <span className="started-link">Author: </span>
                    <a href={creator._id}> {creator.firstName}</a>
                    <span className="started-link">, Last updated: </span>
                    <a href="/"> {moment(createdAt).format("MMM Do YYYY")}</a>
                </div>
            </div>
        );
    }
}

export default QuestionSummary;
