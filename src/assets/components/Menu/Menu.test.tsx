import React from "react";
import renderer from "react-test-renderer";
import { Menu } from ".";

it("renders the Menu", () => {
  const tree = renderer.create(<Menu>Hello World</Menu>).toJSON;
  expect(tree).toMatchSnapshot();
});
