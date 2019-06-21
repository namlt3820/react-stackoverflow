import React, { Component } from "react";
import "./../components/AskQuestion/style.css";
import QuestionContentAsk from "./../components/AskQuestion/QuestionContentAsk";
import LayoutMain from "../layout/LayoutMain";
import CustomButton from "../components/Cores/button/CustomButton_v2";
import Input from "../components/Cores/input/Input_v2";
import Questions from "../services/questions.service";

class AskQuestion extends Component {
    state = {
        title: '',
        content:'',
        tag: '',
        tags: []
    }

    isChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value});
    }

    handleChange  = ({ name, value }) => {
        this.setState({[name]: value});
    }

    postQuestion = (data) => {
        const newQuestion = new Questions();
        newQuestion
            .postQuestion(data)
            .then(respone => console.log('respone', respone))
    }

    handleClick  = () => {
        this.state.tags.push(this.state.tag)
        const newQuestion = {}
        newQuestion.title = this.state.title
        newQuestion.content = this.state.content
        newQuestion.tags = this.state.tags
        console.log('newQuestion', newQuestion)
        this.postQuestion(newQuestion)
    }

    render() {
        const header = {};
        console.log('this.state.title', this.state.title)
        console.log('this.state.content', this.state.content)
        console.log('this.state.tag', this.state.tag)
        return (
            <LayoutMain header={header}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-2">
                        <form>
                            <Input 
                                name="topic"
                                label="Topic"
                                placeholder="Chọn Topic (không bắt buộc)"
                            />
                            <Input
                                name="title"
                                label="Tiêu đề câu hỏi"
                                placeholder="Gõ tiêu đề (bắt buộc)"
                                handleChange={this.handleChange}
                            />
                            <QuestionContentAsk 
                                isChange={(event) => this.isChange(event)}/>
                            <Input
                                name="tag"
                                label="Chọn Tag"
                                placeholder="Gõ tag (bắt buộc)"
                                handleChange={this.handleChange}
                            />
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
