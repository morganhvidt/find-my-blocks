import React from "react";
import renderer from "react-test-renderer";
import { Text } from ".";

it("renders the Text", () => {
  const tree = renderer.create(<Text>Hello</Text>).toJSON;
  expect(tree).toMatchSnapshot();
});
