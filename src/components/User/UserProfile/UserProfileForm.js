import React, { Component } from "react";
import { Row, Col } from "antd";
import Button from "../../Cores/button/CustomButton_v2";
import Input from "../../Cores/input/Input_v2";
import Label from "../../Cores/lable/Lable";
import { isRequired, isNumber } from "../../Cores/input/validation";

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
          handleClick={this.selectFile}
          content={
            this.props.newImgData ? "Select again" : "Select user picture"
          }
        />
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

const UserProfileField = ({
  container,
  label,
  type,
  name,
  value,
  validate,
  handleChange
}) => (
  <div className={`form-group auth-page ${container}`}>
    <Label lable={label} />
    <Input
      validate={validate}
      name={name}
      type={type}
      value={value}
      handleChange={handleChange}
    />
  </div>
);

class UserProfileForm extends Component {
  state = {
    fields: {
      firstName: `${this.props.user.name.first}`,
      lastName: `${this.props.user.name.last}`,
      age: `${this.props.user.age || ''}`,
      email: `${this.props.user.email}`,
      company: `${this.props.user.company}`,
      location: `${this.props.user.location}`,
      aboutMe: `${this.props.user.aboutMe}`,
      picture: `http://lorempixel.com/300/300`,
      newImgData: ""
    },
    fieldErrors: {}
  };
  onUploadPicture = e => {
    let input = e.target,
      formObj = this;
    if (input.files && input.files[0]) {
      formObj.setState({
        fields: { newImgData: URL.createObjectURL(input.files[0]) }
      });
    }
  };
  handleChange = ({ name, value, error }) => {
    const { fields, fieldErrors } = this.state;
    fields[name] = value;
    fieldErrors[name] = error;
    this.setState({ fields, fieldErrors });
  }
  updateUserProfile = () => {
    let {firstName, lastName, age, company, location, aboutMe} = this.state.fields
    age = Number(age)
    this.props.changeUserProfile({firstName, lastName, age, company, location, aboutMe})
  }
  render() {
    const {
      firstName,
      lastName,
      location,
      company,
      age,
      aboutMe,
      picture,
      newImgData
    } = this.state.fields;
    const { closeEditForm, changeUserProfile } = this.props;
    return (
      <div>
        <Row>
          <Col xl={6} xs={24}>
            <img
              src={!newImgData ? picture : newImgData}
              style={{ height: 200, width: 200 }}
              alt="user"
            />
            <ButtonImageUpload
              onChange={this.onUploadPicture}
              newImgData={newImgData}
            />
          </Col>
          <Col xl={18} xs={24}>
            <form action="">
              <div className="form-row">
                <UserProfileField
                  container="col-md-4"
                  label="First Name"
                  type="text"
                  name="firstName"
                  value={firstName}
                  validate={[isRequired("First Name Required")]}
                  handleChange={this.handleChange}
                />
                <UserProfileField
                  container="col-md-4"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  validate={[isRequired("Last Name Required")]}
                  handleChange={this.handleChange}
                />
                <UserProfileField
                  container="col-md-4"
                  label="Age"
                  type="text"
                  name="age"
                  value={age}
                  validate={[isNumber("Age Invalid. Please enter a number.")]}
                  handleChange={this.handleChange}
                />
                <UserProfileField
                  container="col-md-6"
                  label="Company"
                  type="text"
                  name="company"
                  value={company}
                  handleChange={this.handleChange}
                />
                <UserProfileField
                  container="col-md-6"
                  label="Location"
                  type="text"
                  name="location"
                  value={location}
                  handleChange={this.handleChange}
                />
                <UserProfileField
                  container="col-12"
                  label="About Me"
                  type="text"
                  name="aboutMe"
                  value={aboutMe}
                  handleChange={this.handleChange}
                />
              </div>
              <div className="d-flex justify-content-start">
                <Button content="Cancel" handleClick={closeEditForm} />
                <Button
                  content="Confirm"
                  handleClick={this.updateUserProfile}
                  style={{
                    marginLeft: 50,
                    backgroundColor: "rgb(76, 165, 165)",
                    border: "rgb(76, 165, 165)"
                  }}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfileForm;
