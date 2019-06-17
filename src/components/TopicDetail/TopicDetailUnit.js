import React, { Component } from 'react';
import TopicDetailFooter from './TopicDetailFooter';
import Title from '../Cores/CoComponent/Title';
import Content from '../Cores/CoComponent/Content';

class TopicDetailUnit extends Component {
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

    mappingData = () => this.props.dataQuestions.map((question, index) => {
        return this.props.topicDetail.questions.map((value, key) => {
            if (question.id === value.id) {
                return <div className="card mt-2 mb-2 list-group-item-hover" key={key}>
                    <Title
                    navLink={"/topic-detail/" + this.styleURL(question.title)+ "." + question.id + ".html"} 
                    title={question.title}
                    objectNeedEdit={(questionNeedEdit) => this.props.questionNeedEdit(question)}
                    delete={(idNeedDelete) => this.props.deleteQuestion(question.id)}/>
                    <Content 
                    content={question.content}/>
                    <TopicDetailFooter
                    createdAt={question.createdAt}
                    comment={question.comment}
                    views={question.views}
                    votes={question.votes}
                    author={question.creator.name}
                    mappingTags={question.tags.map((value, key) => (<a key={key} className="link-tag" href="true">{value.title}</a>))}/>
                </div>
            } else {return null;}
        })
    })

    render() {
        return (
            <div>
                {this.mappingData()}
            </div>
        );
    }
}

export default TopicDetailUnit;