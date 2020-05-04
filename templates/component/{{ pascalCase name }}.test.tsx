import React from "react";
import renderer from "react-test-renderer";
import { {{ pascalCase name }} } from "./";

it("render correctly", () => {
  const tree = renderer.create(<{{ pascalCase name }}>{{ pascalCase name }}</{{ pascalCase name }}>).toJSON();
  expect(tree).toMatchSnapshot();
});
