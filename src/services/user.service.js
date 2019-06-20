import Base from "./base.service.js";

export default class User extends Base {
    constructor() {
        super("users");
    }
    signUp(params) {
        return this.post(params)
    }
    getProfile() {
        this.path = "users/profile";
        return this.get();
    }
}
