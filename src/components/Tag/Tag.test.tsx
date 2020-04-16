import React from "react";
import renderer from "react-test-renderer";
import { Tag } from "./";

describe("Tag component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Tag>Tag</Tag>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
