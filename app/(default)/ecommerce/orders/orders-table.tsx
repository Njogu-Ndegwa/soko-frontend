"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { GET_ALL_ASSET_ACCOUNTS } from "@/lib/queries";
import { useAuth } from "@/lib/auth-context";
import { ReusableTable } from "@/components/utils/reusable-table"; // Adjust the import path as needed
import { useDebounce } from "use-debounce";
import { usePagination } from "@/components/utils/pagination";
import { FaEdit, FaTrash } from "react-icons/fa";
import { SearchForm } from "@/components/search-form";
import DeleteButton from "@/components/delete-button";
import DateSelect from "@/components/date-select";
import FilterButton from "@/components/dropdown-filter";

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
  balance: string;
  currency: string;
  oemItemid: string;
  itemId: string;
  fleetId: string;
  manager: string;
  dateCreated: string;
  lastUpdated: string;
}

// Create a column helper for AssetAccount
const assetColumnHelper = createColumnHelper<AssetAccount>();

export default function AssetAccountsTable() {
  const { distributorId } = useAuth();
  const [pageIndex, setPageIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // 500ms debounce
  const {
    currentCursor,
    cursorHistory,
    handleNext,
    handlePrevious,
    itemsPerPage,
    setItemsPerPage,
  } = usePagination();

  const {
    loading: assetLoading,
    error: assetError,
    data: assetData,
  } = useQuery(GET_ALL_ASSET_ACCOUNTS, {
    variables: {
      clientId: distributorId,
      first: itemsPerPage,
      after: currentCursor,
      search: debouncedSearchTerm,
    },
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
          balance: node?.credit?.balance || "N/A",
          currency: node?.credit?.currency || "N/A",
          unit: node?.asset?.unit || "N/A",
          oemItemid: node?.asset?.oemItemID || "N/A",
          itemId: node?.asset?._id || "N/A",
          manager: node?.manager?._id || "N/A",
          fleetId: node?.asset?.itemFleet?._id || "N/A",
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
    if (!searchTerm) return assetAccounts;

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
      assetColumnHelper.display({
        id: "select",
        header: ({ table }) => (
          <div className="inline-flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Select all</span>
              <input
                type="checkbox"
                checked={table.getIsAllRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
              />
            </label>
            <span className="ml-2 font-semibold">Actions</span>
          </div>
        ),
        cell: ({ row }) => (
          <div className="inline-flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Select</span>
              <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            </label>
            {/* Edit Icon */}
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            {/* Delete Icon */}
            <button className="ml-2 text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        ),
      }),
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
      assetColumnHelper.accessor("balance", {
        header: () => "Balance",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("currency", {
        header: () => "Currency",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("oemItemid", {
        header: () => "Item Oem Id",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("itemId", {
        header: () => "Item Id",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("fleetId", {
        header: () => "Fleet Id",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("accountStage", {
        header: () => "Account Stage",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("manager", {
        header: () => "Manager",
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
      assetColumnHelper.accessor("id", {
        header: () => "Id",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const calculateStartIndex = () => {
    if (!assetData?.getAllAssetAccountsForClient?.pageData) return 0;
    return cursorHistory.length * itemsPerPage + 1;
  };

  const calculateEndIndex = () => {
    if (!assetData?.getAllAssetAccountsForClient?.pageData) return 0;
    const startIndex = calculateStartIndex();
    const currentPageItemCount =
      assetData.getAllAssetAccountsForClient.page.edges.length;
    return startIndex + currentPageItemCount - 1;
  };

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Asset Accounts
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Search form */}
          <SearchForm
            placeholder="Search by OEM Item ID or Account Number…"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Create invoice button */}
          <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg
              className="fill-current shrink-0 xs:hidden"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Create Asset</span>
          </button>
        </div>
      </div>
      {/* More actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left side */}
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">
                All{" "}
                <span className="ml-1 text-gray-400 dark:text-gray-500">
                  {assetData?.getAllAssetAccountsForClient?.pageData?.count ||
                    0}
                </span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Paid{" "}
                <span className="ml-1 text-gray-400 dark:text-gray-500">
                  14
                </span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Due{" "}
                <span className="ml-1 text-gray-400 dark:text-gray-500">
                  34
                </span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Overdue{" "}
                <span className="ml-1 text-gray-400 dark:text-gray-500">
                  19
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton />
          {/* Dropdown */}
          <DateSelect />
          {/* Filter button */}
          <FilterButton align="right" />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
        <ReusableTable<AssetAccount>
          columns={assetColumns}
          data={filteredData}
          loading={assetLoading}
          error={assetError}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          pageSize={15}
          setPageSize={() => {}}
        />
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <div className="text-sm text-gray-500 text-center sm:text-left">
          Showing{" "}
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {calculateStartIndex()}
          </span>{" "}
          to{" "}
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {calculateEndIndex()}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {assetData?.getAllAssetAccountsForClient?.pageData?.count || 0}
          </span>{" "}
          results
        </div>
        <div className="flex  gap-3 mt-4">
          <button
            onClick={handlePrevious}
            disabled={cursorHistory.length === 0 || assetLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              handleNext(
                assetData?.getAllAssetAccountsForClient?.page?.pageInfo
                  ?.endCursor
              )
            }
            disabled={
              !assetData?.getAllAssetAccountsForClient?.page?.pageInfo
                ?.hasNextPage || assetLoading
            }
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
