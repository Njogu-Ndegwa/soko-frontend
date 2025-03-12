import React from "react";

export const usePagination = (initialItemsPerPage: number = 10) => {
  const [cursorHistory, setCursorHistory] = React.useState<string[]>([]); // Track cursor history
  const [currentCursor, setCurrentCursor] = React.useState<string | null>(null); // Current cursor
  const [itemsPerPage, setItemsPerPage] = React.useState(initialItemsPerPage);

  const handleNext = (endCursor: string | null) => {
    if (endCursor) {
      setCursorHistory((prev) => [...prev, currentCursor || ""]);
      setCurrentCursor(endCursor);
    }
  };

  const handlePrevious = () => {
    if (cursorHistory.length > 0) {
      const prevCursor = cursorHistory[cursorHistory.length - 1];
      setCursorHistory((prev) => prev.slice(0, -1));
      setCurrentCursor(prevCursor);
    }
  };

  const resetPagination = () => {
    setCursorHistory([]);
    setCurrentCursor(null);
  };

  return {
    cursorHistory,
    currentCursor,
    handleNext,
    handlePrevious,
    itemsPerPage,
    setItemsPerPage,
    resetPagination,
  };
};
