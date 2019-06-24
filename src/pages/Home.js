import React, { Component } from "react";
import QuestionList from "../components/Questions/QuestionList";
import Loading from "../components/Cores/loading";
import LayoutMain from "../layout/LayoutMain";
import Pagination from "../components/Cores/pagination";
import Questions from "../services/questions.service";
const PER_PAGE = 10;
const questions = new Questions();

class Home extends Component {
    state = {
        loading: false,
        questions: [],
        pageCount: 0,
        searchValue: ""
    };
    componentDidMount() {
        const params = {
            limit: PER_PAGE,
            offset: 0
        };
        this.getQuestionsList(params);
    }
    getQuestionsList(params) {
        this.setState({ loading: true });
        questions
            .getQuestionList(params)
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
            const params = {
                limit: PER_PAGE,
                offset: offset
            };
            this.getQuestionsList(params);
        });
    };

    onSearchClick = () => {
        const { searchValue } = this.state;
        const params = {
            limit: PER_PAGE,
            offset: 0,
            keyword: searchValue
        };
        this.getQuestionsList(params);
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
