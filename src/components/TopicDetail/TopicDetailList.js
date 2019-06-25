import React, { Component } from 'react';
import TopicDetailUnit from './TopicDetailUnit';
import EditFormModal from '../Cores/CoComponent/EditFormModal';

class TopicDetailList extends Component {

    render() {
        return (
            <div>
                <TopicDetailUnit 
                topicDetail={this.props.topicDetail} 
                dataQuestions={this.props.dataQuestions}
                questionNeedEdit={(questionNeedEdit) => this.props.questionNeedEdit(questionNeedEdit)}
                deleteQuestion={(idNeedDelete) => this.props.deleteQuestion(idNeedDelete)}
                />
                <EditFormModal
                title={this.props.title}
                content={this.props.content}
                isChange={(event) => this.props.isChange(event)}
                onClick={this.props.editQuestion}/>
            </div>
                
        );
    }
}

export default TopicDetailList;