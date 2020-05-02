import React from "react";
import renderer from "react-test-renderer";
import { Box } from "./";

it("render correctly", () => {
  const tree = renderer.create(<Box>Box</Box>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render correctly as a span", () => {
  const tree = renderer.create(<Box tag="span">Box</Box>).toJSON();
  if (tree) {
    expect(tree.type).toBe("span");
  }
});

it("render classNames correctly", () => {
  const tree = renderer.create(<Box className="raptors">Box</Box>).toJSON();
  if (tree) {
    expect(tree.props.className).toBe("raptors");
    expect(tree).toMatchSnapshot();
  }
});
