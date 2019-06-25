import React, { Component } from "react";
import "./../components/AskQuestion/style.css";
import QuestionContentAsk from "./../components/AskQuestion/QuestionContentAsk";
import LayoutMain from "../layout/LayoutMain";
import CustomButton from "../components/Cores/button/CustomButton_v2";
import Input from "../components/Cores/input/Input_v2";
import Questions from "../services/questions.service";
import ListSuggest from "../components/AskQuestion/ListSuggest";
import Topics from "../services/topic.service";
import TopicsDetails from "../services/topic-detail.service";

class AskQuestion extends Component {
    state = {
        title: '',
        content:'',
        tag: '',
        topic: '',
        topicId: '',
        tags: [],
        listTopics: [],
        statusListSuggest: true,
        resultSearch: []
    }

    getTopics = () => {
        const topics = new Topics();
          topics
              .getTopics()
              .then(respone => {
                  console.log('respone', respone)
                  this.setState({listTopics: respone.data.data.items});
                })
    };

    postQuestion = (data) => {
        const newQuestion = new Questions();
        newQuestion
            .postQuestion(data)
            .then(respone => console.log('respone', respone))
    }

    postQuestionInTopic = (idTopicAdd, body) => {
        const newQuestionTopic = new TopicsDetails();
        newQuestionTopic
            .postQuestionInTopic(idTopicAdd,body)
            .then(respone => console.log('respone', respone))
    }

    componentDidMount() {
        this.getTopics()
    }
    

    isChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value});
    }

    handleChangeTopics  = ({ name, value }) => {
        this.setState({[name]: value});
    }

    // var resultSearch = [];
    // this.state.data.forEach((item) => {
    //   if (item.name.indexOf(this.state.textSearch) !== -1 || item.tel.indexOf(this.state.textSearch) !== -1) {
    //     resultSearch.push(item)
    //   }
    // })

    // mapTopics = () => {
    //     const resultSearch = [];
    //     this.state.listTopics.forEach((item) => {
    //         if (item.name.indexOf(this.state.topic) !== -1) {
    //             resultSearch.push(item)
    //         }
    //     })
    //     this.state.resultSearch.map((value, key) => (
    //         <ListSuggest 
    //             key={key}
    //             title={value.name}
    //         />
    //     ))
    // }

    handleChange  = ({ name, value }) => {
        this.setState({[name]: value});
    }

    

    returnListSuggest  = () => {
        if (this.state.topic !== '') {
            const resultSearch = [];
            this.state.listTopics.forEach((item) => {
                if (item.name.indexOf(this.state.topic) !== -1) {
                    resultSearch.push(item)
                }
            })
            return <ListSuggest 
            resultSearch={resultSearch}
            ClickItemSuggest={(itemClick) => this.ClickItemSuggest(itemClick)}
            />
        } else {
            return null;
        }
    }

    ClickItemSuggest  = (itemClick) => {
        this.setState({
            topic: itemClick.name,
            topicId: itemClick._id
        });
    }

    // displayListSuggest = () => {
    //     if (this.state.statusListSuggest === true) {
    //         this.returnListSuggest()
            
    //     } else {
    //         return null;
    //     }
    // }


    handleClick  = () => {
        if (this.state.topic !== '') {
            this.state.tags.push(this.state.tag)
            const newQuestion = {}
            newQuestion.title = this.state.title
            newQuestion.content = this.state.content
            newQuestion.tags = this.state.tags
            this.postQuestionInTopic(this.state.topicId, newQuestion)
            this.setState({
                title: '',
                content:'',
                tag: '',
                tags: []
            });
        } else if (this.state.topic === ''){
            this.state.tags.push(this.state.tag)
            const newQuestion = {}
            newQuestion.title = this.state.title
            newQuestion.content = this.state.content
            newQuestion.tags = this.state.tags
            this.postQuestion(newQuestion)
            this.setState({
                title: '',
                content:'',
                tag: '',
                tags: []
            })
        }
    }

    render() {
        const header = {};
        return (
            <LayoutMain header={header}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-2">
                        <form>
                            <Input 
                                value={this.state.topic}
                                name="topic"
                                label="Topic"
                                placeholder="Chọn Topic (không bắt buộc)"
                                handleChange={this.handleChangeTopics}
                            />
                            {this.returnListSuggest()}                           
                            <Input
                                name="title"
                                label="Tiêu đề câu hỏi"
                                placeholder="Gõ tiêu đề (bắt buộc)"
                                handleChange={this.handleChange}
                                value={this.state.title}
                            />
                            <QuestionContentAsk 
                                isChange={(event) => this.isChange(event)}
                                content={this.state.content}
                            />
                            <Input
                                name="tag"
                                label="Chọn Tag"
                                placeholder="Gõ tag (bắt buộc)"
                                handleChange={this.handleChange}
                                value={this.state.tag}
                            />
                            {/* <ListSuggest/> */}
                        </form>
                        </div>
                    </div>
                    <CustomButton 
                        handleClick={this.handleClick}
                        className='btn-block mt-3'
                        content='Ask Question'
                    />
                </div>
            </LayoutMain>
        );
    }
}

export default AskQuestion;
