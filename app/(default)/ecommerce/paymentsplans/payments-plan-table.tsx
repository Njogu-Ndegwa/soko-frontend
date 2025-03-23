"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { GET_ALL_PAY_PLAN_TEMPLATES } from "@/lib/queries";
import { useAuth } from "@/lib/auth-context";
import { ReusableTable } from "@/components/utils/reusable-table"; // Adjust the import path as needed
import { useDebounce } from "use-debounce";
import { usePagination } from "@/components/utils/pagination";
import { FaEdit, FaTrash } from "react-icons/fa";
import { SearchForm } from "@/components/search-form";
import DeleteButton from "@/components/delete-button";
import DateSelect from "@/components/date-select";
import FilterButton from "@/components/dropdown-filter";
import { useRouter } from "next/navigation";

// Define the type for AssetAccount

interface AssetAccount {
  id: string;
  planName: string;
  planDescription: string;
  upFrontPrice: string;
  freecodePrice: string;
  DaysToCutOff: string;
  minimumPayment: string;
  upFrontDaysIncluded: string;
  hourPrice: string;
  expectedPaid: string;
  useupfront: boolean;
}

// Create a column helper for AssetAccount
const assetColumnHelper = createColumnHelper<AssetAccount>();

export default function PaymentsPlanTable() {
  const router = useRouter();

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
  } = useQuery(GET_ALL_PAY_PLAN_TEMPLATES, {
    variables: {
      first: itemsPerPage,
      after: currentCursor,
      search: debouncedSearchTerm,
    },
  });

  // Transform asset data
  const assetAccounts = useMemo(
    () =>
      assetData?.getAllPayPlanTemplates?.page?.edges.map(
        ({ node }: { node: any }) => ({
          id: node?._id,
          planName: node?.planName,
          planDescription: node?.planDescription,
          upFrontPrice: node?.planDetails?.[0]?.pValue,
          freecodePrice: node?.planDetails?.[1]?.pValue,
          DaysToCutOff: node?.planDetails?.[2]?.pValue,
          minimumPayment: node?.planDetails?.[3]?.pValue,
          upFrontDaysIncluded: node?.planDetails?.[4]?.pValue,
          hourPrice: node?.planDetails?.[5]?.pValue,
          expectedPaid: node?.planDetails?.[6]?.pValue,
          useupfront: node?.useUpfront,
        })
      ) || [],
    [assetData]
  );

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return assetAccounts;
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
            <button
              className="ml-2 text-blue-500 hover:text-blue-700"
              onClick={() =>
                router.push(
                  `/ecommerce/paymentsplans/detail/${row.original.id}`
                )
              }
            >
              <FaEdit />
            </button>
            {/* Delete Icon */}
            <button className="ml-2 text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        ),
      }),

      assetColumnHelper.accessor("planName", {
        header: () => "Plan Name",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("planDescription", {
        header: () => "Plan Description",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("upFrontPrice", {
        header: () => "Upfront Price",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("freecodePrice", {
        header: () => "Freecode Price",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("DaysToCutOff", {
        header: () => "Days To Cut Off",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("minimumPayment", {
        header: () => "Minimum Payment",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("upFrontDaysIncluded", {
        header: () => "Upfront Days Included",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("hourPrice", {
        header: () => "Hour Price",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("expectedPaid", {
        header: () => "Expected Paid",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("useupfront", {
        header: () => "Use Upfront",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("id", {
        header: () => "ID",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const calculateStartIndex = () => {
    if (!assetData?.getAllPayPlanTemplates?.pageData) return 0;
    return cursorHistory.length * itemsPerPage + 1;
  };

  const calculateEndIndex = () => {
    if (!assetData?.getAllPayPlanTemplates?.pageData) return 0;
    const startIndex = calculateStartIndex();
    const currentPageItemCount =
      assetData.getAllPayPlanTemplates.page.edges.length;
    return startIndex + currentPageItemCount - 1;
  };

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-5">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Payments
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
                  {assetData?.getAllPayPlanTemplates?.pageData?.count || 0}
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
            {assetData?.getAllPayPlanTemplates?.pageData?.count || 0}
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
                assetData?.getAllPayPlanTemplates?.page?.pageInfo?.endCursor
              )
            }
            disabled={
              !assetData?.getAllPayPlanTemplates?.page?.pageInfo?.hasNextPage ||
              assetLoading
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
