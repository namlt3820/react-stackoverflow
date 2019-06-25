import React, { Component } from 'react';
import './../components/TopicDetail/style.css'
import UserList from './../components/TopicDetail/UserList';
import TopicDetailList from '../components/TopicDetail/TopicDetailList';
import LayoutMain from '../layout/LayoutMain.js';
import Loading from '../components/Cores/loading.js';
import client from '../services/client.js';
import TopicsDetails from '../services/topic-detail.service.js';
import Topics from '../services/topic.service.js';
import Questions from '../services/questions.service';


const PER_PAGE = 10;

class TopicDetail extends Component {

        state = {
            loading: true,
            dataQuestions: [],
            dataTopics: [],
            questionNeedEdit: {},
            title: '',
            content: '',
            userAdd: '',
            topicParticipants: [],
            searchValue: '',
            addUser: '',
            listUser: []
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

    getTopicsDetail = (idTopic) => {
    const topics = new TopicsDetails();
        topics
            .getTopicsDetail(idTopic)
            .then(respone => {
                this.setState({dataQuestions: respone.data.data.items});
        })
    };

    getTopics = () => {
        const topics = new Topics();
          topics
              .getTopics()
              .then(respone => {
                  this.setState({dataTopics: respone.data.data.items});
        })
    };

    getMemberInTopic = (topicID) => {
        const topicsMember = new TopicsDetails();
          topicsMember
              .getMemberInTopic(topicID)
              .then(respone => {
                this.setState({topicParticipants: respone.data.data.items});
                console.log('this.state.topicParticipants', this.state.topicParticipants)
        })
    };

    postMemberInTopic = (topicId, body) => {
        const addMember = new TopicsDetails();
        addMember
            .postMemberInTopic(topicId, body)
            .then(respone => {
                console.log('respone', respone)
            })
    }

    patchQuestions = (id, param) => {
        const updateQuestion = new Questions();
        updateQuestion
            .patchQuestions(id, param)
            .then(respone => 
                console.log('respone', respone)
            )
    }

    deleQuestions = (id) => {
        const deleteQuestion = new Questions();
        deleteQuestion
            .deleQuestions(id)
    }

    deleteMember = (topicId, body) => {
        const deleteMembers = new TopicsDetails();
        deleteMembers
            .deleteMember(topicId, body)
    }

    componentDidMount() {
        this.load();
        this.getTopicsDetail(this.props.match.params._id)
        this.getMemberInTopic(this.props.match.params._id)
        this.getTopics()
    }

    isChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onInputChange = ({ name, value }) => {
        this.setState({ [name]: value });
    }

    questionNeedEdit = questionNeedEdit => {
        this.setState({
            questionNeedEdit: questionNeedEdit,
            title: questionNeedEdit.title,
            content: questionNeedEdit.content
        });
    };

    editQuestion = () => {
        this.state.dataQuestions.forEach((value, key) => {
            if (value._id === this.state.questionNeedEdit._id) {
                value.title = this.state.title;
                value.content = this.state.content;
            }
        });
        const questionEdited = {}
        questionEdited.title = this.state.title
        questionEdited.content = this.state.content
        this.patchQuestions(this.state.questionNeedEdit._id, questionEdited)
        this.setState({ dataQuestions: this.state.dataQuestions });
    };

    deleteQuestion = idNeedDelete => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
        if (verify === true) {
            this.deleQuestions(idNeedDelete)
            const dataTemp = this.state.dataQuestions.filter(item => item._id !== idNeedDelete);
            this.setState({ dataQuestions: dataTemp });
        } else {
            return null;
        }
    };

    deleteUser = idNeedDelete => {
        console.log('idNeedDelete', idNeedDelete)
        const verify = window.confirm("Bạn có chắc chắn muốn xoá user " + idNeedDelete);
        if (verify === true) {
            const params = {
                users: [idNeedDelete]
            }
            console.log('objMemberDelete', params)
            this.deleteMember(this.props.match.params._id, params)
            const dataTemp = this.state.topicParticipants.filter(item => item._id !== idNeedDelete);
            this.setState({ topicParticipants: dataTemp });
        } else {
            return null;
        }
    };

    addUser = () => {
        const userAdd = {}
        userAdd.email = this.state.addUser
        this.state.topicParticipants.push(userAdd)
        this.setState({topicParticipants: this.state.topicParticipants})
        this.postMemberInTopic(this.props.match.params._id, userAdd)
    };

    mappingData = () => this.state.dataTopics.map((value, key) => {
        if (value._id === this.props.match.params._id) {
            return <div key={key}>
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
                            deleteQuestion={(idNeedDelete) => this.deleteQuestion(idNeedDelete)}
                            />
                    )}
                
            </div>
        } else {return null;}
    })

    render() {
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
                    <div className="col-12 col-lg-9 col-xl-8">
                    {this.mappingData()}
                    </div>
                        <div className="col-12 col-lg-3 col-xl-4 list-user mt-2">
                        <UserList 
                            topicParticipants={this.state.topicParticipants}
                            // dataUser={this.state.data.users}
                            deleteUser={(idNeedDelete) => this.deleteUser(idNeedDelete)}
                            onInputChange={this.onInputChange}
                            addUser={this.addUser}
                        />
                        </div>
                    </div>
                </div>
           </LayoutMain>
        );
    }
}

export default TopicDetail;
