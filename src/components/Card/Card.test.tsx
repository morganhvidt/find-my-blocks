import React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

describe("Card component should", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Card title="Toronto">Go Raps!</Card>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
