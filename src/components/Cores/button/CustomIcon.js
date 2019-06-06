import React, { Component } from "react";
import { ReactComponent as facebook } from './assets/facebook.svg'
import { ReactComponent as google } from './assets/google.svg'

class CustomIcon extends Component {
  render() {
    let Icon
    switch (this.props.icon) {
      case 'Facebook':
        Icon = facebook
        break
      case 'Gogitogle':
      default:
        Icon = google
        break
    } 
    return <Icon style={{marginRight: "0.5em"}}/>
  }
}

export default CustomIcon