import React, { Component } from "react";

class CutomButtonSocial extends Component {
    render() {
        const { content, match } = this.props;
        return (
            <div className="btn-social">
                <button type="button" className={content === "Facebook" ? `btn btn-primary` : `btn btn-light`}>
                    {match ? `Login with ${content}` : `Sign up with ${content}`}
                </button>
            </div>
        );
    }
}

export default CutomButtonSocial;
