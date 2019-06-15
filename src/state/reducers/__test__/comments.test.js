import commentsReducer from "state/reducers/comments";
import { SAVE_COMMENT } from "state/actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("handles action with unknow type", () => {
  const newState = commentsReducer([], { type: "ASDFJKL" });

  expect(newState).toEqual([]);
});
