import Base from "./base.service.js";

export default class Topics extends Base {
    constructor() {
        super("topics?sort=-createdAt,name,desc");
    }
    getTopics(params) {
        return this.get(params);
    }
    postTopic(body) {
        return this.post(body);
    }
    // patchTopic(id, param) {
    //     return this.patch(id, param);
    // }
}

// ?sort=-createdAt,name,desc