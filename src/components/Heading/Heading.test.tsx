import React from "react";
import renderer from "react-test-renderer";
import { Heading } from "./";

describe("Heading component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Heading>Heading</Heading>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
