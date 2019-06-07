import React, {Component} from 'react';
import { Tabs } from 'antd';
import EditableUserProfile from '../components/User/UserProfile'
import UserActivity from '../components/User/UserActivity'
const { TabPane } = Tabs;

class User extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="userprofile" tabPosition="left" >
          <TabPane tab="User Profile" key="userprofile">
            <EditableUserProfile />
          </TabPane>
          <TabPane tab="User Activity" key="useractivity">
            <UserActivity />
          </TabPane>
        </Tabs> 
      </div>
    )
  }
}

export default User