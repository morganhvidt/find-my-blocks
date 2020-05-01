import React from "react";

import { Card } from "../Card";
import { Select, Option } from "../Select";

interface SettingsProps {
  onNavOrderChange(result: string): void;
  onCardOrderChange(result: string): void;
}

export const Settings = ({
  onNavOrderChange = () => undefined,
  onCardOrderChange = () => undefined,
}: SettingsProps) => {
  return (
    <Card toggle={true} title="Settings" initialOpen={false}>
      <Select
        onChange={(val) => onNavOrderChange(val)}
        label="Sort navigation by:"
      >
        <Option value="a-z">Alphabetically (A-Z)</Option>
        <Option value="z-a">Alphabetically (Z-A)</Option>
        <Option value="high-low">Most Popular</Option>
        <Option value="low-high">Least Popular</Option>
      </Select>

      <Select onChange={(val) => onCardOrderChange(val)} label="Sort cards by:">
        <Option value="a-z">Alphabetically (A-Z)</Option>
        <Option value="z-a">Alphabetically (Z-A)</Option>
        <Option value="popular">Popular</Option>
        <Option value="reusable">Reusable</Option>
      </Select>
    </Card>
  );
};
