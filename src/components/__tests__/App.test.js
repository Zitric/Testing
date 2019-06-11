import React from "react";
import { shallow } from "enzyme";

import CommentBox from "../CommentBox/CommentBox";

import App from "../App/App";

it("shows a comment box ", () => {
  const component = shallow(<App />);

  expect(component.find(CommentBox).length).toEqual(1);
});
