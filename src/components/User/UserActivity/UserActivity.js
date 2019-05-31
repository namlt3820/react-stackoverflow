import React, { Component } from "react";
import { Tabs } from "antd";
import QuestionList from "../../Questions";
import TopicList from '../../Topics'
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

class UserActivityTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Questions Followed" key="1">
          <QuestionList />
          <Link to="/my-questions">View All</Link>
        </TabPane>
        <TabPane tab="Questions Created" key="2">
          <QuestionList />
          <Link to="/my-questions">View All</Link>
        </TabPane>
        <TabPane tab="Topics Created" key="3">
          <TopicList />
          <Link to="/my-topics">View All</Link>
        </TabPane>
      </Tabs>
    );
  }
}

export default UserActivityTabs;
