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
    updateProfile(params) {
        this.path = "users/profile"
        return this.patch('', params)
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
