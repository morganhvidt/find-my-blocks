import React from "react";
import renderer from "react-test-renderer";
import { Layout } from "./";

describe("Layout component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Layout>Layout</Layout>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
