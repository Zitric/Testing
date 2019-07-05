import { combineReducers } from "redux";
import commentsReducer from "state/reducers/comments";
import authReducer from "state/reducers/auth";

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});
