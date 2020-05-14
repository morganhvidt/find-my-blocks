import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Card } from ".";

afterEach(cleanup);

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

it("Toggles when the title is clicked", () => {
  const { getByText } = render(
    <Card toggle title="Toronto">
      Go Raps
    </Card>
  );
  expect(getByText("Go Raps").classList).not.toContain("hidden");
  fireEvent.click(getByText("Toronto"));
  expect(getByText("Go Raps").classList).toContain("hidden");
});
