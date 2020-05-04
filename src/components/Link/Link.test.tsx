import React from "react";
import renderer from "react-test-renderer";
import { Link } from "./";

it("render correctly", () => {
  const tree = renderer
    .create(<Link url="https://eddysims.com">Link</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("can open in a new tab", () => {
  const tree = renderer
    .create(
      <Link url="https://eddysims.com" openInNewTab>
        Link
      </Link>
    )
    .toJSON();
  if (tree) {
    expect(tree.props.target).toBe("_blank");
    expect(tree).toMatchSnapshot();
  }
});

it("will render an icon", () => {
  const tree = renderer
    .create(
      <Link url="https://eddysims.com" openInNewTab icon="camera">
        Link
      </Link>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
