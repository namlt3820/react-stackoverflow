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
                      <input onChange={(event) => this.props.isChange(event)} value={this.props.title} className="form-control" name="title" rows={9} type="text" />
                    </div>
                    <div className="form-group">
                      <label className="text-center">Content Question</label>
                      <textarea onChange={(event) => this.props.isChange(event)} value={this.props.content} className="form-control" name="content" rows={9} />
                    </div>
                    </div>
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


{/* <form>
                <div className="form-group">
                  <label>Ảnh</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.blog_background} className="form-control" name="blog_background" id="true" aria-describedby="helpId" placeholder="Nhập link ảnh bài đăng" />
                </div>
                <div className="form-group">
                  <label>Tiêu Đề</label>
                  <input onChange={(event) => this.isChange(event)} type="text" defaultValue={this.props.objDataEdit.blog_title} className="form-control" name="blog_title" id="true" aria-describedby="helpId" placeholder="Nhập tên bài đăng" />
                </div>
                <div className="form-group">
                  <label>Nội Dung Câu Chuyện</label>
                  <textarea onChange={(event) => this.isChange(event)} defaultValue={this.props.objDataEdit.blog_content} className="form-control" name="blog_content" rows={5} placeholder="Nhập nội dung bài đăng"/>
                </div>
                <button onClick={() => this.handleClickEditSave()} type="button" className="btn btn-block btn-info">Lưu Thay Đổi</button>
              </form> */}