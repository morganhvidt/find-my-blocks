import React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

it("renders correctly", () => {
  const tree = renderer.create(<Card title="Toronto">Go Raps!</Card>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("becomes togglable with the toggle prop", () => {
  const tree = renderer
    .create(
      <Card toggle title="Toronto">
        Go Raps!
      </Card>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
