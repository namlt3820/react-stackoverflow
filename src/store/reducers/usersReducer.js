import { SET_CURRENT_USER, SET_SOCIAL_USER } from "../constants";

const initState = {
    isAuthenticated: false,
    user: null
};
export default function(state = initState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
        case SET_SOCIAL_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload
            };

        default:
            return state;
    }
}
