import { useEffect, useCallback } from "react";

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export const useScrollToHighlightedItem = (
  highlightedIndex,
  listRef,
  dataLength,
) => {
  const scrollToHighlightedItem = useCallback(() => {
    if (highlightedIndex >= 0 && dataLength > 0) {
      const dropdown = listRef.current;
      if (dropdown) {
        const highlightedItem = dropdown.children[highlightedIndex];
        if (highlightedItem) {
          const dropdownRect = dropdown.getBoundingClientRect();
          const highlightedItemRect = highlightedItem.getBoundingClientRect();

          if (highlightedItemRect.bottom > dropdownRect.bottom) {
            dropdown.scrollTop +=
              highlightedItemRect.bottom - dropdownRect.bottom;
          } else if (highlightedItemRect.top < dropdownRect.top) {
            dropdown.scrollTop -= dropdownRect.top - highlightedItemRect.top;
          }
        }
      }
    }
  }, [highlightedIndex, dataLength,listRef]);

  useEffect(() => {
    scrollToHighlightedItem();
  }, [highlightedIndex, scrollToHighlightedItem]);
};
