import Base from "./base.service.js";

export default class Topics_2 extends Base{
    constructor() {
        super("topics");
    }
    patchTopic(id, param) {
        return this.patch(id, param);
    }
    deleTopic(id) {
        return this.delete(id);
    }
}