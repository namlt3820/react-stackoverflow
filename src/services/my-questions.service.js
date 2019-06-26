import Base from "./base.service.js";

export default class MyQuestions extends Base {
    constructor() {
        super("questions/my-questions");
    }

    getQuestions(params) {
        return this.get(params);
    }
}
