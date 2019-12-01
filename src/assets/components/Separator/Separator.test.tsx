import React from "react";
import renderer from "react-test-renderer";
import { Separator } from ".";

it("renders the Separator", () => {
  const tree = renderer.create(<Separator />).toJSON;
  expect(tree).toMatchSnapshot();
});
