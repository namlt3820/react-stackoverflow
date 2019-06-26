import Base from './base.service'

class VoteAnswer extends Base{
    constructor() {
        super('question-answers');
    }
    postVoteAnswer = (recordId, body) => {
        this.path = 'question-answers/'+recordId+'/votes'
        return this.post(body);
    }  
    deleteVoteAnswer = (recordId) => {
        this.path = 'question-answers/'+recordId+'/votes'
        return this.delete_v2();
    }
}

const voteAnswer = new VoteAnswer();
export default voteAnswer;