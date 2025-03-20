import React from "react";

const LoaderSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div
        className="mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
        style={{ maxWidth: "90%", marginTop: "5vh" }}
      >
        {/* Header Skeleton */}
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-4 animate-pulse">
          <div className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Tabs Skeleton */}
          <div className="w-full md:w-64 bg-blue-50 dark:bg-gray-700 p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-600 animate-pulse">
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-200 dark:bg-gray-600 rounded-lg"
                ></div>
              ))}
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="flex-1 p-4 sm:p-6 md:p-8">
            <div className="space-y-6 animate-pulse">
              <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
              </div>

              {/* Form Grid Skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  </div>
                ))}
                <div className="sm:col-span-2 pt-6">
                  <div className="h-10 bg-blue-600 dark:bg-blue-700 rounded-lg w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
