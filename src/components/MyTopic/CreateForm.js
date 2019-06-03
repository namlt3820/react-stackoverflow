import React, { Component } from 'react';

class CreateForm extends Component {
    render() {
        return (
                <div className="col-12 col-lg-3 col-xl-4 list-user mt-2">
                    <div className="form-group">
                        <label className="text-center">Title Topic</label>
                        <input className="form-control" name="themmoi" rows={9} type="text" />
                    </div>
                    <div className="form-group">
                        <label className="text-center">Content Topic</label>
                        <textarea className="form-control" name="themmoi" rows={9} defaultValue={""} />
                    </div>
                    <div className="btn btn-block btn-outline-info" style={{cursor: 'pointer'}}>Create New Topic</div>
                    </div>

        );
    }
}

export default CreateForm;