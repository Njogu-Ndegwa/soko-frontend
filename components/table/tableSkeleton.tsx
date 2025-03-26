// TableSkeleton.tsx
import React from 'react';
import { TableColumn } from './types'; // Update this import path to match your project structure

interface TableSkeletonProps {
  columns: TableColumn<any>[];
  rowCount?: number;
  selectable?: boolean;
  hasActions?: boolean;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  columns,
  rowCount = 5,
  selectable = false,
  hasActions = false
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full dark:text-gray-300">
        <thead className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
          <tr>
            {selectable && (
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </th>
            )}
            
            {columns.map((column, index) => (
              <th key={index} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="font-semibold text-left">{column.header}</div>
              </th>
            ))}
            
            {hasActions && (
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap sticky right-0 bg-gray-50 dark:bg-gray-900 z-10 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="font-semibold text-left">Actions</div>
              </th>
            )}
          </tr>
        </thead>
        
        <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {selectable && (
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </td>
              )}
              
              {columns.map((_, colIndex) => (
                <td key={colIndex} className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full max-w-xs"></div>
                </td>
              ))}
              
              {hasActions && (
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px sticky right-0 bg-white dark:bg-gray-800 z-10 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.1)]">
                  <div className="flex space-x-1">
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;