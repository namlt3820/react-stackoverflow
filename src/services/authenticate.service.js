import Base from "./base.service.js";

export default class Authenticate extends Base {
    constructor() {
        super("authenticate");
    }
    login(params) {
        return this.post(params);
    }
}
