import React, { Component } from "react";
import { Row, Col, Descriptions, Button } from "antd";
class UserProfileForm extends Component {
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
    const { closeEditForm, changeUserProfile } = this.props;
    return (
      <div>
        <Row>
          <Col xl={6} xs={24}>
            <img src={avatar} style={{ height: 200, width: 200 }} />
            <Button style={{ marginTop: 20}}>Change avatar</Button>
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

            <Button type="danger" onClick={closeEditForm}>
              Cancel
            </Button>
            <Button type="default" onClick={changeUserProfile} style={{marginLeft: 100}}>
              Confirm
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfileForm;
