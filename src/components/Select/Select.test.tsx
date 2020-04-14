import React from "react";
import renderer from "react-test-renderer";
import { Select } from "./";

describe("Select component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Select>Select</Select>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
