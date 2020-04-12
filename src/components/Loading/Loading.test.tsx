import React from "react";
import renderer from "react-test-renderer";
import { Loading } from "./";

describe("Loading component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Loading>Loading</Loading>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
