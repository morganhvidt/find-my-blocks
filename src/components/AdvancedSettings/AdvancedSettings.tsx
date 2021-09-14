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
  Notice,
} from "@wordpress/components";

import { updateSettings } from "../../helpers/updateSettings";

declare var find_my_blocks_globals: any;

interface NoticeAction {
  readonly label: string;
  readonly url: string;
}
interface NoticeProps {
  readonly status?: "success" | "error";
  readonly message: string;
  readonly actions?: Array<NoticeAction>;
}

export function AdvancedSettings() {
  const [includeDrafts, setIncludeDrafts] = useState(false);
  const [message, setMessage] = useState<NoticeProps | undefined>();

  useLayoutEffect(() => {
    const {
      settings: { include_drafts },
    } = find_my_blocks_globals;

    if (include_drafts) {
      setIncludeDrafts(true);
    }
  }, []);

  const handleClick = throttle(() => {
    updateSettings({ includeDrafts });
    setMessage({
      message: "Settings successfully updated.",
      actions: [
        {
          label: "Refresh page",
          url: "/wp-admin/tools.php?page=find-my-blocks",
        },
      ],
    });
  }, 1000);

  return (
    <Fragment>
      <PanelBody title="Advanced Settings" icon="admin-generic">
        {message && (
          <Notice
            status={message.status || "success"}
            actions={message.actions || []}
            onRemove={() => setMessage(undefined)}
            sx={{ mx: -3, mb: 3, pr: `16px !important` }}
          >
            {message.message}
          </Notice>
        )}
        <PanelRow sx={styles.help}>
          <CheckboxControl
            label="Include drafts in query"
            help="Warning: Enabling this feature could slow down the loading of the plugin depending on how many drafts your website has."
            onChange={(val) => {
              setIncludeDrafts(val);
            }}
            checked={includeDrafts}
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
