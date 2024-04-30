import { useState, useEffect } from "react";

function useIndexedDB(databaseName, storeName, key) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (!window.indexedDB) {
      console.error("IndexedDB is not supported by this browser.");
      return;
    }

    try {
      const request = window.indexedDB.open(databaseName);

      request.onerror = function (event) {
        console.error(
          "Error opening IndexedDB database:",
          event.target.errorCode
        );
      };

      request.onupgradeneeded = function (event) {
        const db = event.target.result;
        db.createObjectStore(storeName);
      };

      request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(key);
        request.onerror = function (event) {
          console.error(
            "Error getting value from IndexedDB:",
            event.target.errorCode
          );
        };
        request.onsuccess = function (event) {
          setValue(event.target.result);
        };
      };
    } catch (error) {
      console.error("An unexpected error occurred with IndexedDB:", error);
    }
  }, [databaseName, storeName, key]);

  function setValueToIndexedDB(newValue) {
    if (!window.indexedDB) {
      console.error("IndexedDB is not supported by this browser.");
      return;
    }

    try {
      const request = window.indexedDB.open(databaseName);
      request.onerror = function (event) {
        console.error(
          "Error opening IndexedDB database:",
          event.target.errorCode
        );
      };

      request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.put(newValue, key);
        request.onerror = function (event) {
          console.error(
            "Error saving value to IndexedDB:",
            event.target.errorCode
          );
        };
        request.onsuccess = function (event) {
          setValue(newValue);
        };
      };
    } catch (error) {
      console.error("An unexpected error occurred with IndexedDB:", error);
    }
  }

  return [value, setValueToIndexedDB];
}

export default useIndexedDB;
