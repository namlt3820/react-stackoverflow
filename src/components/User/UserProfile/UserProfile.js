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
      avatar
    } = this.props.user;
    const openEditForm = this.props.openEditForm
    return (
      <div>
        <Row>
          <Col xl={6} xs={24}>
            <img src={avatar} style={{ height: 200, width: 200 }} />
          </Col>
          <Col xl={18} xs={24}>
            <Descriptions title={name}>
              <Descriptions.Item label="Age">{age}</Descriptions.Item>
              <Descriptions.Item label="Location">{location}</Descriptions.Item>
              <Descriptions.Item label="Join Date">
                {joinDate}
              </Descriptions.Item>
              <Descriptions.Item label="Votes">{votes}</Descriptions.Item>
              <Descriptions.Item label="About me">{aboutMe}</Descriptions.Item>
            </Descriptions>
            
            <Button type="default" onClick={openEditForm}>Change</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfile;
