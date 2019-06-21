import React, { Component } from "react";
import { Row } from "antd";
import Tag from "../components/Tags/Tag";
import TagFilter from "../components/Tags/TagFilter";
import LayoutMain from "../layout/LayoutMain";
import Loading from "../components/Cores/loading";
import Pagination from "../components/Cores/pagination";
import client from "../services/client";
import TagsService from "../services/tags.service";

const PER_PAGE = 10;
const tags = new TagsService();

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
    offset: 0,
    pageCount: 0,
    searchValue: "",
    mode: "name",
    forcePage: false
  };
  // loadTags = () => {
  //   const { offset, mode } = this.state;
  //   return new Promise((resolve, reject) => {
  //     this.setState({ loading: true });
  //     setTimeout(() => {
  //       resolve(client.loadTags({ limit: PER_PAGE, offset, mode }));
  //     }, 1000);
  //   }).then(response => {
  //     this.setState({
  //       loading: false,
  //       tags: response.data,
  //       pageCount: response.meta.pageCount
  //     });
  //   });
  // };
  onInputChange = value => {
    this.setState({ searchValue: value });
  };
  onSearchClick = () => {
    const { searchValue } = this.state;
    return new Promise((resolve, reject) => {
      this.setState({ loading: true });
      setTimeout(() => {
        resolve(client.searchTag({ limit: PER_PAGE, title: searchValue }));
      }, 1000);
    }).then(response => {
      this.setState({
        loading: false,
        tags: response.data,
        pageCount: response.meta.pageCount
      });
    });
  };
  onPageClick = data => {
    let selected = data.selected;
    let offset = selected * PER_PAGE;
    this.setState({ offset }, () => this.getTagList());
  };
  getTagList = (sort = "name", offset = 0, limit = PER_PAGE) => {
    this.setState({ loading: true });
    tags
      .getTagList(sort, offset, limit)
      .then(res => {
        this.setState({
          loading: false,
          tags: res.data.data.items,
          pageCount: Math.ceil(res.data.data._totalCount / PER_PAGE)
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  onPageClick = data => {
    const selected = data.selected;
    const offset = selected * PER_PAGE;
    this.setState({ offset, forcePage: false }, () => {
      this.getTagList(this.state.mode, offset, PER_PAGE);
    });
  };
  componentDidMount() {
    this.getTagList();
  }
  onFilterClick = mode => {
    const name = mode === "A-Z" ? "name" : "-name";
    this.setState({ mode: name, forcePage: true }, () => this.getTagList(name));
  };
  render() {
    const { loading, tags, searchValue, pageCount, forcePage } = this.state;
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
            forcePage ? (
              <Pagination
                pageCount={pageCount}
                onPageClick={this.onPageClick}
                forcePage={0}
              />
            ) : (
              <Pagination
                pageCount={pageCount}
                onPageClick={this.onPageClick}
              />
            )
          }
        />
        {loading ? (
          <Loading />
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
