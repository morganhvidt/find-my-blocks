/**
 * Global fmbGlobal
 */
import { useLocalStorage } from "./useLocalStorage.js";
/**
 * Store preferences & settings in local storage.
 */
export const usePreferences = () => {
  const [selectedBlock, setSelectedBlock] = useLocalStorage(
    "fmb_selected_block",
    ""
  );
  const [postsPerRun, setPostsPerRun] = useLocalStorage(
    "fmb_posts_per_run",
    10
  );
  const [cachedFoundBlocks, setCachedFoundBlocks] = useLocalStorage(
    "fmb_found_blocks",
    false
  );
  const [selectedProvider, setSelectedProvider] = useLocalStorage(
    "fmb_selected_provider",
    false
  );
  const [versionCache, setVersionCache] = useLocalStorage(
    "fmb_version_cache",
    false
  );
  const [conditionalBlocks, setConditionalBlocks] = useLocalStorage(
    "fmb_conditional_blocks",
    false
  );

  return {
    cachedFoundBlocks:
      fmbGlobal.version === versionCache ? cachedFoundBlocks : false,
    setCachedFoundBlocks: (value) => {
      setVersionCache(fmbGlobal.version);
      setSelectedProvider(false);
      setSelectedBlock(false);
      setConditionalBlocks(false);
      setCachedFoundBlocks(value);
    },
    selectedBlock,
    setSelectedBlock,
    selectedProvider,
    setSelectedProvider,
    postsPerRun: parseInt(postsPerRun),
    setPostsPerRun,
    conditionalBlocks,
    setConditionalBlocks,
  };
};
