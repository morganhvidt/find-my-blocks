import React from "react";
import renderer from "react-test-renderer";
import { MenuItem } from ".";

it("renders the MenuItem", () => {
  const tree = renderer.create(
    <MenuItem title="test-content" count={3} />).toJSON;
  expect(tree).toMatchSnapshot();
});

it("renders posts vs post based on count", () => {
  const posts = renderer.create(
    <MenuItem title="test-content" count={3} />
  ).toJSON;
  const post = renderer.create(
    <MenuItem title="test-content" count={1} />
  ).toJSON;
  expect(posts).toMatchSnapshot();
  expect(post).toMatchSnapshot();
});
