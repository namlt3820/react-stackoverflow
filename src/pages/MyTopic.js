import React, { Component } from 'react';
import data from './../data/data(2).json'
import './../components/MyTopic/style.css'
import CreateForm from './../components/MyTopic/CreateForm';
import TopicListDetail from './../components/MyTopic/TopicListDetail';

class MyTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTopic: data.topics,
            statusForm: true,
            title: '',
            content: '',
            topicNeedEdit: {},
            contentButton: "Create New Topic",
            handleClick:  () => {}
        }
    }

    isChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    newTopic = () => {
        if (this.state.title === '' || this.state.content === '') {
            alert('Bạn Chưa Nhập Đủ Trường')
        } else {
            const topicNew = {}
            topicNew.id = "1"
            topicNew.createdAt = "Wednesday, June 5, 2019 12:14 PM"
            topicNew.title = this.state.title
            topicNew.content = this.state.content
            this.state.dataTopic.unshift(topicNew)
            this.setState({
                dataTopic: this.state.dataTopic,
                title: '',
                content: ''
            });
        }
    }

    topicNeedEdit = (topicNeedEdit) => {
        this.setState({
            topicNeedEdit: topicNeedEdit,
            contentButton: "Save Edit",
            title: topicNeedEdit.title,
            content: topicNeedEdit.content
        });
    }

    editTopic  = () => {
        // const topicEdit = {}
        // topicEdit.title = this.state.title
        // topicEdit.content = this.state.content
        this.state.dataTopic.forEach((value, key) => {
            if (value.id === this.state.topicNeedEdit.id) {
                value.title = this.state.title
                value.content = this.state.content
            }
        })
        this.setState({
            contentButton: "Create New Topic",
            title: '',
            content: ''
        });
    }

    Click = () => {
        if (this.state.contentButton === "Create New Topic") {
            this.setState({handleClick: this.newTopic()});
        } else if (this.state.contentButton === "Save Edit"){
            this.setState({handleClick: this.editTopic()});
        }
    }

    deleteTopic  = (idNeedDelete) => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete)
        if (verify === true) {
            const dataTemp = this.state.dataTopic.filter(item => item.id !== idNeedDelete)
            this.setState({dataTopic: dataTemp});
        } else {
            return null
        }
        
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TopicListDetail
                    dataTopic={this.state.dataTopic}
                    topicNeedEdit={(topicNeedEdit) => this.topicNeedEdit(topicNeedEdit)}
                    deleteTopic={(idNeedDelete) => this.deleteTopic(idNeedDelete)}
                    />
                    <CreateForm
                    title={this.state.title}
                    content={this.state.content}
                    contentButton={this.state.contentButton}
                    isChange={(event) => this.isChange(event)}
                    handleClick={() => this.Click()}
                    />
                </div>
            </div>
        );
    }
}

export default MyTopic;