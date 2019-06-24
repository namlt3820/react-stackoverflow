import Social from "../../services/social.service";
import { setCurrentUser } from "../actions/userAction";

const social = new Social();

export const loginFb = params => dispatch => {
    social
        .loginFb(params)
        .then(res => {
            const { access_token } = res.data.data;
            localStorage.setItem("access_token", access_token);
            dispatch(setCurrentUser(res.data));
        })
        .catch(error => {
            console.log("error", error);
        });
};
