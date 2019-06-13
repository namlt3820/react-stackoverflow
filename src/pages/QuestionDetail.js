import React, { Component } from 'react';
import data from './../data/data(2).json'
import './../components/QuestionDetails/style.css'
import QuestionComment from './../components/QuestionDetails/QuestionComment';
import QuestionInPageDetail from './../components/QuestionDetails/QuestionInPageDetail';

class QuestionDetail extends Component {
constructor(props) {
    super(props);
    this.state = {
        dataQuestion: data
    }
}

mappingData = () => this.state.dataQuestion.questions.map((value, key) => {
    if (value.id === this.props.match.params.id) {
        return <div key={key}>
            <QuestionInPageDetail questionDetail={value}/>
            <QuestionComment answersQuestion={value}/>
        </div>
    }else{return null};
})
    

    render() {
        return (
            <div>
                {this.mappingData()}
            </div>
        );
    }
}

export default QuestionDetail;