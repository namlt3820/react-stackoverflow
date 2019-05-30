import React, { Component } from "react";
import { Row, Col, Button } from "antd";

class ButtonImageUpload extends Component {
  fileInput = null;
  setFileInputRef = el => (this.fileInput = el);
  selectFile = () => {
    if (this.fileInput) this.fileInput.click();
  };

  render() {
    return (
      <div>
        <Button
          style={{ marginTop: 20 }}
          onClick={this.selectFile}
          type="default"
        >
          {this.props.newImgData ? "Select again" : "Select user propfile"}
        </Button>
        <input
          name="Choose a file"
          type="file"
          ref={this.setFileInputRef}
          style={{ opacity: 0, position: "absolute", width: 1, hight: 1 }}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
class UserProfileForm extends Component {
  state = {
    newImgData: ""
  };
  onUploadUserProfile = e => {
    let input = e.target,
      formObj = this;
    if (input.files && input.files[0]) {
      formObj.setState({ newImgData: URL.createObjectURL(input.files[0]) });
    }
  };
  render() {
    const { name, location, age, aboutMe, email, avatar } = this.props.user;
    const { closeEditForm, changeUserProfile } = this.props;
    const { newImgData } = this.state;
    return (
      <div>
        <Row>
          <Col xl={6} xs={24}>
            <img
              src={!newImgData ? avatar : newImgData}
              style={{ height: 200, width: 200 }}
              alt="user"
            />
            <ButtonImageUpload
              onChange={this.onUploadUserProfile}
              newImgData={newImgData}
            />
          </Col>
          <Col xl={18} xs={24}>
            <form action="">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder={name}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder={age}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder={location}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder={email}
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="aboutMe">About Me</label>
                  <input
                    type="text"
                    className="form-control"
                    id="aboutMe"
                    placeholder={aboutMe}
                  />
                </div>
              </div>
              <Button type="danger" onClick={closeEditForm}>
                Cancel
              </Button>
              <Button
                type="default"
                onClick={changeUserProfile}
                style={{ marginLeft: 100 }}
              >
                Confirm
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfileForm;
