import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Select, Option } from "./";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer.create(
    <Select label="Test Label">
      <Option>Test</Option>
      <Option selected>Selected</Option>
      <Option value="withVal">With Val</Option>
    </Select>
  ).toJSON;
  expect(tree).toMatchSnapshot();
});

it("does not fires an event for `onChange` if no onChange set", () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <Select label="test">
      <Option value="1">1</Option>
      <Option value="2">2</Option>
    </Select>
  );
  const select = getByLabelText("test");
  fireEvent.change(select, {
    target: { value: "2" },
  });

  expect(onChange).not.toHaveBeenCalled();
});

it("fires an event for `onChange`", () => {
  const onChange = jest.fn();
  let v = "1";
  const { getByLabelText } = render(
    <Select
      label="test"
      onChange={(val) => {
        onChange();
        v = val;
      }}
    >
      <Option value="1">1</Option>
      <Option value="2">2</Option>
    </Select>
  );
  const select = getByLabelText("test");
  fireEvent.change(select, {
    target: { value: "2" },
  });

  expect(onChange).toHaveBeenCalled();
  expect(v).toEqual("2");
});
