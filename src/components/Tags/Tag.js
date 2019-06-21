import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import { Tooltip } from "antd";
import { Col, Card } from "antd";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const random = () => Math.floor(Math.random() * 100) + 1;

const Tag = ({ tag: { name, desc } }) => {
  let questions = random();
  let followers = random();
  return (
    <Col
      md={{ span: 6 }}
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      style={{ marginTop: "1rem" }}
    >
      <Card
        title={name}
        extra={
          <Tooltip title={`${questions} Questions, ${followers} Followers`}>
            <a href="/" style={{ fontSize: "0.9rem" }}>
              {questions} <i className="fa fa-question" />, {followers}{" "}
              <i className="fa fa-user" />
            </a>
          </Tooltip>
        }
      >
        <ResponsiveEllipsis
          text={desc}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Card>
    </Col>
  );
};

export default Tag;
