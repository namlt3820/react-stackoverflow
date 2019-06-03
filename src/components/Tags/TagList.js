import React, { Component } from "react";
import { Row } from "antd";
import Tag from "./Tag";
import TagNav from "./TagNav";
import data from "../../data/data.json";

class TagList extends Component {
  render() {
    return (
      <div>
        <TagNav />
        <Row gutter={16} style={{marginTop: '-1rem'}}>
          {data.tags.map(tag => (
            <Tag tag={tag} id={tag.id} />
          ))}
        </Row>
      </div>
    );
  }
}

export default TagList;
