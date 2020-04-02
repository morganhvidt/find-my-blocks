import React from "react";
import renderer from "react-test-renderer";
import { Link } from "./";

describe("Link component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<Link>Link</Link>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
