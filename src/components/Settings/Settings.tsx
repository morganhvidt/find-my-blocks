/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Icon } from "../Icon";
import {
  Card,
  CardBody,
  CardHeader,
  SelectControl,
  CheckboxControl,
} from "@wordpress/components";

interface SettingsProps {
  // readonly navOrder: string;
  // readonly cardOrder: string;
  // readonly showCoreBlocks: boolean;
  // readonly initialOpen: boolean;
  // onNavOrderChange(result: string): void;
  // onCardOrderChange(result: string): void;
  // onShowCoreBlocksClick(result: boolean): void;
}

export const Settings = () => {
  /**
   * We must check for window when using @wordpress/components
   */
  if (typeof window === "undefined") return <Fragment></Fragment>;

  const options = [
    {
      label: "Alphabetically (A-Z)",
      value: "alphabet-az",
    },
    {
      label: "Alphabetically (Z-A)",
      value: "alphabet-za",
    },
    {
      label: "Most Popular",
      value: "high-low",
    },
    {
      label: "Least Popular",
      value: "low-high",
    },
  ];

  return (
    <Fragment>
      <Card size="small" sx={{ mb: 3 }}>
        <CardHeader>
          <strong>Settings</strong> <Icon icon="settings" size={16} />
        </CardHeader>

        <CardBody>
          <SelectControl
            label="Sort navigation by:"
            options={options}
            onChange={(val) => handleChange(val, "sortNavBy")}
          />
          <SelectControl
            label="Sort cards by:"
            options={options}
            onChange={(val) => handleChange(val, "sortCardsBy")}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <strong>Show/hide block types</strong> <Icon icon="eye" size={16} />
        </CardHeader>

        <CardBody>
          <CheckboxControl
            label="Show core blocks"
            onChange={(val) => handleChange(val, "showCoreBlocks")}
          />
        </CardBody>
      </Card>
    </Fragment>
  );

  function handleChange(value: unknown, action: string) {
    console.log({ action, value });
  }
};
