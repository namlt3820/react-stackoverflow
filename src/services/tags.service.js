import Base from "./base.service.js";

class Tags extends Base {
    constructor() {
        super("question-tags");
    }
}

const tags = new Tags()
export default tags