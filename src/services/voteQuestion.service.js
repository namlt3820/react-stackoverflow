import Base from './base.service'

class VoteQuestion extends Base{
    constructor() {
        super('questions');
    }
    postVoteQuestion = (questionsId, body) => {
        console.log('questionsId', questionsId)
        this.path = 'questions/'+questionsId+'/votes'
        return this.post(body);
    }   
}

const voteQuestion = new VoteQuestion;
export default voteQuestion;