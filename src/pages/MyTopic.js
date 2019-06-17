import React, { Component } from 'react';
import data from './../data/data(2).json'
import './../components/MyTopic/style.css'
import CreateForm from './../components/MyTopic/CreateForm';
import TopicListDetail from './../components/MyTopic/TopicListDetail';
import LayoutMain from '../layout/LayoutMain.js';
import Loading from '../components/Cores/loading.js';
import client from '../services/client.js';

const PER_PAGE = 10;

class MyTopic extends Component {
    
    state = {
        loading: true,
        dataTopic: data.topics,
        statusForm: true,
        title: '',
        content: '',
        topicNeedEdit: {},
        contentButton: "Create New Topic",
        handleClick:  () => {},
        searchValue: ''
    }

    load = () => {
        const { offset, mode } = this.state;
        return new Promise((resolve, reject) => {
          this.setState({ loading: true });
          setTimeout(() => {
            resolve(client.loadTags({ limit: PER_PAGE, offset, mode }));
          }, 1000);
        }).then(response => {
          this.setState({
            loading: false,
            topics: response.data,
            pageCount: response.meta.pageCount
          });
        });
      };

      componentDidMount() {
        this.load();
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

    editTopic  = () => {
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

    topicNeedEdit = (topicNeedEdit) => {
        this.setState({
            topicNeedEdit: topicNeedEdit,
            contentButton: "Save Edit",
            title: topicNeedEdit.title,
            content: topicNeedEdit.content
        });
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

    onInputChange = (value) => {
        this.setState({searchValue: value});
    }
    
    render() {
        const { loading } = this.state
        const header = {
            placeholder: "Search topic: title, content...",
            searchValue: this.state.searchValue,
            onInputChange: this.onInputChange,
            // onSearchClick: this.onSearchClick
          };
          let resultSearch = []
          this.state.dataTopic.forEach((value, key) => {
            if (value.title.indexOf(this.state.searchValue) !== -1) {
                resultSearch.push(value)
                console.log('resultSearch', resultSearch)
               
            }
        })
        return (
            <LayoutMain header={header}>
                <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-lg-9 col-xl-8 mt-2">
                {loading ? (
                    <Loading />
                    ) : (
                    
                        <TopicListDetail
                            dataTopic={resultSearch}
                            topicNeedEdit={(topicNeedEdit) => this.topicNeedEdit(topicNeedEdit)}
                            deleteTopic={(idNeedDelete) => this.deleteTopic(idNeedDelete)}
                        />
                   
                    )}
                     </div>
                    <CreateForm
                    title={this.state.title}
                    content={this.state.content}
                    contentButton={this.state.contentButton}
                    isChange={(event) => this.isChange(event)}
                    handleClick={() => this.Click()}
                    />
                </div>
            </div>
            </LayoutMain>
        );
    }
}

export default MyTopic;