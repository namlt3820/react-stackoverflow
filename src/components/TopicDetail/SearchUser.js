import React, { Component } from 'react';
import CustomButton from '../Cores/button/CustomButton_v2';
import Input from '../Cores/input/Input_v2';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: ''
        }
    }
    onInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="btn-group w-100">
            <div className="form-group w-100" style={{marginBottom: 0}}>
                <Input 
                handleChange={this.onInputChange} 
                name="addUser"
                placeholder="Nhập email user"/>
            </div>
            <CustomButton 
            content="Add" 
            className="btn-info h-100"
            handleClick={(userAdd) => this.props.addUser(this.state.addUser)}/>
            </div>
            
        )
    }
}

export default SearchUser;