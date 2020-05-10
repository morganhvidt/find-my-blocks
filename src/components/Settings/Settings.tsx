import React from "react";
// @ts-ignore
import { cog } from "@wordpress/icons";
import {
  Panel,
  PanelRow,
  PanelBody,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";

import styles from "./Settings.module.css";

interface SettingsProps {
  readonly navOrder: string;
  readonly cardOrder: string;
  readonly showCoreBlocks: boolean;
  readonly initialOpen: boolean;
  onNavOrderChange(result: string): void;
  onCardOrderChange(result: string): void;
  onShowCoreBlocksClick(result: boolean): void;
}

export const Settings = ({
  navOrder,
  cardOrder,
  showCoreBlocks,
  initialOpen = true,
  onNavOrderChange = () => undefined,
  onCardOrderChange = () => undefined,
  onShowCoreBlocksClick = () => undefined,
}: SettingsProps) => {
  const alphabetical = [
    { label: "Alphabetically (A-Z)", value: "az" },
    { label: "Alphabetically (Z-A)", value: "za" },
  ];

  const blockTypes = [
    {
      type: "core",
      checked: showCoreBlocks,
      onChange: (val: boolean) => onShowCoreBlocksClick(val),
    },
  ];

  return (
    <Panel>
      <PanelBody title="Settings" icon={cog} initialOpen={initialOpen}>
        <PanelRow>
          <SelectControl
            label="Sort navigation:"
            value={navOrder}
            options={[
              ...alphabetical,
              { label: "Most Popular", value: "high-low" },
              { label: "Least Popular", value: "low-high" },
            ]}
            onChange={(val) => onNavOrderChange(val)}
            className={styles.select}
          />
        </PanelRow>
        <PanelRow>
          <SelectControl
            label="Sort cards:"
            value={cardOrder}
            options={[
              ...alphabetical,
              { label: "Most Popular", value: "popular" },
              { label: "Reusable First", value: "reusable" },
            ]}
            onChange={(val) => onCardOrderChange(val)}
            className={styles.select}
          />
        </PanelRow>

        <h4>Show/hide block types</h4>

        {blockTypes.map(({ type, checked, onChange }) => (
          <ToggleControl
            key={type}
            label={`Show ${type} blocks`}
            checked={checked}
            onChange={(val) => onChange(val)}
          />
        ))}
      </PanelBody>
    </Panel>
  );
};
