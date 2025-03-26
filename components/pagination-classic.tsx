// export default function PaginationClassic() {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//       <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
//         <ul className="flex justify-center">
//           <li className="ml-3 first:ml-0">
//             <span className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-gray-300 dark:text-gray-600">&lt;- Previous</span>
//           </li>
//           <li className="ml-3 first:ml-0">
//             <a className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" href="#0">Next -&gt;</a>
//           </li>
//         </ul>
//       </nav>
//       <div className="text-sm text-gray-500 text-center sm:text-left">
//         Showing <span className="font-medium text-gray-600 dark:text-gray-300">1</span> to <span className="font-medium text-gray-600 dark:text-gray-300">10</span> of <span className="font-medium text-gray-600 dark:text-gray-300">467</span> results
//       </div>
//     </div>
//   )
// }

// 1. First, update your PaginationClassic component to accept props:

interface PaginationClassicProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export default function PaginationClassic({
  currentPage = 1,
  totalItems = 0,
  itemsPerPage = 10,
  hasNextPage = false,
  hasPreviousPage = false,
  onNextPage,
  onPreviousPage
}: PaginationClassicProps) {
  // Calculate display values
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <button 
              className={`btn border ${hasPreviousPage 
                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300' 
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-gray-300 dark:text-gray-600'}`}
              onClick={onPreviousPage}
              disabled={!hasPreviousPage}
            >
              &lt;- Previous
            </button>
          </li>
          <li className="ml-3 first:ml-0">
            <button 
              className={`btn border ${hasNextPage 
                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300' 
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 text-gray-300 dark:text-gray-600'}`}
              onClick={onNextPage}
              disabled={!hasNextPage}
            >
              Next -&gt;
            </button>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-gray-500 text-center sm:text-left">
        {totalItems > 0 ? (
          <>
            Showing <span className="font-medium text-gray-600 dark:text-gray-300">{startItem}</span> to <span className="font-medium text-gray-600 dark:text-gray-300">{endItem}</span> of <span className="font-medium text-gray-600 dark:text-gray-300">{totalItems}</span> results
          </>
        ) : (
          <span>No results found</span>
        )}
      </div>
    </div>
  );
}