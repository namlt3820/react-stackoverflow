import React, { Component } from 'react';
import Title from '../Cores/CoComponent/Title';
import Content from '../Cores/CoComponent/Content';
import TopicFooter from './TopicFooter';


class TopicItem extends Component {

    styleURL = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        // return
        return str;
    }


    render() {
        return (
                <div className="card mt-2 mb-2 list-group-item-hover">
                    <Title
                    navLink={"/my-topics/" + this.styleURL(this.props.topicItem.title)+ "." + this.props.topicItem.id + ".html"}
                    title={this.props.topicItem.title}
                    topicNeedEdit={() => this.props.topicNeedEdit()}
                    deleteTopic={() => this.props.deleteTopic()}/>
                    <Content
                    content={this.props.topicItem.content}/>
                    <TopicFooter
                    className="btn-group w-100"
                    createdAt={this.props.topicItem.createdAt}/>
                </div>
        );
    }
}

export default TopicItem;