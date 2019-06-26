import React, { Component } from "react";
import data from "./../data/data(2).json";
import "./../components/QuestionDetails/style.css";
import QuestionComment from "./../components/QuestionDetails/QuestionComment";
import QuestionInPageDetail from "./../components/QuestionDetails/QuestionInPageDetail";
import LayoutMain from "../layout/LayoutMain";
import Questions from "../services/questions.service.js";
import Answer from "../services/answer.service.js";

class QuestionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data,
            dataQuestions: [],
            dataAnswer: [],
            answerContent: ""
        };
    }

    getQuestions = () => {
        const questions = new Questions();
        questions.getQuestions().then(respone => {
            this.setState({ dataQuestions: respone.data.data.items });
        });
    };

    getAnswer = () => {
        const answer = new Answer();
        answer.getAnswer().then(respone => {
            console.log("respone", respone.data.data.items);
            this.setState({ dataAnswer: respone.data.data.items });
        });
    };

    postAnswer = body => {
        const answerPost = new Answer();
        answerPost.postAnswer(body);
    };

    componentDidMount() {
        this.getQuestions();
        this.getAnswer();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleClick = () => {
        const objAnswer = {};
        objAnswer.question = this.props.match.params._id;
        objAnswer.content = this.state.answerContent;
        console.log("objAnswer", objAnswer);
        this.postAnswer(objAnswer);
    };

    mappingData = () =>
        this.state.dataQuestions.map((value, key) => {
            if (value._id === this.props.match.params._id) {
                console.log("value", value);
                return (
                    <div key={key}>
                        <QuestionInPageDetail
                            questionDetail={value}
                            handleChange={event => this.handleChange(event)}
                            handleClick={this.handleClick}
                        />
                        <QuestionComment
                            answersQuestion={value}
                            handleChange={event => this.handleChange(event)}
                            handleClick={this.handleClick}
                        />
                    </div>
                );
            } else {
                return null;
            }
        });

    render() {
        console.log("this.state.dataAnswer", this.state.dataAnswer);
        const header = {};
        return <LayoutMain header={header}>{this.mappingData()}</LayoutMain>;
    }
}

export default QuestionDetail;
