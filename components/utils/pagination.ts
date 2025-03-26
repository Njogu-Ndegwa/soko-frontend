// import React from "react";

// export const usePagination = (initialItemsPerPage: number = 15) => {
//   const [cursorHistory, setCursorHistory] = React.useState<(string | null)[]>(
//     []
//   ); // Track cursor history
//   const [currentCursor, setCurrentCursor] = React.useState<string | null>(null); // Current cursor
//   const [itemsPerPage, setItemsPerPage] = React.useState(initialItemsPerPage);

//   const handleNext = (newCursor: string) => {
//     setCursorHistory([...cursorHistory, currentCursor]);
//     setCurrentCursor(newCursor);
//   };

//   const handlePrevious = () => {
//     if (cursorHistory.length > 0) {
//       const prevCursor = cursorHistory[cursorHistory.length - 1];
//       setCursorHistory((prev) => prev.slice(0, -1));
//       setCurrentCursor(prevCursor);
//     }
//   };

//   const resetPagination = React.useCallback(() => {
//     setCursorHistory([]);
//     setCurrentCursor(null);
//   }, [setCursorHistory, setCurrentCursor]);

//   return {
//     cursorHistory,
//     currentCursor,
//     handleNext,
//     handlePrevious,
//     itemsPerPage,
//     setItemsPerPage,
//     resetPagination,
//   };
// };

import React from "react";

export const usePagination = (initialItemsPerPage: number = 15) => {
  const [cursorHistory, setCursorHistory] = React.useState<(string | null)[]>(
    []
  ); // Track cursor history
  const [currentCursor, setCurrentCursor] = React.useState<string | null>(null); // Current cursor
  const [itemsPerPage, setItemsPerPage] = React.useState(initialItemsPerPage);
  // Keep track of current page number
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleNext = (newCursor: string) => {
    setCursorHistory([...cursorHistory, currentCursor]);
    setCurrentCursor(newCursor);
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (cursorHistory.length > 0) {
      const prevCursor = cursorHistory[cursorHistory.length - 1];
      setCursorHistory((prev) => prev.slice(0, -1));
      setCurrentCursor(prevCursor);
      setCurrentPage(prev => prev - 1);
    }
  };

  const resetPagination = React.useCallback(() => {
    setCursorHistory([]);
    setCurrentCursor(null);
    setCurrentPage(1);
  }, [setCursorHistory, setCurrentCursor, setCurrentPage]);

  // Calculate if we can go back based on our local state
  const hasPreviousPage = cursorHistory.length > 0;

  return {
    cursorHistory,
    currentCursor,
    currentPage,
    handleNext,
    handlePrevious,
    itemsPerPage,
    setItemsPerPage,
    resetPagination,
    hasPreviousPage, // Add this for component to use instead of API value
  };
};