import React from "react";
import renderer from "react-test-renderer";
import { Filter } from "./";

it("returns the correct data", () => {
  let results = [] as any;
  const data = [
    {
      team: "Raptors",
    },
    { team: "Lakers" },
  ];

  const tree = renderer.create(
    <Filter
      data={data}
      value="Raptors"
      match="team"
      renderedResults={(val) => {
        results = val;
        return <div>{JSON.stringify(val)}</div>;
      }}
    />
  ).toJSON;

  expect(results).toEqual([{ team: "Raptors" }]);
  expect(tree).toMatchSnapshot();
});
