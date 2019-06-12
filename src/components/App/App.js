import React from "react";
import CommentBox from "components/CommentBox/CommentBox";
import CommentList from "components/CommentList/CommentList";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
};
