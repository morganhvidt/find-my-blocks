import React from "react";
import renderer from "react-test-renderer";
import { Layout } from ".";

it("renders the Layout", () => {
  const tree = renderer.create(<Layout>Hello World</Layout>).toJSON;
  expect(tree).toMatchSnapshot();
});
