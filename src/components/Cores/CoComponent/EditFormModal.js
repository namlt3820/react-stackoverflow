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
                    <div>
                    <div className="form-group">
                      <label className="text-center">Title Question</label>
                      <input className="form-control" name="themmoi" rows={9} type="text" />
                    </div>
                    <div className="form-group">
                      <label className="text-center">Content Question</label>
                      <textarea className="form-control" name="themmoi" rows={9} defaultValue={""} />
                    </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default EditFormModal;