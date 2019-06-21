import Base from "./base.service.js";

export default class User extends Base {
    constructor() {
        super("users");
    }
    signUp(params) {
        return this.post(params);
    }
    getProfile() {
        this.path = "users/profile";
        return this.get();
    }
    getActiveCode(params) {
        this.path = "users/active";
        return this.post("active", params);
    }
    resendActiveCode(params) {
        this.path = "users/active/resend-code";
        return this.post(params);
    }
    forgotPassword(params) {
        this.path = "users/password/forgot";
        return this.post(params);
    }
    updatePassword(params) {
        this.path = "users/password/update-by-code";
        return this.patch("", params);
    }
    changePassword(params) {
        this.path = "users/password/change";
        return this.patch("", params);
    }
}
