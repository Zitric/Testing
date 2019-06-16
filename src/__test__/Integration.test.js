import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetched 1" }, { name: "fetched 2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // Attempt to render the entire app
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetch comment button an click it
  component.find(".comment-box__fetch-button").simulate("click");

  // expect to find a list of comments
  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);
    done();
    component.unmount();
  });
});
