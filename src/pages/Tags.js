import React, { Component } from "react";
import { Row } from "antd";
import Tag from "../components/Tags/Tag";
import TagNav from "../components/Tags/TagNav";
import data from "../data/data.json";

class Tags extends Component {
    render() {
        return (
            <div>
                <TagNav />
                <Row gutter={16} style={{ marginTop: "-1rem" }}>
                    {data.tags.map(tag => (
                        <Tag tag={tag} key={tag.id} />
                    ))}
                </Row>
            </div>
        );
    }
}

export default Tags;