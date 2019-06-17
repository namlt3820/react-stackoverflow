import React, { Component } from "react";
import avatar from "../../../assets/images/avatar.jpg";
import UserProfile from "./UserProfile";
import UserProfileForm from "./UserProfileForm";

class EditableUserProfile extends Component {
  state = { isEditOpen: false };
  openEditForm = () => this.setState({ isEditOpen: true });
  closeEditForm = () => this.setState({ isEditOpen: false });

  render() {
    const { isEditOpen } = this.state;
    return (
      <div>
        {!isEditOpen ? (
          <UserProfile
            user={this.props.user}
            openEditForm={this.openEditForm}
          />
        ) : (
          <UserProfileForm
            user={this.props.user}
            closeEditForm={this.closeEditForm}
            changeUserProfile={this.props.changeUserProfile}
          />
        )}
      </div>
    );
  }
}

export default EditableUserProfile;
