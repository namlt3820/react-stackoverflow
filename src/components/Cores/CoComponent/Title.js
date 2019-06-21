import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import CustomButton from '../button/CustomButton_v2';

class Title extends Component {
    render() {
        const { navLink, title } = this.props,
        styleButtonEdit = {
            backgroundColor: "#faad14",
            borderColor: "#faad14"
        },
        styleButtonDelete = {
            color: "#fff",
            backgroundColor: "#c82333",
            borderColor: "#bd2130"
        };
        return (
            <div className="container-fluid card-header">
                <div className="row">
                    <div className="col-8">
                    <NavLink to={navLink}><h5>{title}</h5></NavLink>
                    </div>
                    <div className="col-3">
                    <div className="btn-group float-right">
                        <CustomButton
                        handleClick={() => this.props.objectNeedEdit()} 
                        className={" btn btn-warning " + this.props.classNameHidden} 
                        datatoggle="modal" datatarget="#modelId" 
                        style={styleButtonEdit} 
                        content={<i className="fa fa-edit"> Sửa</i>}/>
                        <CustomButton
                        handleClick={() => this.props.delete()}
                        className={"btn btn-danger "+ this.props.classNameHidden} 
                        style={styleButtonDelete} 
                        content={<i className="fa fa-trash">Xóa</i>}/>
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