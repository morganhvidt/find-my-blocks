import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { InputText } from "./";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer
    .create(<InputText onChange={() => undefined} defaultValue="hello" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls the onchange function when typed in", () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <InputText placeholder="Test" onChange={() => onChange()} />
  );
  const input = getByPlaceholderText("Test");
  fireEvent.change(input, {
    target: { value: "Hello" },
  });

  expect(onChange).toHaveBeenCalled();
});

it("does nothing if onChange is not set", () => {
  // eslint-disable-next-line no-unused-vars
  const onChange = jest.fn();
  // @ts-ignore
  const { getByPlaceholderText } = render(<InputText placeholder="Test" />);
  const input = getByPlaceholderText("Test");
  fireEvent.change(input, {
    target: { value: "Hello" },
  });

  expect(onChange).not.toHaveBeenCalled();
});
