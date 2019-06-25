import React, { Component } from 'react';
import './../components/MyTopic/style.css'
import CreateForm from './../components/MyTopic/CreateForm';
import TopicListDetail from './../components/MyTopic/TopicListDetail';
import LayoutMain from '../layout/LayoutMain.js';
import Loading from '../components/Cores/loading.js';
import client from '../services/client.js';
import Topics from '../services/topic.service.js';

const PER_PAGE = 10;

class MyTopic extends Component {
    
    state = {
        data: null,
        loading: true,
        dataTopics: [],
        statusForm: true,
        title: "",
        content: "",
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
          }, 1);
        }).then(response => {
          this.setState({
            loading: false,
            topics: response.data,
            pageCount: response.meta.pageCount
          });
        });
      };

      
    getTopics = () => {
        const topics = new Topics();
          topics
              .getTopics()
              .then(respone => {this.setState({dataTopics: respone.data.data.items});})
    };

    postTopic = (data) => {
        const newTopics = new Topics();
        newTopics
            .postTopic(data)
            .then(respone => console.log('respone', respone))
    }

    patchTopic = (id, param) => {
        const editTopic = new Topics();
        editTopic
            .patchTopic(id, param)
            .then(respone => console.log('respone', respone))
    }
    deleTopic = (id) => {
        const trashTopic = new Topics();
        trashTopic
            .deleTopic(id)
            .then(respone => console.log('respone', respone))
    }


      
    componentDidMount() {
        this.load();
        this.getTopics()
      }

    isChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    newTopic = () => {
        if (this.state.title === "" || this.state.content === "") {
            alert("Bạn Chưa Nhập Đủ Trường");
        } else {
            const topicNew = {};
            topicNew.name = this.state.title;
            topicNew.desc = this.state.content;
            this.postTopic(topicNew)
            this.state.dataTopics.unshift(topicNew);
            this.setState({
                dataTopics: this.state.dataTopics,
                title: "",
                content: ""
            });
        }
    };

    editTopic = () => {
        this.state.dataTopics.forEach((value, key) => {
            if (value._id === this.state.topicNeedEdit._id) {
                value.name = this.state.title;
                value.desc = this.state.content;
                const topicEdited = {}
                topicEdited.name = this.state.title
                topicEdited.desc = this.state.content
                this.patchTopic(this.state.topicNeedEdit._id, topicEdited)
            }
        });
        this.setState({
            contentButton: "Create New Topic",
            title: "",
            content: ""
        });
    };

    Click = () => {
        if (this.state.contentButton === "Create New Topic") {
            this.setState({ handleClick: this.newTopic() });
        } else if (this.state.contentButton === "Save Edit") {
            this.setState({ handleClick: this.editTopic() });
        }
    };

    topicNeedEdit = topicNeedEdit => {
        this.setState({
            topicNeedEdit: topicNeedEdit,
            contentButton: "Save Edit",
            title: topicNeedEdit.name,
            content: topicNeedEdit.desc
        });
    };

    deleteTopic = idNeedDelete => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
        if (verify === true) {
            this.deleTopic(idNeedDelete)
            const dataTemp = this.state.dataTopics.filter(item => item._id !== idNeedDelete);
            this.setState({ dataTopics: dataTemp });
        } else {
            return null;
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
        //   let resultSearch = []
        //   this.state.dataTopics.forEach((value, key) => {
        //     if (value.title.indexOf(this.state.searchValue) !== -1 || value.content.indexOf(this.state.searchValue) !== -1) {
        //         resultSearch.push(value)
        //     }
        // })
        return (
            <LayoutMain header={header}>
                <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-lg-9 col-xl-8 mt-2">
                {loading ? (
                    <Loading />
                    ) : (
                        <TopicListDetail
                            // dataTopic={resultSearch}
                            dataTopics={this.state.dataTopics}
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
