import React, {Component} from 'react';
import { Tabs } from 'antd';
import EditableUserProfile from './UserProfile'
import UserActivityTabs from './UserActivity'
const { TabPane } = Tabs;

class UserTabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="userprofile" tabPosition="left" >
          <TabPane tab="User Profile" key="userprofile">
            <EditableUserProfile />
          </TabPane>
          <TabPane tab="User Activity" key="useractivity">
            <UserActivityTabs />
          </TabPane>
        </Tabs> 
      </div>
    )
  }
}

export default UserTabs