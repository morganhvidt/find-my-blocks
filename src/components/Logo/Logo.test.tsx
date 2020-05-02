import React from "react";
import renderer from "react-test-renderer";
import { Logo } from "./";

jest.mock("./logo.ignore.ts");

it("render correctly", () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render pin version", () => {
  const tree = renderer.create(<Logo version="pin" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render blank if no version is found", () => {
  const tree = renderer.create(<Logo version="raptors" />).toJSON();
  expect(tree).toBe(null);
  expect(tree).toMatchSnapshot();
});
