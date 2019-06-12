import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import { Tooltip } from "antd";
import { Col, Card } from "antd";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const Tag = ({ tag: { title, description, questions, followers } }) => (
    <Col md={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }} style={{ marginTop: "1rem" }}>
        <Card
            title={title}
            extra={
                <Tooltip title={`${questions} Questions, ${followers} Followers`}>
                    <a href="/" style={{ fontSize: "0.9rem" }}>
                        {questions} <i className="fa fa-question" />, {followers} <i className="fa fa-user" />
                    </a>
                </Tooltip>
            }
        >
            <ResponsiveEllipsis text={description} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
        </Card>
    </Col>
);

export default Tag;
