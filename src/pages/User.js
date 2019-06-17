import React, { Component } from "react";
import { Tabs } from "antd";
import EditableUserProfile from "../components/User/UserProfile";
import UserActivity from "../components/User/UserActivity";
import LayoutMain from "../layout/LayoutMain";
import Loading from "../components/Cores/loading";
import db from "../data/db.json";

const { TabPane } = Tabs;
const user = db.users[0];

class User extends Component {
  state = {
    loading: false
  };
  changeUserProfile = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
  render() {
    const header = {};
    return (
      <LayoutMain header={header}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Tabs defaultActiveKey="userprofile" tabPosition="left">
            <TabPane tab="User Profile" key="userprofile">
              <EditableUserProfile user={user} changeUserProfile={this.changeUserProfile} />
            </TabPane>
          </Tabs>
        )}
      </LayoutMain>
    );
  }
}

export default User;
