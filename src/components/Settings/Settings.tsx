import React from "react";

import { Card } from "../Card";
import { Select, Option } from "../Select";

interface SettingsProps {
  onNavOrderChange(result: String): void;
  onCardOrderChange(result: String): void;
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
        <Option value="high-low">Number of posts (High - Low)</Option>
        <Option value="a-z">Number of posts (Low - High)</Option>
      </Select>

      <Select onChange={(val) => onCardOrderChange(val)} label="Sort cards by:">
        <Option value="a-z">Alphabetically (A-Z)</Option>
        <Option value="z-a">Alphabetically (Z-A)</Option>
        <Option value="high-low">Number of posts (High - Low)</Option>
        <Option value="a-z">Number of posts (Low - High)</Option>
      </Select>
    </Card>
  );
};
