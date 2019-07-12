import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'state/actions/types'

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}

export const fetchComments = () => {
  return {
    type: FETCH_COMMENTS,
    payload: axios.get('https://jsonplaceholder.typicode.com/comments'),
  }
}

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  }
}
