import {
  Button,
  DropdownMenu,
  MenuGroup,
  MenuItem,
} from "@wordpress/components";
import style from "./PageHeader.module.css";
import { __ } from "@wordpress/i18n";
import Logo from "../../../images/find-my-blocks-logo-full.svg";
import { useFindMyBlocks } from "../../context/FindMyBlocksContext.js";

const PageHeader = ({ children }) => {
  const { finder } = useFindMyBlocks();
  const { isLoading, reset, startSearch, foundBlocks } = finder;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.container}>
          <img
            className={style.logo}
            src={Logo}
            alt="Find My Blocks Logo"
            onClick={() => (foundBlocks.length > 0 ? reset() : false)}
          />
          <div className={style.headerNavigation}>
            <Button
              onClick={() => (foundBlocks.length > 0 ? reset() : startSearch())}
              icon={foundBlocks.length > 0 ? "update-alt" : null}
              isPrimary
              disabled={isLoading}
            >
              {foundBlocks.length > 0 // If there are found blocks, show "Search Again"
                ? __("Re-scan", "find-my-blocks")
                : __("Search", "find-my-blocks")}
            </Button>
            <DropdownMenu icon="menu" label="Select a direction">
              {({ onClose }) => (
                <>
                  <MenuGroup label={__("Quick Links", "find-my-blocks")}>
                    <MenuItem
                      href={
                        fmbGlobal.admin_url + "/edit.php?post_type=wp_block"
                      }
                    >
                      {__("Reusable Patterns", "find-my-blocks")}
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup label={__("Support", "find-my-blocks")}>
                    <MenuItem
                      icon="star-filled"
                      href="https://wordpress.org/support/plugin/find-my-blocks/reviews/"
                      target="_blank"
                    >
                      {__("Review on wp.org", "find-my-blocks")}
                    </MenuItem>
                    <MenuItem
                      icon="sos"
                      href="https://wordpress.org/support/plugin/find-my-blocks/"
                      target="_blank"
                    >
                      {__("Support forum", "find-my-blocks")}
                    </MenuItem>
                    <MenuItem
                      icon="external"
                      href="https://findmyblocks.com/?utm_source=wordpress_site&utm_medium=navigation&utm_campaign=find_my_blocks_active_install"
                      target="_blank"
                    >
                      findmyblocks.com
                    </MenuItem>
                  </MenuGroup>
                </>
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
