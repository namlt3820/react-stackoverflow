import React, { Component } from "react";
import data from "./../data/data(2).json";
import "./../components/QuestionDetails/style.css";
import QuestionComment from "./../components/QuestionDetails/QuestionComment";
import QuestionInPageDetail from "./../components/QuestionDetails/QuestionInPageDetail";
import LayoutMain from "../layout/LayoutMain";
import Questions from "../services/questions.service.js";
import answer from "../services/answer.service.js";
import voteQuestion from "../services/voteQuestion.service.js";
import Reply from "../components/QuestionDetails/Reply.js";
import voteAnswer from "../services/voteAnswer.service.js";

class QuestionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data,
            dataQuestions: [],
            dataAnswer: [],
            answerContent: "",
            statusVoteQuestion: false,
            statusVoteAnswer: false,
            voteAnswerCount: '',
            background_color: "notVote",
            // contentAnswerNeedEdit: "",
            // titleCommentBox: '',
            contentButton: "Send Answer",
            idAnswer: ""
        };
    }

    getQuestions = () => {
        const questions = new Questions();
          questions
              .getQuestions()
              .then(respone => {console.log('respone',respone.data.data.items )
                  this.setState({dataQuestions: respone.data.data.items});})
    };

    getAnswer = (idQuestion) => {
            answer
                .getAnswer(idQuestion)
                .then(respone => {console.log('respone',respone.data.data.items )
                  this.setState({dataAnswer: respone.data.data.items});})
    }

    postAnswer = (body) => {
            answer
                .postAnswer(body)
    }

    postVoteQuestion = (questionsId, body) => {
        voteQuestion
            .postVoteQuestion(questionsId, body)
    }
    deleteVoteQuestion = (questionsId) => {
        voteQuestion
            .deleteVoteQuestion(questionsId)
    }
    deleteAnswer = (id, body) => {
        answer
            .deleteAnswer(id, body)
    }
    editAnswer = (id, param) => {
        answer
            .editAnswer(id, param)
    }
    postVoteAnswer = (recordId, body) => {
        voteAnswer
            .postVoteAnswer(recordId, body)
    }
 
    
    componentWillMount() {
        // this.state.dataAnswer.map((value, key) => {
        //     console.log('value', value)
        //     this.setState({
        //         voteAnswerCount: value.voteCount
        //     })
        // })
        
    }
    
    componentDidMount() {
        this.getQuestions()
        this.getAnswer(this.props.match.params._id)
        console.log('this.state.dataAnswer', this.state.dataAnswer)
    }
    
    handleChange  = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    handleClickReply  = () => {
        const objAnswer = {}
        objAnswer.question = this.props.match.params._id
        objAnswer.content = this.state.answerContent
        this.postAnswer(objAnswer)
        this.setState({answerContent: ''})
    }

    handleClickVoteQuestion  = () => {
        if (this.state.statusVoteQuestion === true) {
            this.postVoteQuestion(this.props.match.params._id)
            this.setState({
                statusVoteQuestion: false,
                background_color: "voted"
            })
        } else if(this.state.statusVoteQuestion === false) {
            this.deleteVoteQuestion(this.props.match.params._id)
            this.setState({
                statusVoteQuestion: true,
                background_color: "notVote"
            })
        }
    }

    handleClickDeleteAnswer  = (idAnswerNeedDelete) => {
        const verify = window.confirm('Bạn có chắc chắn muốn xoá comment!!!')
        if (verify === true) {
            this.deleteAnswer(idAnswerNeedDelete)
            const dataTemp = this.state.dataAnswer.filter((item) => item._id !== idAnswerNeedDelete)
            this.setState({dataAnswer: dataTemp})
        } else {
            return null;
        }
    }

    answerNeedEdit  = (answerNeedEdit) => {
        this.setState({
            answerContent: answerNeedEdit.content,
            contentButton: "Save Answer",
            idAnswer: answerNeedEdit._id
        })
    }

    handleEditAnswer  = () => {
        const objectAnswerEdited = {}
        objectAnswerEdited.content = this.state.answerContent
        this.editAnswer(this.state.idAnswer, objectAnswerEdited)
        this.state.dataAnswer.forEach((item) => {
            if (item._id === this.state.idAnswer) {
                item.content = this.state.answerContent
            }
        })
        this.setState({contentButton: "Send Answer"})
    }

    handleClick  = () => {
        if (this.state.contentButton === "Send Answer") {
            this.handleClickReply()
        } else if (this.state.contentButton === "Save Answer") {
            this.handleEditAnswer()
        }
    }

    handleClickVoteAnswer  = (idAnswerNeedVote) => {
        console.log('idAnswerNeedVote', idAnswerNeedVote)
        this.postVoteAnswer(idAnswerNeedVote)
    }

    mappingData = () =>
        this.state.dataQuestions.map((value, key) => {
            if (value._id === this.props.match.params._id) {
                return (
                    <QuestionInPageDetail 
                    key={key}
                    questionDetail={value} 
                    handleChange={(event) => this.handleChange(event)}
                    handleClick={this.handleClick}
                    handleClickVoteQuestion={this.handleClickVoteQuestion}
                    background_color={this.state.background_color}
                    />
                );
            } else {
                return null;
            }
        });
        
    mappingAnswer = () => 
        this.state.dataAnswer.map((value, key) => (
            <QuestionComment 
                key={key}
                answersQuestion={value} 
                handleChange={(event) => this.handleChange(event)}
                handleClickDeleteAnswer={() => this.handleClickDeleteAnswer(value._id)}
                answerNeedEdit={() => this.answerNeedEdit(value)}
                handleClickVoteAnswer={() => this.handleClickVoteAnswer(value._id)}
            />
        ))
    
    
    render() {
        console.log('this.state.voteAnswerCount', this.state.voteAnswerCount)
        const header = {};
        return <LayoutMain header={header}>
            {this.mappingData()}
            {this.mappingAnswer()}
            <Reply
                content = {this.state.answerContent}
                handleChange={(event) => this.handleChange(event)}
                handleClickSend={this.handleClick}
                titleCommentBox={this.state.titleCommentBox}
                contentButton={this.state.contentButton}
            />
        </LayoutMain>;
    }
}

export default QuestionDetail;
