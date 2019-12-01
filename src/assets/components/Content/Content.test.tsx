import React from "react";
import renderer from "react-test-renderer";
import { Content } from ".";

it("renders the Content", () => {
  const tree = renderer.create(<Content>Hello World</Content>).toJSON;
  expect(tree).toMatchSnapshot();
});

it("renders the Content with the different sizes", () => {
  const small = renderer.create(
    <Content spacing="small">Hello World</Content>
  ).toJSON;
  const medium = renderer.create(
    <Content spacing="medium">Hello World</Content>
  ).toJSON;
  const large = renderer.create(
    <Content spacing="large">Hello World</Content>
  ).toJSON;
  expect(small).toMatchSnapshot();
  expect(medium).toMatchSnapshot();
  expect(large).toMatchSnapshot();
});
