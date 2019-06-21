import React, { Component } from 'react';

class EditFormModal extends Component {
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Question</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                    <div className="form-group">
                      <label className="text-center">Title Question</label>
                      <input onChange={(event) => this.props.isChange(event)} value={this.props.title} className="form-control" name="title" rows={9} type="text" />
                    </div>
                    <div className="form-group">
                      <label className="text-center">Content Question</label>
                      <textarea onChange={(event) => this.props.isChange(event)} value={this.props.content} className="form-control" name="content" rows={9} />
                    </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button onClick={this.props.onClick} type="button" className="btn btn-block btn-outline-primary" data-dismiss="modal">Lưu Thay Đổi</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default EditFormModal;