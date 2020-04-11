import React from "react";
import renderer from "react-test-renderer";
import { Filter } from "./";

describe("Filter component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Filter>Filter</Filter>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
