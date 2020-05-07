import React from "react";
// @ts-ignore
import { menu, preformatted, eye } from "@wordpress/icons";
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
  onNavOrderChange(result: string): void;
  onCardOrderChange(result: string): void;
  onShowCoreBlocksClick(result: boolean): void;
}

export const Settings = ({
  navOrder,
  cardOrder,
  showCoreBlocks,
  onNavOrderChange = () => undefined,
  onCardOrderChange = () => undefined,
  onShowCoreBlocksClick = () => undefined,
}: SettingsProps) => {
  const alphabetical = [
    { label: "Alphabetically (A-Z)", value: "az" },
    { label: "Alphabetically (Z-A)", value: "za" },
  ];

  return (
    <Panel header="Settings">
      <PanelBody title="Sort Navigation" icon={menu} initialOpen={true}>
        <PanelRow>
          <SelectControl
            label="Sort Navigation By:"
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
      </PanelBody>
      <PanelBody title="Sort Cards" icon={preformatted} initialOpen={true}>
        <PanelRow>
          <SelectControl
            label="Sort Cards By:"
            value={cardOrder}
            options={[
              ...alphabetical,
              { label: "Popular", value: "popular" },
              { label: "Reusable", value: "reusable" },
            ]}
            onChange={(val) => onCardOrderChange(val)}
            className={styles.select}
          />
        </PanelRow>
      </PanelBody>
      <PanelBody title="Show/Hide Block Types" icon={eye} initialOpen={true}>
        <ToggleControl
          label="Core blocks"
          help="Example: core/paragraph"
          checked={showCoreBlocks}
          onChange={(val) => onShowCoreBlocksClick(val)}
        />
      </PanelBody>
    </Panel>
  );
};
