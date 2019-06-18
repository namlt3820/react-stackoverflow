import Base from "./base.service.js";

export default class User extends Base {
    constructor() {
        super("users");
    }
    signup(params) {
        return this.post(params);
    }
}
