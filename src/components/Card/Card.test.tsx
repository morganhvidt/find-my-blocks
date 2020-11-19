import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Card } from ".";

afterEach(cleanup);

it("renders correctly", () => {
  const { container } = render(<Card title="Toronto">Go Raps!</Card>);
  expect(container).toMatchSnapshot();
});

it("renders without a title", () => {
  const { container } = render(<Card>Go Raps!</Card>);
  expect(container).toMatchSnapshot();
});
