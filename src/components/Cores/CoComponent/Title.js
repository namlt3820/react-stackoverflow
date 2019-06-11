import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { NavLink } from "react-router-dom";

class Title extends Component {
    render() {
        const { navLink, title } = this.props
        return (
            <div className="container-fluid card-header">
                <div className="row">
                    <div className="col-8">
                    <NavLink to={navLink}><h5>{title}</h5></NavLink>
                    </div>
                    <div className="col-3">
                    <div className="btn-group float-right">
                        <EditButton className={"btn btn-warning "+this.props.classNameHidden} datatoggle="modal" datatarget="#modelId"/>
                        <DeleteButton className={"btn btn-danger "+ this.props.classNameHidden}/>
                    </div>
                    </div>
                    <div className="col-1" style={{position: 'relative'}}>
                    <div className="btn" style={{position: 'absolute', right: 0, top: 0}}>
                        <i className="fa fa-heart-o fa-2x" aria-hidden="true" />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;