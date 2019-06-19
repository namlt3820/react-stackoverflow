import React, { Component } from 'react';
import data from './../data/data(2).json'
import './../components/TopicDetail/style.css'
import UserList from './../components/TopicDetail/UserList';
import TopicDetailList from '../components/TopicDetail/TopicDetailList';
import LayoutMain from '../layout/LayoutMain.js';
import Loading from '../components/Cores/loading.js';
import client from '../services/client.js';

const PER_PAGE = 10;

class TopicDetail extends Component {

        state = {
            loading: true,
            data: data,
            dataQuestions: data.questions,
            dataTopics: data.topics,
            questionNeedEdit: {},
            title: '',
            content: '',
            userAdd: '',
            topicParticipants: [],
            searchValue: ''
        }
    

    load = () => {
        const { offset, mode } = this.state;
        return new Promise((resolve, reject) => {
          this.setState({ loading: true });
          setTimeout(() => {
            resolve(client.load({ limit: PER_PAGE, offset, mode }));
          }, 1000);
        }).then(response => {
          this.setState({
            loading: false,
            questions: response.data,
            pageCount: response.meta.pageCount
          });
        });
      };

      componentDidMount() {
        this.load();
      }

    componentWillMount(){
        this.state.dataTopics.map((value, key) => {
<<<<<<< HEAD
            if (value.id === this.props.match.params.id){
                this.setState({topicParticipants: value.participants});
            }})
       
=======
            if (value.id === this.props.match.params.id) {
                this.setState({ topicParticipants: value.participants });
            }
        });
>>>>>>> d56384079276c632bcda1cbbbd3fe2c809ed6129
    }

    isChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    questionNeedEdit = questionNeedEdit => {
        this.setState({
            questionNeedEdit: questionNeedEdit,
            title: questionNeedEdit.title,
            content: questionNeedEdit.content
        });
    };

    editQuestion = () => {
        this.state.dataQuestions.forEach((value, key) => {
            if (value.id === this.state.questionNeedEdit.id) {
                value.title = this.state.title;
                value.content = this.state.content;
            }
        });
        this.setState({ dataQuestions: this.state.dataQuestions });
    };

    deleteQuestion = idNeedDelete => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
        if (verify === true) {
            const dataTemp = this.state.dataQuestions.filter(item => item.id !== idNeedDelete);
            this.setState({ dataQuestions: dataTemp });
        } else {
            return null;
        }
    };

<<<<<<< HEAD
    deleteUser  = (idNeedDelete) => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá user " + idNeedDelete)
        if (verify === true) {
            const dataTemp = this.state.topicParticipants.filter(item => item.id !== idNeedDelete)
            this.setState({topicParticipants: dataTemp});
        } else {
            return null; 
        }
    }

    addUser  = (userAdd) => {
        // this.state.data.users.map((value, key) => {
        //     if (value.email === userAdd) {
        //         this.state.topicParticipants.push(value)
        //         this.setState({topicParticipants: this.state.topicParticipants});
        //     } else {
        //         alert("User không tồn tại") 
        //     }
        // })
    }

    onInputChange  = (value) => {
        this.setState({searchValue: value});
    }

    onSearchClick  = () => {
        const resultSearch = []
        this.state.dataQuestions.forEach((value, key) => {
            if (value.title.indexOf(this.state.searchValue) !== -1 || value.content.indexOf(this.state.searchValue) !== -1)  {
                resultSearch.push(value)
            }
        })
        console.log('resultSearch', resultSearch)
        console.log('this.state.searchValue', this.state.searchValue)
        this.setState({
            dataQuestions: resultSearch,
            searchValue: ''
        });
    }
=======
    deleteUser = idNeedDelete => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá user " + idNeedDelete);
        if (verify === true) {
            const dataTemp = this.state.topicParticipants.filter(item => item.id !== idNeedDelete);
            this.setState({ topicParticipants: dataTemp });
        } else {
            return null;
        }
    };

    addUser = userAdd => {
        this.state.data.users.map((value, key) => {
            if (value.email === userAdd) {
                this.state.topicParticipants.push(value);
                this.setState({ topicParticipants: this.state.topicParticipants });
            } else {
                alert("User không tồn tại");
            }
        });
    };
>>>>>>> d56384079276c632bcda1cbbbd3fe2c809ed6129

    mappingData = () => this.state.dataTopics.map((value, key) => {
        if (value.id === this.props.match.params.id) {
            return <div className="row" key={key}>
                    {this.state.loading ? (
                    <Loading />
                    ) : (
                        <TopicDetailList 
                            topicDetail={value}
                            dataQuestions={this.state.dataQuestions}
                            questionNeedEdit={(questionNeedEdit) => this.questionNeedEdit(questionNeedEdit)}
                            title={this.state.title}
                            content={this.state.content}
                            isChange={(event) => this.isChange(event)}
                            editQuestion={() => this.editQuestion()}
                            deleteQuestion={(idNeedDelete) => this.deleteQuestion(idNeedDelete)}/>
                    )}
                <UserList 
                topicParticipants={this.state.topicParticipants}
                dataUser={this.state.data.users}
                deleteUser={(idNeedDelete) => this.deleteUser(idNeedDelete)}
                isChange={(event) => this.isChange(event)}
                addUser={(userAdd) => this.addUser(userAdd)}/>
            </div>
        } else {return null;}
    })

    render() {
        console.log('this.state.topicParticipants', this.state.topicParticipants)
        console.log('this.state.data.users', this.state.data.users)
        const header = {
            placeholder: "Search topic: title, content...",
            searchValue: this.state.searchValue,
            onInputChange: this.onInputChange,
            onSearchClick: this.onSearchClick
          };

        return (
           <LayoutMain header={header}>
                <div className="container-fluid">
                    <div className="row">
                        {this.mappingData()}
                    </div>
                </div>
           </LayoutMain>
        );
    }
}

export default TopicDetail;
