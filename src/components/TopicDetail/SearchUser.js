import React, { Component } from 'react';
import CustomButton from '../Cores/button/CustomButton_v2';
import Input from '../Cores/input/Input_v2';

class SearchUser extends Component {

    render() {
        return (
            <div className="btn-group w-100">
            <div className="form-group w-100" style={{marginBottom: 0}}>
                <Input 
                handleChange={this.props.onInputChange} 
                name="addUser"
                placeholder="Nhập email user"/>
            </div>
            <CustomButton 
            content="Add" 
            className="btn-info h-100"
            handleClick={this.props.addUser}/>
            </div>
            
        )
    }
}

export default SearchUser;