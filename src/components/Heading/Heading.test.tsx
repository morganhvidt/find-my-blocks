import React from "react";
import renderer from "react-test-renderer";
import { Heading } from "./";

it("render correctly", () => {
  const tree = renderer.create(<Heading>Heading</Heading>).toJSON();
  expect(tree.type).toBe("h1");
  expect(tree).toMatchSnapshot();
});

it("render h1-h6 correctly", () => {
  const h1 = renderer.create(<Heading level={1}>Heading</Heading>).toJSON();
  const h2 = renderer.create(<Heading level={2}>Heading</Heading>).toJSON();
  const h3 = renderer.create(<Heading level={3}>Heading</Heading>).toJSON();
  const h4 = renderer.create(<Heading level={4}>Heading</Heading>).toJSON();
  const h5 = renderer.create(<Heading level={5}>Heading</Heading>).toJSON();
  const h6 = renderer.create(<Heading level={6}>Heading</Heading>).toJSON();
  expect(h1.type).toBe("h1");
  expect(h2.type).toBe("h2");
  expect(h3.type).toBe("h3");
  expect(h4.type).toBe("h4");
  expect(h5.type).toBe("h5");
  expect(h6.type).toBe("h6");
});
