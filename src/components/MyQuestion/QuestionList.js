import React, { Component } from "react";
import data from "./../../data/data(2).json";
import EditFormModal from "../Cores/CoComponent/EditFormModal";
import QuestionUnit from "./QuestionUnit.js";
import MyQuestions from "../../services/my-questions.service.js";
class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data,
            dataQuestions: [],
            title: "",
            content: "",
            objectNeedEdit: {}
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ dataQuestions: newProps.dataQuestions });
    }

    // postQuestion = (data) => {
    //     const newQuestions = new Questions();
    //     newQuestions
    //         .postQuestion(data)
    //         .then(respone => console.log('respone', respone))
    // }

    patchQuestions = (id, param) => {
        const editQuestion = new MyQuestions();
        editQuestion.patchQuestions(id, param).then(respone => console.log("respone", respone));
    };
    deleQuestions = id => {
        const trashQuestion = new MyQuestions();
        trashQuestion.deleQuestions(id).then(respone => console.log("respone", respone));
    };

    mappingData = () =>
        this.state.dataQuestions.map((value, key) => (
            <QuestionUnit
                key={key}
                questionItem={value}
                objectNeedEdit={objectNeedEdit => this.objectNeedEdit(value)}
                DeleteQuestion={idNeedDelete => this.DeleteQuestion(value._id)}
            />
        ));

    isChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    objectNeedEdit = objectNeedEdit => {
        this.setState({
            objectNeedEdit: objectNeedEdit,
            title: objectNeedEdit.title,
            content: objectNeedEdit.content
        });
    };

    // const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
    // if (verify === true) {
    //     this.deleTopic(idNeedDelete)
    //     const dataTemp = this.state.dataTopics.filter(item => item._id !== idNeedDelete);
    //     this.setState({ dataTopics: dataTemp });
    // } else {
    //     return null;
    // }

    DeleteQuestion = idNeedDelete => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
        if (verify === true) {
            this.deleQuestions(idNeedDelete);
            const dataTemp = this.state.dataQuestions.filter(item => item._id !== idNeedDelete);
            this.setState({ dataQuestions: dataTemp });
        } else {
            return null;
        }
    };

    handleClick = () => {
        this.state.dataQuestions.map(question => {
            if (question._id === this.state.objectNeedEdit._id) {
                question.title = this.state.title;
                question.content = this.state.content;
                const QuestionEdited = {};
                QuestionEdited.title = this.state.title;
                QuestionEdited.content = this.state.content;
                console.log("QuestionEdited", QuestionEdited);
                this.patchQuestions(this.state.objectNeedEdit._id, QuestionEdited);
            }
            this.setState({ title: "", content: "" });
        });
    };
    render() {
        return (
            <div>
                {this.mappingData()}
                <EditFormModal
                    isChange={event => this.isChange(event)}
                    onClick={this.handleClick}
                    title={this.state.title}
                    content={this.state.content}
                />
            </div>
        );
    }
}

export default QuestionList;
