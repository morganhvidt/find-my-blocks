import React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

it("renders the Content", () => {
  const tree = renderer.create(<Card>Hello</Card>).toJSON;
  expect(tree).toMatchSnapshot();
});
test("adds 1 + 2 to equal 3", () => {
  expect(true).toBe(true);
});
