import React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

it("renders the CalculationTabs", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
