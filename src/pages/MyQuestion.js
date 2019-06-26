import React, { Component } from "react";
import "./../components/MyQuestion/style.css";
import QuestionList from "../components/MyQuestion/QuestionList";
import LayoutMain from "../layout/LayoutMain";
import Loading from "../components/Cores/loading";
import MyQuestions from "../services/my-questions.service";

const PER_PAGE = 10;
const myQuestions = new MyQuestions();

class MyQuestion extends Component {
    state = {
        loading: false,
        dataQuestions: []
    };

    getQuestions = params => {
        this.setState({ loading: true });
        myQuestions.getQuestions(params).then(respone => {
            this.setState({ loading: false });
            this.setState({ dataQuestions: respone.data.data.items });
        });
    };
    onInputChange = () => {
        alert("hello");
    };
    onSearchClick = () => {
        alert("1");
    };

    componentDidMount() {
        const params = {
            limit: PER_PAGE,
            offset: 0
        };
        this.getQuestions(params);
    }

    render() {
        const header = {
            placeholder: "Search questions...",
            // searchValue: searchValue,
            onInputChange: this.onInputChange,
            onSearchClick: this.onSearchClick
        };
        const { dataQuestions } = this.state;
        return (
            <LayoutMain header={header}>
                <div>{this.state.loading ? <Loading /> : <QuestionList dataQuestions={dataQuestions} />}</div>
            </LayoutMain>
        );
    }
}

export default MyQuestion;
