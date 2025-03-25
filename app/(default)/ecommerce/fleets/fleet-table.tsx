"use client";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { GET_ITEM_FLEETS_FOR_CLIENT } from "@/lib/queries";
import { ReusableTable } from "@/components/utils/reusable-table";
import { usePagination } from "@/components/utils/pagination";
import DeleteButton from "@/components/delete-button";
import DateSelect from "@/components/date-select";
import FilterButton from "@/components/dropdown-filter";
import { SearchForm } from "@/components/search-form";
import moment from "moment";
import { useDebounce } from "use-debounce";
import { useAuth } from "@/lib/auth-context";

interface AssetItems {
  id: string;
  fleetName: string;
  distributor: string;
  freeCode: string;
  resetCode: string;
  dayCodeCount: string;
  codeInterval: string;
  actionScope: string;
  actorName: string;
  assignDate: string;
  distributorId: string;
  profile: string;

  type: string;

  createdAt: string;
  updatedAt: string;
}

const assetColumnHelper = createColumnHelper<AssetItems>();

const formatDate = (dateString: string) => {
  return moment(dateString).format("MMMM D, YYYY, hh:mm:ss A"); // Output: "March 5, 2025, 07:50:24 AM"
};

export default function FleetTable() {
  const { distributorId } = useAuth();
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
    data: itemsData,
    loading,
    error,
  } = useQuery(GET_ITEM_FLEETS_FOR_CLIENT, {
    variables: {
      clientId: distributorId,
      first: itemsPerPage,
      after: currentCursor,
    },
  });

  const assetItems = useMemo(
    () =>
      itemsData?.getItemFleetsForClient?.page?.edges.map(
        ({ node }: { node: any }) => ({
          id: node?._id,
          fleetName: node?.fleetName || "N/A",
          distributor: node?.distributor?.orgContactPerson?.name || "N/A",
          description: node?.description || "N/A",
          freeCode: node?.freeCodeCount || "N/A",
          codeInterval: node?.codeGenInterval || "N/A",
          actionScope: node?.actionScope || "N/A",
          actorName: node?.actorName || "N/A",
          skuName: node?.itemBatch?.itemSKU?.skuName || "N/A",
          itemFirmware: node?.itemFirmware?.version || "N/A",
          hashTop: node?.codeGenerator?.hashTop || "N/A",
          hashTopInitial: node?.codeGenerator?.hashTopInitial || "N/A",
          hashIndex: node?.codeGenerator?.hashIndex || "N/A",
          lifeCycle: node?.lifeCycle || "N/A",
          type: node?.type || "N/A",
          profile: node?.profile || "N/A",
          codeHistory: node?.codeHistory || "N/A",
          createdAt: node?.createdAt
            ? formatDate(node.createdAt) // Format the createdAt date
            : "N/A",
          updatedAt: node?.updatedAt
            ? formatDate(node.updatedAt) // Format the updatedAt date
            : "N/A",
        })
      ) || [],
    [itemsData]
  );

  console.log("the data is", itemsData);

  const itemColumns = useMemo(
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
      assetColumnHelper.accessor("fleetName", {
        header: () => "fleet Name",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("distributor", {
        header: () => "Distributor",
        cell: (info) => info.getValue(),
      }),

      assetColumnHelper.accessor("freeCode", {
        header: () => "Free Code Count",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("codeInterval", {
        header: () => "Code Interval",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("actionScope", {
        header: () => "Action Scope",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("actorName", {
        header: () => "Actor Name",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("type", {
        header: () => "Type",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("profile", {
        header: () => "Profile",
        cell: (info) => info.getValue(),
      }),

      assetColumnHelper.accessor("createdAt", {
        header: () => "Created At",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("updatedAt", {
        header: () => "Updated At",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const calculateStartIndex = () => {
    if (!itemsData?.getItemFleetsForClient?.pageData) return 0;
    return cursorHistory.length * itemsPerPage + 1;
  };

  const calculateEndIndex = () => {
    if (!itemsData?.getItemFleetsForClient?.pageData) return 0;
    const startIndex = calculateStartIndex();
    const currentPageItemCount =
      itemsData.getItemFleetsForClient.page.edges.length;
    return startIndex + currentPageItemCount - 1;
  };

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Items
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
            <span className="max-xs:sr-only">Create Item</span>
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
                  {itemsData?.getItemFleetsForClient?.pageData?.count || 0}
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
        <div>
          <ReusableTable<AssetItems>
            columns={itemColumns}
            data={assetItems}
            loading={loading}
            error={error}
            pageIndex={0}
            setPageIndex={() => {}}
            searchTerm={searchTerm}
            pageSize={itemsPerPage}
            setPageSize={() => {}}
          />
        </div>
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
            {itemsData?.getItemFleetsForClient?.pageData?.count || 0}
          </span>{" "}
          results
        </div>
        <div className="flex  gap-3 mt-4">
          <button
            onClick={handlePrevious}
            disabled={cursorHistory.length === 0 || loading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              handleNext(
                itemsData?.getItemFleetsForClient?.page?.pageInfo?.endCursor
              )
            }
            disabled={
              !itemsData?.getItemFleetsForClient?.page?.pageInfo?.hasNextPage ||
              loading
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
