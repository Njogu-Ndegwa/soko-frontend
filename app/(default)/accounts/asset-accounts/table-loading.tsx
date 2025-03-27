'use client'

export default function TransactionSkeleton() {
  return (
    <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="h-8 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Skeleton Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-2 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
                <th className="px-2 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
                <th className="px-2 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
                <th className="px-2 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
                <th className="px-2 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="px-2 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                  <td className="px-2 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                  <td className="px-2 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                  <td className="px-2 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                  <td className="px-2 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Skeleton Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}