import React, { Component } from "react";
import { Row } from "antd";
import Tag from "../components/Tags/Tag";
import TagFilter from "../components/Tags/TagFilter";
import LayoutMain from "../layout/LayoutMain";
import loadingGif from "../assets/images/loading.gif";
import ReactPaginate from "react-paginate";
import client from "../services/client";

const PER_PAGE = 10;
const Loading = () => (
  <img
    src={loadingGif}
    alt="loading gif"
    style={{ width: "25px", height: "25px" }}
  />
);

const TagsRow = ({ taglist }) => (
  <Row gutter={16} style={{ marginTop: "-1rem" }}>
    {taglist.map(tag => (
      <Tag tag={tag} key={tag.id} />
    ))}
  </Row>
);

class Tags extends Component {
  state = {
    loading: true,
    tags: [],
    mode: "",
    offset: 0,
    pageCount: 0,
    searchValue: ''
  };
  loadPagesFromServer = () => {
    const { offset, mode } = this.state;
    return new Promise((resolve, reject) => {
      this.setState({ loading: true });
      setTimeout(() => {
        resolve(client.loadPagesFromServer({ limit: PER_PAGE, offset, mode }));
      }, 1000);
    }).then(response => {
      this.setState({
        loading: false,
        tags: response.data,
        pageCount: response.meta.pageCount
      });
    });
  };
  onInputChange = (value) => {
    this.setState({searchValue: value})
  }
  onSearchClick = () => {
    const {searchValue} = this.state
    return new Promise((resolve, reject) => {
      this.setState({loading: true})
      setTimeout(() => {
          resolve(client.searchTag({ limit: PER_PAGE, title: searchValue}))
      }, 1000);
    }).then(response => {
      this.setState({
        loading: false,
        tags: response.data,
        pageCount: response.meta.pageCount
      })
    }) 
  }
  onPageClick = data => {
    let selected = data.selected;
    let offset = selected * PER_PAGE;
    this.setState({ offset }, () => this.loadPagesFromServer());
  };
  componentDidMount() {
    this.loadPagesFromServer();
  }
  onFilterClick = mode => {
    this.setState({ mode }, () => this.loadPagesFromServer());
  };
  render() {
    const { loading, tags, searchValue } = this.state;
    const header = {
      placeholder: "Search tags: eu, ea...",
      searchValue: searchValue,
      onInputChange: this.onInputChange,
      onSearchClick: this.onSearchClick
    };
    return (
      <LayoutMain header={header}>
        <TagFilter
          onFilterClick={this.onFilterClick}
          paginate={
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={this.state.pageCount}
              pageLinkClassName={"page-link"}
              previousClassName={"page-link"}
              nextClassName={"page-link"}
              breakClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={this.onPageClick}
              activeClassName={"active"}
            />
          }
        />
        {loading ? (
          <div className="d-flex justify-content-center">
            <Loading />
          </div>
        ) : (
          <div>
            <TagsRow taglist={tags} />
          </div>
        )}
      </LayoutMain>
    );
  }
}

export default Tags;
