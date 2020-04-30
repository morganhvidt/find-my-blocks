import React from "react";
import renderer from "react-test-renderer";
import { CardList } from "./";

import data from "../../data/data.json";

it("render correctly", () => {
  const tree = renderer.create(<CardList cards={data[8].posts} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render its empty state correctly", () => {
  const tree = renderer.create(<CardList />).toJSON();
  expect(tree).toMatchSnapshot();
});
