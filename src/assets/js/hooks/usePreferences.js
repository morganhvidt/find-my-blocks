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

  const [selectedProvider, setSelectedProvider] = useLocalStorage(
    "fmb_selected_provider",
    false
  );
  const [conditionalBlocks, setConditionalBlocks] = useLocalStorage(
    "fmb_conditional_blocks",
    false
  );

  return {
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
