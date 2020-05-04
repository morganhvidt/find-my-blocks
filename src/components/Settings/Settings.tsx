import React from "react";

import { Card } from "../Card";
import { Select, Option } from "../Select";

interface SettingsProps {
  readonly navOrder: string;
  readonly cardOrder: string;
  onNavOrderChange(result: string): void;
  onCardOrderChange(result: string): void;
}

export const Settings = ({
  navOrder,
  cardOrder,
  onNavOrderChange = () => undefined,
  onCardOrderChange = () => undefined,
}: SettingsProps) => {
  const alphabetical = [
    {
      value: "a-z",
      text: "Alphabetically (A-Z)",
    },
    {
      value: "z-a",
      text: "Alphabetically (Z-A)",
    },
  ];

  const navOptions = [
    ...alphabetical,
    {
      value: "high-low",
      text: "Most Popular",
    },
    {
      value: "low-high",
      text: "Least Popular",
    },
  ];

  const cardOptions = [
    ...alphabetical,
    {
      value: "popular",
      text: "Popular",
    },
    {
      value: "reusable",
      text: "Reusable",
    },
  ];

  return (
    <Card toggle={true} title="Settings" initialOpen={false}>
      <Select
        onChange={(val) => onNavOrderChange(val)}
        defaultValue={navOrder}
        label="Sort navigation by:"
      >
        {navOptions.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.text}
          </Option>
        ))}
      </Select>

      <Select
        onChange={(val) => onCardOrderChange(val)}
        label="Sort cards by:"
        defaultValue={cardOrder}
      >
        {cardOptions.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.text}
          </Option>
        ))}
      </Select>
    </Card>
  );
};
