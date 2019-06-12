import React, { Component } from "react";
import { Row } from "antd";
import Tag from "../components/Tags/Tag";
import TagNav from "../components/Tags/TagNav";
import loadingGif from "../assets/images/loading.gif";
import client from "../services/client";

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
    tags: []
  };
  componentDidMount() {
    this.setState({loading: true})
    const tags = client.fetchTags()
    setTimeout(() => {this.setState({ tags: tags, loading: false })}, 1000);
  }
  render() {
    const { loading, tags } = this.state;
    return (
      <div>
        <TagNav />
        {loading ? (
          <Loading />
        ) : (
          <div>
            <TagsRow taglist={tags} />
          </div>
        )}
      </div>
    );
  }
}

export default Tags;
