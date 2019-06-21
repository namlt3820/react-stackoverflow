import React, { Component } from "react";
import { Tabs } from "antd";
import EditableUserProfile from "../components/User/UserProfile";
import UserActivity from "../components/User/UserActivity";
import LayoutMain from "../layout/LayoutMain";
import Loading from "../components/Cores/loading";
import { connect } from "react-redux";
import moment from "moment";
import userService from '../services/user.service'
import {getCurrentUser} from '../store/actions/userAction'


const { TabPane } = Tabs;
const user = new userService()

class User extends Component {
  state = {
    loading: false,
  };
  changeUserProfile = ({firstName, lastName, age, company, location, aboutMe}) => {
    this.setState({ loading: true });
    user.updateProfile({firstName, lastName, age, company, location, aboutMe}).then(res => {
      if (res.status === 204) {
        this.setState({ loading: false });
        this.props.dispatch(getCurrentUser())
      }
    })
  };
  render() {
    console.log('user')
    const header = {};
    return (
      <LayoutMain header={header}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <Tabs defaultActiveKey="userprofile" tabPosition="left">
            <TabPane tab="User Profile" key="userprofile">
              <EditableUserProfile
                user={this.props.user}
                changeUserProfile={this.changeUserProfile}
              />
            </TabPane>
          </Tabs>
        )}
      </LayoutMain>
    );
  }
}

const mapStateToProps = state => {
  if (state.users.user) {
    const {
      users: {
        user: { data }
      }
    } = state
    return {
      user: {
        name: {
          first: data.firstName || '',
          last: data.lastName || ''
        },
        location: data.location || "",
        company: data.company || "",
        registered: moment(data.createdAt).format("MMM Do YYYY"),
        reputation: data.voteCount,
        aboutMe: data.aboutMe || "",
        email: data.email || '',
        age: data.age || ''
      }
    }
  } else {
    return {
      user: {
        name: {
          first: null,
          last: null
        },
        location: null,
        company: null,
        registered: null,
        reputation: null,
        aboutMe: null,
        email: null,
        age: null
      }
    } 
  }
}

export default connect(mapStateToProps)(User);
