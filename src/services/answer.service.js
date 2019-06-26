import Base from "./base.service.js";

class Answer extends Base {
    constructor() {
        super("/question-answers");
    }
    getAnswer(idQuestion,params) {
        this.path = `question-answers?question=`+idQuestion
    }
    postAnswer(body) {
        return this.post(body);
    }
    deleteAnswer(idRecord) {
        console.log('idRecord', idRecord)
        this.path = `question-answers/`+idRecord
        return this.delete_v2(idRecord)
    }
    editAnswer(id, param) {
        this.path = `question-answers/`
        return this.patch(id, param)
    }
}

const answer = new Answer();
export default answer;
