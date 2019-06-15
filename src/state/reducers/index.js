import { combineReducers } from "redux";
import commentsReducer from "state/reducers/comments";

export default combineReducers({
  comments: commentsReducer
});
