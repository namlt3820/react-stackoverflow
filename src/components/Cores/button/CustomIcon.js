import React, { Component } from "react";
import { ReactComponent as facebook } from "../../../assets/images/facebook.svg";
import { ReactComponent as google } from "../../../assets/images/google.svg";

class CustomIcon extends Component {
    render() {
        let Icon;
        const { icon } = this.props;
        switch (icon) {
            case "Facebook":
                Icon = facebook;
                break;
            case "Google":
            default:
                Icon = google;
                break;
        }
        return <Icon style={{ marginRight: "0.5em" }} />;
    }
}

export default CustomIcon;
