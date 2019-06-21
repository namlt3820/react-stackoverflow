import Base from "./base.service.js";

export default class Tags extends Base {
    constructor() {
        super("question-tags");
    }
    getTagList(sort, offset,limit) {
        if (!!offset || !!limit || !!sort) {
            this.path = `question-tags?sort=${sort}&limit=${limit}&offset=${offset}`;
        } else {
            this.path = `question-tags?limit=10&offset=0`;
        }
        return this.get();
    }
}
