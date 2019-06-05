import React, { Component } from "react";

class CustomButtonSocial extends Component {
    render() {
        const { content, match } = this.props;
        return (
            <div className="btn-social">
                <div>
                    <i className="fab fa-google-play" />
                </div>
                <button type="button" className={content === "Facebook" ? `btn btn-fb` : `btn btn-gg`}>
                    {match ? `Login with ${content}` : `Sign up with ${content}`}
                </button>
            </div>
        );
    }
}

export default CustomButtonSocial;
