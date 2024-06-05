/**
 * global fmbGlobal
 */
import { Fragment, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { CardGrid } from "../components/PostCards/PostCards.js";
import BlockNavigation from "../components/BlockNavigation/index.js";
import { useFindMyBlocks } from "../context/FindMyBlocksContext.js";
import { getUniqueProviders } from "../utils/functions.js";
import {
  Button,
  ExternalLink,
  RadioControl,
  Notice,
  ComboboxControl,
  SearchControl,
  CheckboxControl,
} from "@wordpress/components";

/**
 * Overview Page.
 */
function SearchPage() {
  const { finder, preferences } = useFindMyBlocks();

  const {
    foundBlocks,
    startSearch,
    abortSearch,
    progress,
    isLoading,
    searchError,
    postsWithBlock,
  } = finder;

  const { selectedBlock, postsPerRun, setPostsPerRun } = preferences;

  if (isLoading)
    return (
      <div className="fmb-bento-container">
        <div className="fmb-bento-grid">
          <div className="fmb-box fmb-box-full">
            <h2>{__("Searching for your blocks...", "find-my-blocks")}</h2>
            <p>
              {__("Progress:", "find-my-blocks")} {progress.percentage}%
            </p>
            <p>
              {__("Scanning batch", "find-my-blocks")} {progress.currentPage}{" "}
              {__("out of", "find-my-blocks")} {progress.totalPages}
            </p>
            <p>
              {__("Total block instances detected:", "find-my-blocks")}{" "}
              {progress.totalBlocks}
              {" " + __("in", "find-my-blocks")} {progress.totalScannedPosts}
              {" " + __("locations.", "find-my-blocks")}
            </p>
            <Button
              onClick={() => abortSearch()}
              isDestructive
              variant="primary"
              disabled={!isLoading}
            >
              {__("Abort Search", "find-my-blocks")}
            </Button>
          </div>
        </div>
      </div>
    );

  const posts = postsWithBlock(selectedBlock);

  if (!searchError && foundBlocks.length > 0) {
    return (
      <Fragment>
        <div className="fmb-container">
          <div className="fmb-grid-results-page">
            <div className="fmb-box">
              <h2>{__("Filters", "find-my-blocks")}</h2>
              <div className="fmb-search-filters">
                <SearchFilter />
                <BlockProviderFilter />
                {fmbGlobal?.conditional_blocks_installed && (
                  <ConditionalBlocksFilter />
                )}
              </div>
              <h2>{__("Found Blocks", "find-my-blocks")}</h2>
              <p>
                {__(
                  "The below blocks have been detected during the scan.",
                  "find-my-blocks"
                )}
              </p>
              <nav className="fmb-side-navigation">
                <BlockNavigation />
              </nav>
            </div>

            <div>
              {selectedBlock && (
                <Fragment>
                  <h2>
                    <span className="fmb-badge">{selectedBlock}</span>
                  </h2>
                  {posts?.length > 0 && (
                    <p>
                      {__("Instances of the", "find-my-blocks")}{" "}
                      <b>{selectedBlock}</b>{" "}
                      {__("block has been found in these", "find-my-blocks")}{" "}
                      {posts.length ?? 0} {__("locations.", "find-my-blocks")}
                    </p>
                  )}
                </Fragment>
              )}
              <CardGrid blockName={selectedBlock} posts={posts}></CardGrid>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ErrorNotice error={searchError} />
      <div className="fmb-bento-container">
        <div className="fmb-bento-grid">
          <div className="fmb-box fmb-box-full">
            <h2>{__("Get Started", "find-my-blocks")}</h2>
            <p>
              {__(
                "Find My Blocks will search through all your templates, posts and pages to find the WordPress blocks.",
                "find-my-blocks"
              )}
            </p>

            <RadioControl
              className="fmb-performance-control"
              label="Performance"
              help={__(
                "Warning! Choose the performance level that matches your server. Fetching too may posts at once may temporarily crash your site.",
                "find-my-blocks"
              )}
              onChange={(val) => {
                setPostsPerRun(val);
              }}
              options={[
                {
                  label: __(
                    "Low (Recommended for most sites, 10 post per run)",
                    "find-my-blocks"
                  ),
                  value: 10,
                },
                {
                  label: __("Standard (100 posts per run)", "find-my-blocks"),
                  value: 100,
                },
                {
                  label: __("Ultra (500 posts per run)", "find-my-blocks"),
                  value: 500,
                },
              ]}
              selected={postsPerRun ?? 10}
            />

            <Button
              onClick={() => startSearch()}
              variant="primary"
              disabled={isLoading}
            >
              {__("Start Search", "find-my-blocks")}
            </Button>
          </div>
          <div className="fmb-box">
            <h2>{__("Block Tools & Resources", "find-my-blocks")}</h2>
            <p>
              {__(
                "Create faster & better WordPress sites with block tutorials from experts.",
                "find-my-blocks"
              )}
            </p>
            <ul>
              <li>
                <ExternalLink
                  href="https://findmyblocks.com?utm_source=wordpress_site&utm_medium=start&utm_campaign=find_my_blocks_active_install"
                  target="_blank"
                >
                  findmyblocks.com
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://conditionalblocks.com/?utm_source=wordpress_site&utm_medium=start&utm_campaign=find_my_blocks_active_install"
                  target="_blank"
                >
                  Conditional Blocks plugin
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://morganhvidt.com/?utm_source=wordpress_site&utm_medium=start&utm_campaign=find_my_blocks_active_install"
                  target="_blank"
                >
                  @MorganHvidt
                </ExternalLink>
                {__("(Developer) ", "find-my-blocks")}
              </li>
            </ul>
          </div>
          <div className="fmb-box">
            <h2>{__("Support Development", "find-my-blocks")}</h2>
            <p>
              {__(
                "I'm building Find My Blocks in my free time. If you find it useful, please consider donating, or contributing to the project.",
                "find-my-blocks"
              )}{" "}
              <em>- Morgan Hvidt</em>
            </p>
            <div style={{ marginTop: "30px" }}>
              <Button
                isSecondary
                target="_blank"
                href="https://github.com/morganhvidt/find-my-blocks/"
              >
                {__("Contribute on Github", "find-my-blocks")}
              </Button>{" "}
              <Button
                style={{ marginLeft: "10px" }}
                isSecondary
                target="_blank"
                href="https://morganhvidt.com/donate/"
              >
                {__("Donate to development", "find-my-blocks")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const ErrorNotice = ({ error }) => {
  if (error) {
    return (
      <Notice className="fmb-error-notice" isDismissible={false} status="error">
        {error}
      </Notice>
    );
  }

  return null;
};

function SearchFilter({ className }) {
  const { finder, preferences } = useFindMyBlocks();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (value) => {
    setSearchInput(value);
    finder.setFilters((prev) => ({
      ...prev,
      name: value.length ? value : false,
    }));
  };

  return <SearchControl value={searchInput} onChange={handleSearch} />;
}

/**
 * Component for filtering block providers.
 */
function BlockProviderFilter() {
  const { finder, preferences } = useFindMyBlocks();

  const [blockProvider, setBlockProvider] = useState(
    preferences?.selectedProvider ?? false
  );

  const handleChange = (value) => {
    setBlockProvider(value);
    preferences?.setSelectedProvider(value);
    finder.setFilters((prev) => ({
      ...prev,
      blockProvider: value ?? false,
    }));
  };

  const providers = getUniqueProviders(finder.foundBlocks);

  return (
    <ComboboxControl
      allowReset
      label="Block Provider"
      help="Core or third-party block providers"
      value={blockProvider}
      onChange={handleChange}
      options={providers}
      onFilterValueChange={(inputValue) =>
        setBlockProvider(
          providers.filter((option) =>
            option.label.toLowerCase().startsWith(inputValue.toLowerCase())
          )
        )
      }
    />
  );
}
/**
 * Conditional Blocks Integration.
 */
const ConditionalBlocksFilter = () => {
  const { finder } = useFindMyBlocks();

  const handleChange = (value) => {
    finder.setFilters((prev) => ({
      ...prev,
      hasConditionalBlocks: value ? true : false,
    }));
  };

  return (
    <CheckboxControl
      label="Conditional Blocks"
      help={__(
        "Only blocks with visibility changed by the Conditional Blocks plugin",
        "find-my-blocks"
      )}
      checked={finder?.filters?.hasConditionalBlocks}
      onChange={handleChange}
    />
  );
};

export default SearchPage;
