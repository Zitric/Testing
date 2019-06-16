import axios from "axios";
import { SAVE_COMMENT } from "state/actions/types";
import { FETCH_COMMENTS } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/comments");
  console.log("fetching");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
