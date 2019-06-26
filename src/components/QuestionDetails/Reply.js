import React, { Component } from 'react';

class Reply extends Component {
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Comment Box</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                    <div className="form-group">
                      <textarea onChange={(event) => this.props.handleChange(event)} value={this.props.content} className="form-control" name="answerContent" rows={9} />
                    </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button onClick={this.props.handleClick} type="button" className="btn btn-block btn-outline-primary" data-dismiss="modal">Send</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Reply;



{/* <button data-toggle="modal" data-target="#modelId" type="button" class="ant-btn btn  btn btn-warning undefined ant-btn-primary" ant-click-animating-without-extra-node="false" style="background-color: rgb(250, 173, 20); border-color: rgb(250, 173, 20);"><i class="fa fa-edit"> Sửa</i></button> */}