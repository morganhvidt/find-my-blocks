import React from "react";
import renderer from "react-test-renderer";
import { CardList, Card } from ".";

it("renders the CardList and Card", () => {
  const tree = renderer.create(
    <CardList title="Card List">
      <Card title="this is a title" postType="features" />
    </CardList>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("tells that there is multiple usages in post", () => {
  const tree = renderer.create(
    <Card
      title="this is a title"
      postType="features"
      count={3} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a warning if isReusable", () => {
  const tree = renderer.create(
    <Card
      title="this is a title"
      postType="features"
      count={3}
      isReusable={ true } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
