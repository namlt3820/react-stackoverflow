import React, { Component } from 'react';
import Title from '../Cores/CoComponent/Title';
import Content from '../Cores/CoComponent/Content';
import TopicDetailFooter from '../TopicDetail/TopicDetailFooter';

class QuestionUnit extends Component {

    mappingTags = () => this.props.questionItem.tags.map((value, key) => (<a key={key} className="link-tag" href="true">{value.name}</a>))

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
        console.log('this.props.questionItem', this.props.questionItem)
        return (
            <div>
                <div className="card mt-2 mb-2 list-group-item-hover">
                <Title 
                navLink={"/my-question/" + this.styleURL(this.props.questionItem.title)+ "." + this.props.questionItem._id + ".html"}
                title={this.props.questionItem.title}
                objectNeedEdit={(objectNeedEdit) => this.props.objectNeedEdit(objectNeedEdit)}
                delete={(idNeedDelete) => this.props.DeleteQuestion(idNeedDelete)}
                />
                <Content content={this.props.questionItem.content}/>
                <TopicDetailFooter
                createdAt={this.props.questionItem.createdAt}
                comment={this.props.questionItem.answerCount}
                views={this.props.questionItem.answerCount}
                votes={this.props.questionItem.voteCount}
                author={this.props.questionItem.creator.firstName + ' ' + this.props.questionItem.creator.lastName}
                mappingTags={this.mappingTags()}/>
                </div>
            </div>
        );
    }
}

export default QuestionUnit;