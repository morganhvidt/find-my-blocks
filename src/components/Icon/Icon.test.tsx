import React from "react";
import renderer from "react-test-renderer";
import { Icon } from "./";

describe("Icon component should", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Icon icon="camera" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders custom sizes", () => {
    const tree = renderer.create(<Icon icon="camera" size={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders custom colors", () => {
    const tree = renderer
      .create(<Icon icon="camera" color="#ff0000" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
