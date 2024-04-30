import React, { createContext, useContext } from "@wordpress/element";

import { usePreferences } from "../hooks/usePreferences.js";
import { useFinder } from "../hooks/useFinder.js";

// Create a context for the app state.
const FindMyBlocksContext = createContext();

// Create a provider component.
export const FindMyBlocksProvider = ({ children }) => {
  const preferences = usePreferences();

  const searchArgs = {
    posts_per_page: preferences.postsPerRun,
  };

  const finder = useFinder({
    searchArgs,
  });

  const contextValue = {
    preferences: preferences,
    finder: finder,
  };

  return (
    <FindMyBlocksContext.Provider value={contextValue}>
      {children}
    </FindMyBlocksContext.Provider>
  );
};

// Create a custom hook to use the app state context.
export const useFindMyBlocks = () => {
  const context = useContext(FindMyBlocksContext);
  if (!context) {
    throw new Error(
      "useFindMyBlocks must be used within an FindMyBlocksProvider"
    );
  }
  return context;
};
