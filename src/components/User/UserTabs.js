import React, {Component} from 'react';
import { Tabs } from 'antd';
import EditableUserProfile from './UserProfile'

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
            Content of user activity
          </TabPane>
        </Tabs> 
      </div>
    )
  }
}

export default UserTabs