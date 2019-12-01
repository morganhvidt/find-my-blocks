import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { MenuItem } from ".";

afterEach(cleanup);
let count = 0;
const menuItem = (
  <MenuItem
    title="test-content"
    count={3}
    isActive={ false }
    onClick={ () => count++ } />
);

it("renders the MenuItem", () => {
  const tree = renderer.create(menuItem).toJSON;
  expect(tree).toMatchSnapshot();
});

it("renders posts vs post based on count", () => {
  const posts = renderer.create(menuItem).toJSON;
  const post = renderer.create(
    <MenuItem
      title="test-content"
      count={1}
      isActive={ false }
      onClick={ () => count++ } />
  ).toJSON;
  expect(posts).toMatchSnapshot();
  expect(post).toMatchSnapshot();
});

it("renders active menu item", () => {
  const active = renderer.create(
    <MenuItem
      title="test-content"
      count={1}
      isActive={ true }
      onClick={ () => null } />
  ).toJSON;
  expect(active).toMatchSnapshot();
});

test("it should handle tab onClick", () => {
  const { getByText } = render(menuItem);
  count = 0;

  fireEvent.click(getByText("test-content"));
  expect(count).toBe(1);
  fireEvent.click(getByText("test-content"));
  expect(count).toBe(2);
});
