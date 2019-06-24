import Base from "./base.service.js";

export default class Social extends Base {
    constructor() {
        super("fb-authenticate");
    }
    loginFb(params) {
        return this.post(params);
    }
}
