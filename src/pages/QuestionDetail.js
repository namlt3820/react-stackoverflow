import React, { Component } from "react";
import data from "./../data/data(2).json";
import "./../components/QuestionDetails/style.css";
import QuestionComment from "./../components/QuestionDetails/QuestionComment";
import QuestionInPageDetail from "./../components/QuestionDetails/QuestionInPageDetail";
import LayoutMain from "../layout/LayoutMain";
import Questions from "../services/questions.service.js";
import Answer from "../services/answer.service.js";
import voteQuestion from "../services/voteQuestion.service.js";

class QuestionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data,
            dataQuestions: [],
            dataAnswer: [],
            answerContent: "",
            statusVoteQuestion: true
        };
    }

    getQuestions = () => {
        const questions = new Questions();
          questions
              .getQuestions()
              .then(respone => {console.log('respone',respone.data.data.items )
                  this.setState({dataQuestions: respone.data.data.items});})
    };

    getAnswer = () => {
        const answer = new Answer();
            answer
                .getAnswer()
                .then(respone => {console.log('respone',respone.data.data.items )
                  this.setState({dataAnswer: respone.data.data.items});})
    }

    postAnswer = (body) => {
        const answerPost = new Answer();
            answerPost
                .postAnswer(body)
    }

    postVoteQuestion = (questionsId, body) => {
        voteQuestion
            .postVoteQuestion(questionsId, body)
    }

    componentDidMount() {
        this.getQuestions()
        this.getAnswer()
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
    }

    handleClickVoteQuestion  = () => {
        if (this.state.statusVoteQuestion === true) {
            this.postVoteQuestion(this.props.match.params._id)
            this.setState({statusVoteQuestion: false})
        } else if(this.state.statusVoteQuestion === false) {
            this.setState({statusVoteQuestion: true})
        }
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
                    />
                );
            } else {
                return null;
            }
        });

    mappingAnswer = () => 
        this.state.dataAnswer.map((value, key) => {
            // if (value.question._id === this.props.match.params._id) {
                return <QuestionComment 
                key={key}
                answersQuestion={value} 
                handleChange={(event) => this.handleChange(event)}
                handleClick={this.handleClickReply}
                />
            // } else {
            //     return null;
            // }
            
        })

    render() {
        console.log('this.state.dataAnswer', this.state.dataAnswer)
        const header = {};
        return <LayoutMain header={header}>
            {this.mappingData()}
            {this.mappingAnswer()}
        </LayoutMain>;
    }
}

export default QuestionDetail;
