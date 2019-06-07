import React, { Component } from "react";
import avatar from "../../../assets/images/avatar.jpg";
import UserProfile from "./UserProfile";
import UserProfileForm from "./UserProfileForm";

class EditableUserProfile extends Component {
    state = {
        user: {
            name: "John Smith",
            location: "America",
            joinDate: "12-2016",
            age: "25",
            votes: "2000",
            aboutMe: "I'm happy being a part of this community. I've learned so much from this site.",
            avatar: avatar,
            email: "johnsmith999@gmail.com"
        },
        isEditOpen: false
    };
    openEditForm = () => this.setState({ isEditOpen: true });
    closeEditForm = () => this.setState({ isEditOpen: false });
    changeUserProfile = () => this.setState({ isEditOpen: false });
    render() {
        const { isEditOpen, user } = this.state;
        return (
            <div>
                {!isEditOpen ? (
                    <UserProfile user={user} openEditForm={this.openEditForm} />
                ) : (
                    <UserProfileForm
                        user={user}
                        closeEditForm={this.closeEditForm}
                        changeUserProfile={this.changeUserProfile}
                    />
                )}
            </div>
        );
    }
}

export default EditableUserProfile;
