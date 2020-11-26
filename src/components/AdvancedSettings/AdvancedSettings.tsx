/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useLayoutEffect, useState } from "react";
import { throttle } from "lodash";

import * as styles from "./styles";

import {
  CheckboxControl,
  PanelBody,
  PanelRow,
  Button,
} from "@wordpress/components";

import { updateSettings } from "../../helpers/updateSettings";

declare var find_my_blocks_globals: any;

export function AdvancedSettings() {
  const [drafts, setDrafts] = useState(false);

  useLayoutEffect(() => {
    const { settings } = find_my_blocks_globals;
    if (settings.drafts) {
      setDrafts(settings.drafts);
    }
  }, []);

  const handleClick = throttle(() => {
    const settings = {
      drafts,
    };

    updateSettings(settings);
  }, 1000);

  return (
    <Fragment>
      <PanelBody title="Advanced Settings" icon="admin-generic">
        <PanelRow sx={styles.help}>
          <CheckboxControl
            label="Include drafts in query"
            help="Warning: Enabling this feature could slow down the loading of the plugin depending on how many drafts your website has."
            onChange={(val) => {
              setDrafts(val);
            }}
            checked={drafts}
          />
        </PanelRow>
        <PanelRow>
          <Button type="submit" isPrimary onClick={handleClick} sx={{ mt: 2 }}>
            Save Settings
          </Button>
        </PanelRow>
      </PanelBody>
    </Fragment>
  );
}
