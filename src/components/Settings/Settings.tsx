import React from "react";
import {
  LocalStorageAction,
  LocalStorageActionTypes,
  LocalStorageState,
} from "../App/localStorageReducer";

import {
  CheckboxControl,
  Panel,
  PanelBody,
  PanelRow,
  SelectControl,
} from "@wordpress/components";

import { AdvancedSettings } from "../AdvancedSettings";

//@ts-expect-error
import * as styles from "./Settings.module.css";

interface SettingsProps {
  state: LocalStorageState;
  // eslint-disable-next-line no-unused-vars
  onChange({ type, value }: LocalStorageAction): void;
}

export const Settings = ({ onChange, state }: SettingsProps) => {
  const alphabeticalOptions = [
    { value: "alphabetical-a-z", label: "Alphabetical (a-z)" },
    { value: "alphabetical-z-a", label: "Alphabetical (z-a)" },
  ];

  return (
    <Panel className={styles.settings} header="Settings">
      <PanelBody>
        <PanelRow>
          <SelectControl
            label="Sort navigation by:"
            value={state.navOrder}
            options={[
              ...alphabeticalOptions,
              { value: "count-high-low", label: "Most popular" },
              { value: "count-low-high", label: "Least popular" },
            ]}
            onChange={(value: string) => handleChange("navOrder", value)}
          />
        </PanelRow>
        <PanelRow>
          <SelectControl
            label="Sort cards by:"
            value={state.cardOrder}
            options={[
              ...alphabeticalOptions,
              { value: "count-high-low", label: "Most popular" },
              { value: "reusable", label: "Reusable first" },
              { value: "nested", label: "Nested first" },
            ]}
            onChange={(value: string) => handleChange("cardOrder", value)}
          />
        </PanelRow>
      </PanelBody>

      <PanelBody title="Show/hide blocks" icon="visibility">
        <PanelRow>
          <CheckboxControl
            label="Show core blocks"
            checked={state.showCoreBlocks}
            onChange={(value: boolean) => handleChange("showCoreBlocks", value)}
          />
        </PanelRow>
      </PanelBody>

      <AdvancedSettings />
    </Panel>
  );

  function handleChange(
    type: LocalStorageActionTypes,
    value: string | boolean
  ) {
    onChange({ type, value });
  }
};
