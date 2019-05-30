import React, { Component } from "react";
import { Tabs } from "antd";
import QuestionList from '../../Questions'
const { TabPane } = Tabs;

class UserActivityTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Questions Followed" key="1">
          <QuestionList />
        </TabPane>
        <TabPane tab="Questions Created" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Topics Created" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

export default UserActivityTabs