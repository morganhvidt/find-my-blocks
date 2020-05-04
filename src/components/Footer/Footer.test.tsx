import React from "react";
import renderer from "react-test-renderer";
import { Footer } from "./";

it("render correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
