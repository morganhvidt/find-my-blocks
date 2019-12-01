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
