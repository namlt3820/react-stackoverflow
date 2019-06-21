import React, { Component } from 'react';
import data from './../../data/data(2).json'
import EditFormModal from '../Cores/CoComponent/EditFormModal';
import QuestionUnit from './QuestionUnit.js';
import Questions from '../../services/questions.service.js';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data,
            dataQuestions: [],
            title: '',
            content: '',
            objectNeedEdit: {}
        }
    }
    
    getQuestions = () => {
        const questions = new Questions();
          questions
              .getQuestions()
              .then(respone => {console.log('respone',respone.data.data.items )
                  this.setState({dataQuestions: respone.data.data.items});})
    };

    // postQuestion = (data) => {
    //     const newQuestions = new Questions();
    //     newQuestions
    //         .postQuestion(data)
    //         .then(respone => console.log('respone', respone))
    // }

    patchQuestions = (id, param) => {
        const editQuestion = new Questions();
        editQuestion
            .patchQuestions(id, param)
            .then(respone => console.log('respone', respone))
    }
    deleQuestion = (id) => {
        const trashQuestion = new Questions();
        trashQuestion
            .deleQuestion(id)
            .then(respone => console.log('respone', respone))
    }

    componentDidMount() {
        this.getQuestions()
    }

    mappingData = () => this.state.dataQuestions.map((value, key) => (<QuestionUnit 
                                                                        key={key} questionItem={value}
                                                                        objectNeedEdit={(objectNeedEdit) => this.objectNeedEdit(value)}
                                                                        DeleteQuestion={(idNeedDelete) => this.DeleteQuestion(idNeedDelete)}
                                                                        />))
 
    isChange = (event) => {
        const { name, value } = event.target
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
    }

    DeleteQuestion  = (idNeedDelete) => {
        console.log('idNeedDelete', idNeedDelete)
    }

    handleClick  = () => {
        this.state.dataQuestions.map((question) => {
            if (question._id === this.state.objectNeedEdit._id) {
                question.title = this.state.title
                question.content = this.state.content
                const QuestionEdited = {}
                QuestionEdited.title = this.state.title
                QuestionEdited.content = this.state.content
                console.log('QuestionEdited', QuestionEdited)
                this.patchQuestions(this.state.objectNeedEdit._id, QuestionEdited)
            }
            this.setState({title: '', content: ''})
        })
    }
    render() {
        console.log('1111111')
        return (
            <div>
                {this.mappingData()}
                <EditFormModal 
                isChange={(event) => this.isChange(event)}
                onClick={this.handleClick}
                title={this.state.title}
                content={this.state.content}
                />
            </div>
        );
    }
}

export default QuestionList;