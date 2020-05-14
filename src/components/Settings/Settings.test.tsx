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

  const select = getByLabelText("Sort navigation:");
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

  const select = getByLabelText("Sort navigation:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onNavOrderChange).toHaveBeenCalled();
});

it("returns nothing if `onCardOrderChange` is not set", () => {
  const onCardOrderChange = jest.fn();
  const { getByLabelText } = render(<Settings />);

  const select = getByLabelText("Sort cards:");
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

  const select = getByLabelText("Sort cards:");
  fireEvent.change(select, {
    target: { value: "Test" },
  });

  expect(onCardOrderChange).toHaveBeenCalled();
});

it("fires an event for `onShowCoreBlocksClick`", () => {
  const onShowCoreBlocksClick = jest.fn();
  const { getByLabelText } = render(
    <Settings
      onShowCoreBlocksClick={() => onShowCoreBlocksClick()}
      onCardOrderChange={() => undefined}
      navOrder={""}
      cardOrder={""}
      showCoreBlocks={false}
      initialOpen={true}
      onNavOrderChange={() => undefined}
    />
  );

  const checkbox = getByLabelText("Show core blocks");
  fireEvent.click(checkbox);

  expect(onShowCoreBlocksClick).toHaveBeenCalled();
});

it("does nothing if `onShowCoreBlocksClick` not set", () => {
  const onShowCoreBlocksClick = jest.fn();
  const { getByLabelText } = render(
    // Ignoring for purpose of test
    // @ts-ignore
    <Settings
      onCardOrderChange={() => undefined}
      navOrder={""}
      cardOrder={""}
      showCoreBlocks={false}
      initialOpen={true}
      onNavOrderChange={() => undefined}
    />
  );

  const checkbox = getByLabelText("Show core blocks");
  fireEvent.click(checkbox);

  expect(onShowCoreBlocksClick).not.toHaveBeenCalled();
});
