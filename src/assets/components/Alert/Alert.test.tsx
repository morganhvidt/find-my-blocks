import React from "react";
import renderer from "react-test-renderer";
import { Alert } from ".";

it("renders the Alert", () => {
  const tree = renderer.create(
    <Alert>Hello World</Alert>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the right classes for success/warning/error", () => {
  const success = renderer.create(
    <Alert type="success">Hello World</Alert>
  ).toJSON();

  const warning = renderer.create(
    <Alert type="warning">Hello World</Alert>
  ).toJSON();

  const error = renderer.create(
    <Alert type="error">Hello World</Alert>
  ).toJSON();

  expect(success).toMatchSnapshot();
  expect(warning).toMatchSnapshot();
  expect(error).toMatchSnapshot();
});
