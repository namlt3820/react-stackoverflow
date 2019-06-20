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
    getActiveCode(params) {
        this.path = "users/active"
        return this.post(params)
    }
    resendActiveCode(params) {
        this.path = "users/active/resend-code"
        return this.post(params)
    }
}
