import React from "react";
import CommentBox from "../CommentBox/CommentBox";
import CommentList from "../CommentList/CommentList";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
};
