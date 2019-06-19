import { combineReducers } from "redux";
import errors from "./errors";
import users from "./usersReducer";
export default combineReducers({
    errors: errors,
    users: users
});
