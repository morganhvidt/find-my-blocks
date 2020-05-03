import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Settings } from "./";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer
    .create(
      <Settings onNavOrderChange={() => null} onCardOrderChange={() => null} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("returns nothing if `onNavOrderChange` is not set", () => {
  const onNavOrderChange = jest.fn();
  const { getByLabelText } = render(
    <Settings onCardOrderChange={() => null} />
  );

  const select = getByLabelText("Sort navigation by:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onNavOrderChange).toHaveBeenCalledTimes(0);
});

it("fires an event for `onNavOrderChange`", () => {
  const onNavOrderChange = jest.fn();
  const { getByLabelText } = render(
    <Settings
      onNavOrderChange={(val) => onNavOrderChange(val)}
      onCardOrderChange={() => null}
    />
  );

  const select = getByLabelText("Sort navigation by:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onNavOrderChange).toHaveBeenCalled();
});

it("returns nothing if `onCardOrderChange` is not set", () => {
  const onCardOrderChange = jest.fn();
  const { getByLabelText } = render(<Settings />);

  const select = getByLabelText("Sort cards by:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onCardOrderChange).toHaveBeenCalledTimes(0);
});

it("fires an event for `onCardOrderChange`", () => {
  const onCardOrderChange = jest.fn();
  const { getByLabelText } = render(
    <Settings onCardOrderChange={() => onCardOrderChange()} />
  );

  const select = getByLabelText("Sort cards by:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onCardOrderChange).toHaveBeenCalled();
});
