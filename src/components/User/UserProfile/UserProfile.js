import React, { Component } from "react";
import { Row, Col, Descriptions } from "antd";
import CustomButton from "../../Cores/button/CustomButton_v2";

class UserProfile extends Component {
    render() {
        const {
            name: { first, last },
            location,
            registered,
            age,
            reputation,
            aboutMe,
            picture,
            email,
            company
        } = this.props.user;
        const openEditForm = this.props.openEditForm;
        return (
            <div>
                <Row>
                    <Col xl={6} xs={24}>
                        <img src={picture} style={{ height: 200, width: 200 }} alt="user" />
                    </Col>
                    <Col xl={18} xs={24}>
                        <Descriptions title={`${first + " " + last}`}>
                            <Descriptions.Item label="Age">{age}</Descriptions.Item>
                            <Descriptions.Item label="Location">{location}</Descriptions.Item>
                            <Descriptions.Item label="Email">{email}</Descriptions.Item>
                            <Descriptions.Item label="Reputation">{reputation}</Descriptions.Item>
                            <Descriptions.Item label="Registered">{registered}</Descriptions.Item>
                            <Descriptions.Item label="Company">{company}</Descriptions.Item>
                            <Descriptions.Item label="About Me">{aboutMe}</Descriptions.Item>
                        </Descriptions>
                        <CustomButton content="Change" handleClick={openEditForm} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserProfile;
