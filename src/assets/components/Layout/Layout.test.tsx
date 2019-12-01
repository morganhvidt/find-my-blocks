import React from "react";
import renderer from "react-test-renderer";
import { Layout } from ".";


it("renders the CalculationTabs", () => {
  const tree = renderer.create(<Layout>Hello World</Layout>).toJSON;
  expect(tree).toMatchSnapshot();
});
