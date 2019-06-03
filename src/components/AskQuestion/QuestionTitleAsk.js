import React, { Component } from 'react';

class QuestionTitleAsk extends Component {
    render() {
        return (
            <div className="form-group">
            <label className="text-center">Title Question</label>
            <input className="form-control" name="themmoi" rows={9} type="text" />
            </div>
        );
    }
}

export default QuestionTitleAsk;