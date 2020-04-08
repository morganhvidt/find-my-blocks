import React from "react";
import renderer from "react-test-renderer";
import { InputText } from "./";

describe("InputText component should", () => {
  it("render correctly", () => {
    const tree = renderer.create(<InputText>InputText</InputText>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
