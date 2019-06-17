import React, { Component } from "react";
import "./../components/MyQuestion/style.css";
import QuestionList from "../components/MyQuestion/QuestionList";
import LayoutMain from "../layout/LayoutMain";

class MyQuestion extends Component {
    render() {
        const header = {};
        return (
            <LayoutMain header={header}>
                <QuestionList />
            </LayoutMain>
        );
    }
}

export default MyQuestion;
