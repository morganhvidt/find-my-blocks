import React from "react";
import renderer from "react-test-renderer";
import { NavigationItem } from "./";

describe("NavigationItem component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<NavigationItem label="label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
