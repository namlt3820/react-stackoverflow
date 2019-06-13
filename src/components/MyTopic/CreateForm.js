import React, { Component } from 'react';
import Input from '../Cores/input/Input';
import CustomButton from '../Cores/button/CustomButton_v2';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
    }

    render() {
        return (
            <div className="col-12 col-lg-3 col-xl-4 list-user mt-2">
                    <form>
            <div className="form-group">
                <label className="text-center">Title Topic</label>
                <Input 
                handleChange={(event) => this.props.isChange(event)}
                value={this.props.title}
                name="title" placeholder="Tiêu Đề Topic"
                />
            </div>
            <div className="form-group">
                <label className="text-center">Content Topic</label>
                <textarea 
                onChange={(event) => this.props.isChange(event)}
                value={this.props.content}
                className="form-control" 
                name="content" rows={9} 
                placeholder="Nội Dung Topic"
                />
            </div>
            <CustomButton 
            handleClick={this.props.handleClick}
            className="btn-block btn-outline-info" 
            content={this.props.contentButton}/>
            </form>
            </div>
        );
    }
}

export default CreateForm;