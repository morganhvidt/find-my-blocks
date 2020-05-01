import React from "react";
import renderer from "react-test-renderer";
import { CardList } from "./";

import data from "../../data/data.json";

it("render correctly", () => {
  const tree = renderer.create(<CardList cards={data[8].posts} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("sorts the order of the cards properly", () => {
  const tree = renderer
    .create(<CardList cards={data[8].posts} order="nothing" />)
    .toJSON();
  const az = renderer
    .create(<CardList cards={data[8].posts} order="a-z" />)
    .toJSON();
  const za = renderer
    .create(<CardList cards={data[8].posts} order="z-a" />)
    .toJSON();
  const popular = renderer
    .create(<CardList cards={data[8].posts} order="popular" />)
    .toJSON();
  const reusable = renderer
    .create(<CardList cards={data[8].posts} order="reusable" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(az).toMatchSnapshot();
  expect(za).toMatchSnapshot();
  expect(popular).toMatchSnapshot();
  expect(reusable).toMatchSnapshot();
});

it("render its empty state correctly", () => {
  const tree = renderer.create(<CardList />).toJSON();
  expect(tree).toMatchSnapshot();
});
