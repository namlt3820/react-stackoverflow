import React, { Component } from 'react';

class QuestionContentAsk extends Component {
    render() {
        return (
            <div className="form-group">
            <label className="text-center">Content Question</label>
            <div className=" edit-text w-100">
                <button type="button" className="btn fa-hover"><i className="fa fa-bold" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-italic" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-underline" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-align-left" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-align-center" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-align-right" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-align-justify" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-list" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-list-alt" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-list-ol" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-list-ul" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-subscript" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-superscript" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-font" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-link" aria-hidden="true" /></button>
                <button type="button" className="btn fa-hover"><i className="fa fa-picture-o" aria-hidden="true" /></button>
            </div>
            <textarea  onChange = {(event) => this.props.isChange(event)} value={this.props.content} className="form-control" name="content" rows={9} />
            </div>
        );
    }
}

export default QuestionContentAsk;