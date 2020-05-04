import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./";

describe("Content component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Content>Content</Content>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
