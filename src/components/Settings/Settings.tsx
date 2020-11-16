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

export type SettingsSelectOption =
  | "alphabet-az"
  | "alphabet-za"
  | "high-low"
  | "low-high";

export interface SettingsState {
  navigationOrder: SettingsSelectOption;
  cardOrder: SettingsSelectOption;
  showCoreBlocks: boolean;
}

export type SettingsReducerTypes =
  | "navigationOrder"
  | "cardOrder"
  | "showCoreBlocks";

export interface SettingsReducer {
  type: SettingsReducerTypes;
  value: SettingsSelectOption | boolean;
}

interface SettingsProps {
  state: SettingsState;
  onChange(dispatch: SettingsReducer): void;
}

export const Settings = ({ state, onChange }: SettingsProps) => {
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
            value={state.navigationOrder}
            options={options}
            onChange={(val) => handleChange(val, "navigationOrder")}
          />
          <SelectControl
            label="Sort cards by:"
            value={state.cardOrder}
            options={options}
            onChange={(val) => handleChange(val, "cardOrder")}
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
            checked={state.showCoreBlocks}
            onChange={(val) => handleChange(val, "showCoreBlocks")}
          />
        </CardBody>
      </Card>
    </Fragment>
  );

  function handleChange(
    value: boolean | SettingsSelectOption,
    type: SettingsReducerTypes
  ) {
    onChange({ type, value });
  }
};
