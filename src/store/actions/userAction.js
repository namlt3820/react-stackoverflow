import User from "../../services/user.service";
import { SET_CURRENT_USER } from "../constants";

const user = new User();

export const signUp = (data, history) => dispatch => {
    user.signUp(data)
        .then(respone => {
            console.log();
        })
        .catch(error => {
            console.log("error", error);
        });
};

export const getCurrentUser = () => dispatch => {
    user.getProfile()
        .then(res => {
            dispatch(setCurrentUser(res.data));
        })
        .catch(error => {
            console.log("error", error);
        });
};

export const setCurrentUser = data => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    };
};
