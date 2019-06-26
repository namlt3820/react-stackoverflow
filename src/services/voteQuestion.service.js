import Base from './base.service'

class VoteQuestion extends Base{
    constructor() {
        super('questions');
    }
    postVoteQuestion = (questionsId, body) => {
        this.path = 'questions/'+questionsId+'/votes'
        return this.post(body);
    }
    deleteVoteQuestion = (questionsId) => {
        this.path = 'questions/'+questionsId+'/votes'
        return this.delete_v2();
    }
}

const voteQuestion = new VoteQuestion();
export default voteQuestion;