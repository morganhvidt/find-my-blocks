import React from "react";
import renderer from "react-test-renderer";
import { Layout } from "./";

jest.mock("../../hooks", () => ({
  useThrottledResizeObserver: jest
    .fn()
    .mockReturnValue([null, { width: 1, height: 1 }]),
}));

it("render correctly", () => {
  const tree = renderer.create(<Layout />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders all areas correctly", () => {
  const sidebar = renderer.create(<Layout sidebar="sidebar" />).toJSON();
  const settings = renderer.create(<Layout settings="settings" />).toJSON();
  const title = renderer.create(<Layout title="title" />).toJSON();
  const cards = renderer.create(<Layout cards="cards" />).toJSON();
  expect(sidebar).toMatchSnapshot();
  expect(settings).toMatchSnapshot();
  expect(title).toMatchSnapshot();
  expect(cards).toMatchSnapshot();
});
