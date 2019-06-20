import React, { Component } from "react";
import QuestionList from "../components/Questions/QuestionList";
import Loading from "../components/Cores/loading";
import LayoutMain from "../layout/LayoutMain";
import client from "../services/client";
import Pagination from "../components/Cores/pagination";
import Questions from "../services/questions.service";
const PER_PAGE = 10;
const questions = new Questions();

class Home extends Component {
    state = {
        loading: false,
        questions: [],
        offset: 0,
        pageCount: 0,
        searchValue: ""
    };
    componentDidMount() {
        this.getQuestionsList();
    }
    getQuestionsList(offset, limit) {
        this.setState({ loading: true });
        questions
            .getQuestionList(offset, limit)
            .then(res => {
                this.setState({
                    loading: false,
                    questions: res.data.data.items,
                    pageCount: Math.ceil(res.data.data._totalCount / PER_PAGE)
                });
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    onPageClick = data => {
        const selected = data.selected;
        const offset = selected * PER_PAGE;
        this.setState({ offset }, () => {
            this.getQuestionsList(offset, PER_PAGE);
        });
    };

    onSearchClick = () => {
        const { searchValue } = this.state;
        return new Promise((resolve, reject) => {
            this.setState({ loading: true });
            setTimeout(() => {
                resolve(client.searchQuestion({ limit: PER_PAGE, title: searchValue }));
            }, 1000);
        }).then(response => {
            this.setState({
                loading: false,
                questions: response.data,
                pageCount: response.meta.pageCount
            });
        });
    };

    onInputChange = value => {
        this.setState({ searchValue: value });
    };

    render() {
        const { questions, loading, searchValue, pageCount } = this.state;
        const header = {
            placeholder: "Search questions: eu, ea...",
            searchValue: searchValue,
            onInputChange: this.onInputChange,
            onSearchClick: this.onSearchClick
        };
        return (
            <LayoutMain header={header}>
                <div className="d-flex justify-content-center mb-3">
                    <Pagination pageCount={pageCount} onPageClick={this.onPageClick} />
                </div>
                {loading ? <Loading /> : <QuestionList list={questions} />}
            </LayoutMain>
        );
    }
}

export default Home;
