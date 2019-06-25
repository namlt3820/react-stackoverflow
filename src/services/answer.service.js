import Base from "./base.service.js";

export default class Answer extends Base {
    constructor() {
        super("/question-answers");
    }
    getAnswer(params) {
        return this.get(params);
    }
    postAnswer(body) {
        return this.post(body);
    }
    // patchTopic(id, param) {
    //     return this.patch(id, param);
    // }
    // deleTopic(id) {
    //     return this.delete(id);
    // }
}