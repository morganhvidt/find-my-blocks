/** @jsx jsx */
import { jsx } from "theme-ui";
import { render, cleanup } from "@testing-library/react";

import { Heading } from ".";

afterEach(cleanup);

it("renders an h1 by default", () => {
  const { container } = render(<Heading>Hello</Heading>);
  expect(container.querySelector("h1")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h1 when told to", () => {
  const { container } = render(<Heading level={1}>Hello</Heading>);
  expect(container.querySelector("h1")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h2 when told to", () => {
  const { container } = render(<Heading level={2}>Hello</Heading>);
  expect(container.querySelector("h2")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h3 when told to", () => {
  const { container } = render(<Heading level={3}>Hello</Heading>);
  expect(container.querySelector("h3")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h4 when told to", () => {
  const { container } = render(<Heading level={4}>Hello</Heading>);
  expect(container.querySelector("h4")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h5 when told to", () => {
  const { container } = render(<Heading level={5}>Hello</Heading>);
  expect(container.querySelector("h5")).toBeInstanceOf(HTMLHeadingElement);
});

it("renders an h6 when told to", () => {
  const { container } = render(<Heading level={6}>Hello</Heading>);
  expect(container.querySelector("h6")).toBeInstanceOf(HTMLHeadingElement);
});
