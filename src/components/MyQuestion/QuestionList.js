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

    patchQuestions = (id, param) => {
        const editQuestion = new Questions();
        editQuestion
            .patchQuestions(id, param)
            .then(respone => console.log('respone', respone))
    }
    deleQuestions = (id) => {
        const trashQuestion = new Questions();
        trashQuestion
            .deleQuestions(id)
            .then(respone => console.log('respone', respone))
    }

    componentDidMount() {
        this.getQuestions()
    }

    mappingData = () => this.state.dataQuestions.map((value, key) => (<QuestionUnit 
                                                                        key={key} 
                                                                        questionItem={value}
                                                                        objectNeedEdit={() => this.objectNeedEdit(value)}
                                                                        DeleteQuestion={() => this.DeleteQuestion(value._id)}
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

    // const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
    // if (verify === true) {
    //     this.deleTopic(idNeedDelete)
    //     const dataTemp = this.state.dataTopics.filter(item => item._id !== idNeedDelete);
    //     this.setState({ dataTopics: dataTemp });
    // } else {
    //     return null;
    // }


    DeleteQuestion  = (idNeedDelete) => {
        const verify = window.confirm("Bạn có chắc chắn muốn xoá phần tử " + idNeedDelete);
        if (verify === true) {
            this.deleQuestions(idNeedDelete)
            const dataTemp = this.state.dataQuestions.filter(item => item._id !== idNeedDelete);
            this.setState({ dataQuestions: dataTemp });
        } else {
            return null;
        }
        
    }

    handleClick  = () => {
        this.state.dataQuestions.map((question) => {
            if (question._id === this.state.objectNeedEdit._id) {
                question.title = this.state.title
                question.content = this.state.content
                const QuestionEdited = {}
                QuestionEdited.title = this.state.title
                QuestionEdited.content = this.state.content
                this.patchQuestions(this.state.objectNeedEdit._id, QuestionEdited)
            }else{return null;}
            this.setState({title: '', content: ''})
        })
    }
    render() {
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