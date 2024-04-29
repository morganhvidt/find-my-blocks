/**
 * Global fmbGlobal
 */
import { useState, useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
/**
 * Fetch the blocks from the server.
 * the blocks contain the following fields.
 *
 * count, edit_url, id, isNested, isReusable, nestedBlockType, postType, post_url, status, title
 */
export const useFinder = ({
  searchArgs = {},
  cachedFoundBlocks = [],
  setCachedFoundBlocks,
}) => {
  const filtersDefault = {
    name: false,
    blockProvider: false,
    hasConditionalBlocks: false,
  };

  const [foundBlocks, setFoundBlocks] = useState([]);
  const [filters, setFilters] = useState(filtersDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState({
    currentPage: 0,
    totalPages: 0,
    percentage: 0,
    totalPosts: 0,
    totalBlocks: 0,
    totalScannedPosts: 0,
  });

  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for ascending, 'desc' for descending.

  const abortControllerRef = useRef(null);

  /**
   * Abort the search.
   */
  const abortSearch = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      console.log("Search aborted by user.");
      setError(new Error(__("Search aborted by user", "find-my-blocks"))); // Set an error state indicating the search was aborted
    }
  };

  /**
   * Get the posts with a specific block.
   * @param {string} blockName - The name of the block.
   * @returns {Array} The posts with the block.
   */
  const postsWithBlock = (blockName) => {
    const block = withFilters(foundBlocks).find(
      (block) => block.name === blockName
    );

    return block ? block.posts : [];
  };

  /**
   * Start the search.
   */
  const startSearch = async () => {
    reset();
    setIsLoading(true);
    // Create a new instance of AbortController for the entire batch search
    const controller = new AbortController();
    abortControllerRef.current = controller; // Keep a reference to the controller

    let currentPage = 1;
    let totalPages = 0;
    let totalPosts = 0;
    let totalScannedPosts = 0;
    let localBatchResults = []; // Local variable to keep track of batch results.
    let totalBlockInstances = 0; // Keep track of total block instances detected.
    let searchStatus = "in_process"; // Track the search status

    try {
      while (
        (currentPage <= totalPages || currentPage === 1) &&
        !abortControllerRef.current.signal.aborted &&
        searchStatus === "in_process" // Check if the search is still in process
      ) {
        const timeoutId = setTimeout(() => controller.abort(), 15000); // Abort the search after 15 seconds of inactivity.

        const queryString = new URLSearchParams({
          ...searchArgs,
          paged: currentPage,
        }).toString();

        try {
          const searchResponse = await apiFetch({
            path: `find-my-blocks/v1/search?${queryString}`,
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          // Add a 1 second delay between requests to avoid server overload.
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Exit early if no data is returned.
          if (!searchResponse?.data) {
            throw new Error("No data returned from the server.");
          }

          const { blocks, scanned_posts, total_posts, total_pages } =
            searchResponse.data;

          if (currentPage === 1) {
            totalPages = total_pages;
            totalPosts = total_posts;
          }

          totalBlockInstances += blocks.reduce(
            (sum, block) => sum + block.posts.length,
            0
          );

          totalScannedPosts += scanned_posts;

          setProgress({
            currentPage,
            totalPages: totalPages,
            percentage: Math.round((currentPage / totalPages) * 100),
            totalBlocks: totalBlockInstances,
            totalPosts: totalPosts,
            totalScannedPosts: totalScannedPosts, // Some might have been skipped server side.
          });

          localBatchResults = localBatchResults.concat(blocks);

          currentPage++;

          if (currentPage > total_pages) {
            searchStatus = "completed"; // All pages of the WP_Query has been scanned.
            break;
          }
        } catch (error) {
          clearTimeout(timeoutId);

          if (error.name === "AbortError") {
            console.error(
              "Search aborted or timeout reached - Please try lower the amount of posts to search per request.",
              error
            );
            setError(
              new Error(
                "Abort/timeout error. Try choosing a lower amount of posts to search per request."
              )
            );
          } else {
            console.error("Error fetching blocks:", error);
            setError(error);
          }

          searchStatus = "failed"; // Update the search status to failed
          break;
        }
      }
    } finally {
      abortControllerRef.current = null;

      if (searchStatus === "completed" && localBatchResults.length > 0) {
        const mergedBlocks = mergeBlocks(localBatchResults);
        const sortedBlocks = changeBlockSorting(sortOrder, mergedBlocks);

        setFilters(filtersDefault);
        setFoundBlocks(sortedBlocks);
        setCachedFoundBlocks(sortedBlocks);
      } else {
        setError(
          new Error("Search completed with no results or an error occurred.")
        );

        reset();
      }

      // Add a 1 second delay to view the finished search stats.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false);
    }
  };

  /**
   * Reset the search state to its initial values.
   */
  const reset = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setFoundBlocks([]);
    setCachedFoundBlocks([]);
    setIsLoading(false);
    setError(null);
    setProgress({
      currentPage: 0,
      totalPages: 0,
      percentage: 0,
      totalPosts: 0,
      totalBlocks: 0,
      totalScannedPosts: 0,
    });
    setSortOrder("asc");
  };

  let firstLoad = true;

  useEffect(() => {
    if (firstLoad && cachedFoundBlocks && cachedFoundBlocks.length > 0) {
      firstLoad = false;
      setFoundBlocks(changeBlockSorting(sortOrder, cachedFoundBlocks));
    }
  }, [cachedFoundBlocks]);

  const changeBlockSorting = (order, foundBlocks) => {
    // First, sort the blocks
    const sortedBlocks = [...foundBlocks].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    // Then, sort the posts within each block
    sortedBlocks.forEach((block) => {
      if (block.posts && Array.isArray(block.posts)) {
        block.posts.sort((a, b) => {
          if (order === "asc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        });
      }
    });

    return sortedBlocks;
  };

  const withFilters = (blocks) => {
    if (filters.name) {
      blocks = blocks.filter((block) =>
        block.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.blockProvider) {
      blocks = blocks.filter((block) =>
        block.name
          .split("/")[0]
          .toLowerCase()
          .includes(filters.blockProvider.toLowerCase())
      );
    }

    /**
     * Conditional Blocks Integration.
     */
    if (filters.hasConditionalBlocks) {
      blocks = blocks
        .map((block) => {
          // Filter out posts that do not have hasConditionalBlocks
          const filteredPosts = block.posts.filter(
            (post) => post.hasConditionalBlocks
          );
          // Return the block with the filtered posts, or null if no posts left
          return filteredPosts.length > 0
            ? { ...block, posts: filteredPosts }
            : null;
        })
        .filter((block) => block !== null); // Remove blocks that have no posts left
    }

    return blocks;
  };

  return {
    reset,
    foundBlocks,
    withFilters,
    setFilters,
    isLoading,
    error,
    startSearch,
    abortSearch,
    progress,
    postsWithBlock,
  };
};

/**
 * Merge blocks from different requests.
 * @param {Array} blocks - The blocks to merge.
 * @returns {Array} The merged blocks.
 */
const mergeBlocks = (blocks) => {
  const blockMap = new Map();

  blocks.forEach((newBlock) => {
    if (blockMap.has(newBlock.name)) {
      // Merge posts if the block already exists
      const existingBlock = blockMap.get(newBlock.name);
      newBlock.posts.forEach((newPost) => {
        const existingPostIndex = existingBlock.posts.findIndex(
          (post) => post.id === newPost.id
        );
        if (existingPostIndex !== -1) {
          // Combine the count if the post already exists
          existingBlock.posts[existingPostIndex].count += newPost.count;
        } else {
          // Add the new post if it doesn't exist
          existingBlock.posts.push(newPost);
        }
      });
    } else {
      // Add the new block if it doesn't exist
      blockMap.set(newBlock.name, {
        ...newBlock,
        posts: [...newBlock.posts],
      });
    }
  });

  // Convert the map back to an array
  return Array.from(blockMap.values());
};
