import React, { Component } from "react";
import QuestionList from "../components/Questions/QuestionList";
import Loading from "../components/Cores/loading";
import LayoutMain from "../layout/LayoutMain";
import client from "../services/client";
import Pagination from "../components/Cores/pagination";

const PER_PAGE = 10;

class Home extends Component {
  state = {
    loading: false,
    questions: [],
    offset: 0,
    pageCount: 0,
    searchValue: ""
  };

  loadQuestions = () => {
    const { offset } = this.state;
    return new Promise((resolve, reject) => {
      this.setState({ loading: true });
      setTimeout(() => {
        resolve(client.loadQuestions({ limit: PER_PAGE, offset }));
      }, 1000);
    }).then(response => {
      this.setState({
        loading: false,
        questions: response.data,
        pageCount: response.meta.pageCount
      });
    });
  };

  componentDidMount() {
    this.loadQuestions();
  }

  onPageClick = data => {
    let selected = data.selected;
    let offset = selected * PER_PAGE;
    this.setState({ offset }, () => this.loadQuestions());
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
