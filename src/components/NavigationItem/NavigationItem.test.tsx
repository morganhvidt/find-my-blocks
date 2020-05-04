import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { NavigationItem } from "./";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer.create(<NavigationItem label="label" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders active correctly", () => {
  const tree = renderer
    .create(<NavigationItem label="label" active={true} />)
    .toJSON();
  expect(tree.props.className).toContain("active");
  expect(tree).toMatchSnapshot();
});

it("renders postCount correctly", () => {
  const tree = renderer
    .create(<NavigationItem label="label" postCount={5} active={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("does nothing no onClick is set", () => {
  const onClick = jest.fn();
  const { getByText } = render(<NavigationItem label={"test"} />);
  fireEvent.click(getByText("test"));
  expect(onClick).not.toHaveBeenCalled();
});

it("onClick calls the function when clicked", () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <NavigationItem label={"test"} onClick={() => onClick()} />
  );
  fireEvent.click(getByText("test"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
