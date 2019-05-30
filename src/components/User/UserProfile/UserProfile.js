import React, { Component } from "react";
import { Row, Col, Descriptions, Button } from "antd";

class UserProfile extends Component {
  render() {
    const {
      name,
      location,
      joinDate,
      age,
      votes,
      aboutMe,
      avatar,
      email
    } = this.props.user;
    const openEditForm = this.props.openEditForm;
    return (
      <div>
        <Row>
          <Col xl={6} xs={24}>
            <img src={avatar} style={{ height: 200, width: 200 }} alt="user" />
          </Col>
          <Col xl={18} xs={24}>
            <Descriptions title={name}>
              <Descriptions.Item label="Age">{age}</Descriptions.Item>
              <Descriptions.Item label="Location">{location}</Descriptions.Item>
              <Descriptions.Item label="Email">{email}</Descriptions.Item>
              <Descriptions.Item label="Votes">{votes}</Descriptions.Item>
              <Descriptions.Item label="Join Date">
                {joinDate}
              </Descriptions.Item>
            </Descriptions>
            <p style={{ fontWeight: 400 }}>About Me: </p>
            <p>{aboutMe}</p>
            <Button type="default" onClick={openEditForm}>
              Change
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfile;
