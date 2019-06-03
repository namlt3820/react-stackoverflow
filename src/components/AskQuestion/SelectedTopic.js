import React, { Component } from 'react';

class SelectedTopic extends Component {
    render() {
        return (
            <div className="form-group">
            <label className="text-center">Topic</label>
            <input className="form-control" name="themmoi" rows={9} type="text" />
            </div>
        );
    }
}

export default SelectedTopic;