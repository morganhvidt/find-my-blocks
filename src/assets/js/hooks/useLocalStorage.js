import { useState, useEffect, useCallback } from "@wordpress/element";
/**
 * Helper for setting local storage. useEffect to prevent hydration errors.
 * @param {*} key
 * @returns
 */
// A simple pub-sub mechanism for preferences
const preferenceSubscribers = new Map();

const notifyPreferenceSubscribers = (key, value) => {
  const callbacks = preferenceSubscribers.get(key) || [];
  callbacks.forEach((callback) => callback(value));
};

const subscribeToPreference = (key, callback) => {
  if (!preferenceSubscribers.has(key)) {
    preferenceSubscribers.set(key, []);
  }
  preferenceSubscribers.get(key).push(callback);
};

const unsubscribeFromPreference = (key, callback) => {
  const callbacks = preferenceSubscribers.get(key) || [];
  const index = callbacks.indexOf(callback);
  if (index > -1) {
    callbacks.splice(index, 1);
  }
};

/**
 * Helper for setting local storage. useEffect to prevent hydration errors.
 * @param {*} key
 * @returns
 */
export const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      const existingData = JSON.parse(localStorage.getItem(key));
      setData(existingData ?? defaultValue);
    }
  }, [initialLoad, key, defaultValue]);

  useEffect(() => {
    const handleDataChange = (newData) => {
      setData(newData);
    };

    subscribeToPreference(key, handleDataChange);

    return () => {
      unsubscribeFromPreference(key, handleDataChange);
    };
  }, [key]);

  const saveDataToLocalStorage = useCallback(
    (newData) => {
      localStorage.setItem(key, JSON.stringify(newData));
      notifyPreferenceSubscribers(key, newData);
    },
    [key]
  );

  return [data, saveDataToLocalStorage];
};
