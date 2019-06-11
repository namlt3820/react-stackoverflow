import React, { Component } from 'react';
import data from './../../data/data(2).json'
import EditFormModal from '../Cores/CoComponent/EditFormModal';
import QuestionUnit from './QuestionUnit.js';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQuestion: data
        }
    }
    
    mappingData = () => this.state.dataQuestion.questions.map((value, key) => (<QuestionUnit key={key} questionItem={value}/>))
 
    
    render() {
        return (
            <div>
                {this.mappingData()}
                <EditFormModal />
            </div>
        );
    }
}

export default QuestionList;