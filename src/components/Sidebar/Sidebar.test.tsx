import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Sidebar } from "./";

interface Block {
  name: string;
  posts: Array<String>;
}

import data from "../../data/data.json";
import { NavigationItem } from "../NavigationItem";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer.create(<Sidebar blocks={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("sorts the order of the blocks properly", () => {
  const tree = renderer
    .create(<Sidebar blocks={data} order="nothing" />)
    .toJSON();
  const az = renderer
    .create(
      <Sidebar
        order="az"
        blocks={data as any | Block[]}
        onClick={() => undefined}
      />
    )
    .toJSON();
  const za = renderer
    .create(
      <Sidebar
        order="za"
        blocks={data as any | Block[]}
        onClick={() => undefined}
      />
    )
    .toJSON();
  const highLow = renderer
    .create(<Sidebar blocks={data} order="high-low" />)
    .toJSON();
  const lowHight = renderer
    .create(<Sidebar blocks={data} order="low-high" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  expect(az).toMatchSnapshot();
  expect(za).toMatchSnapshot();
  expect(highLow).toMatchSnapshot();
  expect(lowHight).toMatchSnapshot();
});

it("does nothing no onClick is set", () => {
  const onClick = jest.fn();

  const { getByText } = render(<Sidebar blocks={data} />);

  fireEvent.click(getByText("nba/fortean_plasto"));
  expect(onClick).toHaveBeenCalledTimes(0);
});

it("onClick returns the name of the item that was clicked", () => {
  const onClick = jest.fn();
  let s: String = "not the name";

  const { getByText } = render(
    <Sidebar
      blocks={data}
      onClick={(name) => {
        s = name;
        onClick();
      }}
    />
  );

  fireEvent.click(getByText("nba/fortean_plasto"));
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(s).toBe("nba/fortean_plasto");
});

it("filters the blocks down when filter is used", () => {
  const { getByPlaceholderText, queryByText } = render(
    <Sidebar blocks={data} />
  );

  expect(queryByText("nba/fortean_plasto")).not.toBeNull();

  const input = getByPlaceholderText("Filter Blocks");
  fireEvent.change(input, {
    target: { value: "core/group" },
  });

  expect(queryByText("nba/fortean_plasto")).toBeNull();
});

it("returns an empty state", () => {
  const { getByPlaceholderText, queryByText } = render(
    <Sidebar blocks={data} />
  );

  const input = getByPlaceholderText("Filter Blocks");
  fireEvent.change(input, {
    target: { value: "not a block in sight" },
  });

  expect(queryByText("No results found")).not.toBeNull();
});

it("should not show core blocks if `showCoreBlocks` is false", () => {
  const tree = renderer.create(
    <Sidebar
      order="az"
      blocks={data as any | Block[]}
      onClick={() => undefined}
      showCoreBlocks={false}
    />
  ).root;

  const items = tree.findAllByType(NavigationItem);
  let labelString = "";
  items.forEach((item) => {
    labelString = `${labelString}, ${item.props.label}`;
  });

  expect(labelString).not.toContain("core/");
});

it("should show core blocks if `showCoreBlocks` is true", () => {
  const tree = renderer.create(
    <Sidebar
      order="az"
      blocks={data as any | Block[]}
      onClick={() => undefined}
      showCoreBlocks={true}
    />
  ).root;

  const items = tree.findAllByType(NavigationItem);
  let labelString = "";
  items.forEach((item) => {
    labelString = `${labelString}, ${item.props.label}`;
  });

  expect(labelString).toContain("core/");
});
