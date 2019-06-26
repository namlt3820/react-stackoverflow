import Base from "./base.service.js";

export default class Questions extends Base {
    constructor() {
        super("questions");
    }

    getQuestionList(params) {
        return this.get(params);
    }

    postQuestion(body) {
        this.path = `questions?sort=-createdAt,name,desc`;
        return this.post(body);
    }
    patchQuestions(id, param) {
        return this.patch(id, param);
    }
    deleQuestions(id) {
        return this.delete(id);
    }
}
