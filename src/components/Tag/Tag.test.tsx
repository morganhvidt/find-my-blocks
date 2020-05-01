import React from "react";
import renderer from "react-test-renderer";
import { Tag } from "./";

it("render correctly", () => {
  const tree = renderer.create(<Tag variation="default">Tag</Tag>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render with an icon", () => {
  const tree = renderer
    .create(
      <Tag variation="default" icon="play">
        Tag
      </Tag>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render different variations", () => {
  const tag = renderer.create(<Tag variation="default">Tag</Tag>).toJSON();
  const info = renderer.create(<Tag variation="info">Tag</Tag>).toJSON();
  const warning = renderer.create(<Tag variation="warning">Tag</Tag>).toJSON();
  const error = renderer.create(<Tag variation="error">Tag</Tag>).toJSON();
  expect(tag).toMatchSnapshot();
  expect(info).toMatchSnapshot();
  expect(warning).toMatchSnapshot();
  expect(error).toMatchSnapshot();
});
