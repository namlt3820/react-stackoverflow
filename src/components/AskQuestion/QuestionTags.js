import React, { Component } from 'react';

class QuestionTags extends Component {
    render() {
        return (
            <div className="form-group">
            <label className="text-center">Tag Question</label>
            <input className="form-control" name="themmoi" rows={9} type="text" />
            </div>
        );
    }
}

export default QuestionTags;