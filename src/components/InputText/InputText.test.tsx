import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { InputText } from "./";

afterEach(cleanup);

it("render correctly", () => {
  const tree = renderer.create(<InputText defaultValue="hello" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a textarea if multiline is used", () => {
  const { getByPlaceholderText } = render(
    <InputText placeholder="placeholder" multiline />
  );
  const input = getByPlaceholderText("placeholder");
  expect(input).toBeInstanceOf(HTMLTextAreaElement);
});

it("calls the onchange function when typed in", () => {
  const placeholder = "Test";
  const value = "Hello";
  const changeHandler = jest.fn();
  const { getByPlaceholderText } = render(
    <InputText placeholder={placeholder} onChange={changeHandler} />
  );
  const input = getByPlaceholderText(placeholder);
  fireEvent.change(input, { target: { value: value } });

  expect(changeHandler).toHaveBeenCalledWith(value);
});
