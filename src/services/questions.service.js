import Base from "./base.service.js";

export default class Questions extends Base {
    constructor() {
        super("questions");
    }
    getQuestionList(offset, limit) {
        if (!!offset || !!limit) {
            this.path = `questions?limit=${limit}&offset=${offset}`;
        } else {
            this.path = `questions?limit=10&offset=0`;
        }
        return this.get();
    }
}
