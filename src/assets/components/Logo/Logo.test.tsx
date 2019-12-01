import React from "react";
import renderer from "react-test-renderer";
import { Logo } from ".";

it("renders the Logo", () => {
  const tree = renderer.create(<Logo />).toJSON;
  expect(tree).toMatchSnapshot();
});
