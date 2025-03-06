"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GET_ALL_ASSET_ACCOUNTS } from "@/lib/queries";
import { useAuth } from "@/lib/auth-context";

// Define the type for AssetAccount
interface AssetAccount {
  id: string;
  accountStage: string;
  accountNumber: string;
  Customer: string;
  phone: string;
  unit: string;
  street: string;
  city: string;
  srpc: string;
  country: string;
  postalCode: string;
  latitude: string;
  longitude: string;
  status: string;
}

// Create a column helper for AssetAccount
const assetColumnHelper = createColumnHelper<AssetAccount>();

// Skeleton loading row
const SkeletonRow = ({ columns }: { columns: number }) => (
  <tr>
    {Array.from({ length: columns }).map((_, index) => (
      <td
        key={index}
        className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
      >
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </td>
    ))}
  </tr>
);

export default function AssetAccountsTable() {
  const { distributorId } = useAuth();
  const [pageIndex, setPageIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState(""); // State for search term

  console.log("the distributor id is", distributorId);

  const {
    loading: assetLoading,
    error: assetError,
    data: assetData,
  } = useQuery(GET_ALL_ASSET_ACCOUNTS, {
    variables: { clientId: distributorId },
  });

  // Transform asset data
  const assetAccounts = useMemo(
    () =>
      assetData?.getAllAssetAccountsForClient?.page?.edges.map(
        ({ node }: { node: any }) => ({
          id: node?._id,
          accountStage: node?.accountStage || "N/A",
          accountNumber: node?.asset?.sellerItemID || "N/A",
          Customer: node?.credit?.owner?.name || "N/A",
          phone: node?.credit?.owner?.contact?.phone || "N/A",
          unit: node?.asset?.unit || "N/A",
          street: node?.credit?.owner?.address?.street || "N/A",
          city: node?.credit?.owner?.address?.city || "N/A",
          srpc: node?.credit?.owner?.address?.srpc || "N/A",
          country: node?.credit?.owner?.address?.country || "N/A",
          postalCode: node?.credit?.owner?.address?.postcode || "N/A",
          latitude:
            node?.credit?.owner?.address?.addressLocation?.addressLatitude ||
            "N/A",
          longitude:
            node?.credit?.owner?.address?.addressLocation?.addressLongitude ||
            "N/A",
          status: node?.credit?.accountStatus || "N/A",
        })
      ) || [],
    [assetData]
  );

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return assetAccounts; // Return all data if no search term

    return assetAccounts.filter(
      (account: AssetAccount) =>
        account.accountNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        account.Customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [assetAccounts, searchTerm]);

  // Define columns for the asset accounts table
  const assetColumns = useMemo(
    () => [
      assetColumnHelper.accessor("accountNumber", {
        header: () => "Account Number",
        cell: (info) => {
          const status = info.row.original.status.toLowerCase();
          const isActive = status === "active";
          return (
            <div
              className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {info.getValue()}
            </div>
          );
        },
      }),
      assetColumnHelper.accessor("Customer", {
        header: () => "Customer",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("unit", {
        header: () => "Unit",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("street", {
        header: () => "Street",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("city", {
        header: () => "City",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("srpc", {
        header: () => "SRPC",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("country", {
        header: () => "Country",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("postalCode", {
        header: () => "Postal Code",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("latitude", {
        header: () => "Latitude",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("longitude", {
        header: () => "Longitude",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("accountStage", {
        header: () => "Account Stage",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => {
          const status = info.getValue();
          const isActive = status.toLowerCase() === "active";
          return (
            <div
              className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </div>
          );
        },
      }),
    ],
    []
  );

  // Create the table instance
  const assetTable = useReactTable({
    data: filteredData,
    columns: assetColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize: 15 } },
    onPaginationChange: (updater) => {
      setPageIndex((prev) => {
        const newState =
          typeof updater === "function"
            ? updater({
                pageIndex: prev,
                pageSize: assetTable.getState().pagination.pageSize,
              })
            : updater;
        return newState.pageIndex;
      });
    },
  });

  if (assetError)
    return <p>Error fetching asset accounts: {assetError.message}</p>;

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative overflow-scroll">
        <header className="px-5 py-4">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">
            Asset Accounts{" "}
            <span className="text-gray-400 dark:text-gray-500 font-medium">
              ({assetAccounts.length})
            </span>
          </h2>
          {/* Search Input */}
          <div className="mt-4 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by Account Number, Customer Name, or Phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </header>
        <div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full dark:text-gray-300">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
                {assetTable.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${
                          header.index === 0
                            ? "sticky left-0 bg-gray-50 dark:bg-gray-900/20 z-20"
                            : ""
                        }`}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                {assetLoading
                  ? // Show skeleton loading rows
                    Array.from({ length: 5 }).map((_, index) => (
                      <SkeletonRow key={index} columns={assetColumns.length} />
                    ))
                  : // Render actual table rows
                    assetTable.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell, index) => (
                          <td
                            key={cell.id}
                            className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${
                              index === 0
                                ? "sticky left-0 bg-white dark:bg-gray-800 z-10"
                                : ""
                            }`}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pagination controls */}
      <div className="flex flex-end items-center gap-4 my-4 mt-10">
        <button
          onClick={() => assetTable.previousPage()}
          disabled={!assetTable.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {assetTable.getState().pagination.pageIndex + 1} of{" "}
          {assetTable.getPageCount()}
        </span>
        <button
          onClick={() => assetTable.nextPage()}
          disabled={!assetTable.getCanNextPage()}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
