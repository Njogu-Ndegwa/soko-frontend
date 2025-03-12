"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { GET_ALL_CLIENT_ITEMS } from "@/lib/queries";
import { ReusableTable } from "@/components/utils/reusable-table";
import { usePagination } from "@/components/utils/pagination";

interface AssetItems {
  id: string;
  oemItemId: string;
  accountNumber: string;
  fleet: string;
  sellerId: string;
  oemId: string;
  batchId: string;
  batchNumber: string;
  skuName: string;
  itemFirmware: string;
  hashTop: string;
  hashTopInitial: string;
  hashIndex: string;
  lifeCycle: string;
  type: string;
  assetAccount: string;
  description: string;
  codeHistory: string;
  createdAt: string;
  updatedAt: string;
}

const assetColumnHelper = createColumnHelper<AssetItems>();

export default function ItemsTable() {
  const [pageSize, setPageSize] = React.useState(15); // Manage pageSize state

  const {
    cursorHistory,
    currentCursor,
    itemsPerPage,
    setItemsPerPage,
    handleNext,
    handlePrevious,
    resetPagination,
  } = usePagination(10);

  const {
    data: itemsData,
    loading,
    error,
  } = useQuery(GET_ALL_CLIENT_ITEMS, {
    variables: { first: itemsPerPage, after: currentCursor },
  });

  const assetItems = useMemo(
    () =>
      itemsData?.getAllClientItems?.page?.edges.map(
        ({ node }: { node: any }) => ({
          id: node?._id,
          oemItemId: node?.oemItemID || "N/A",
          accountNumber: node?.oemItemID || "N/A",
          fleet: node?.itemFleet?.fleetName || "N/A",
          sellerId: node?.sellerID || "N/A",
          oemId: node?.oemID || "N/A",
          batchId: node?.itemBatch?._id || "N/A",
          batchNumber: node?.itemBatch?.batchNumber || "N/A",
          skuName: node?.itemBatch?.itemSKU?.skuName || "N/A",
          itemFirmware: node?.itemFirmware?.version || "N/A",
          hashTop: node?.codeGenerator?.hashTop || "N/A",
          hashTopInitial: node?.codeGenerator?.hashTopInitial || "N/A",
          hashIndex: node?.codeGenerator?.hashIndex || "N/A",
          lifeCycle: node?.lifeCycle || "N/A",
          type: node?.itemFirmware?.type || "N/A",
          assetAccount: node?.assetAccount?._id || "N/A",
          description: node?.description || "N/A",
          codeHistory: node?.codeHistory || "N/A",
          createdAt: node?.createdAt || "N/A",
          updatedAt: node?.updatedAt || "N/A",
        })
      ) || [],
    [itemsData]
  );

  console.log("the data is", itemsData);

  const itemColumns = useMemo(
    () => [
      assetColumnHelper.accessor("oemItemId", {
        header: () => "OEM Item ID",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("accountNumber", {
        header: () => "Account Number",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("fleet", {
        header: () => "Fleet",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("sellerId", {
        header: () => "Seller ID",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("oemId", {
        header: () => "OEM ID",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("batchNumber", {
        header: () => "Batch Number",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("skuName", {
        header: () => "SKU Name",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("itemFirmware", {
        header: () => "Item Firmware",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("hashTop", {
        header: () => "Hash Top",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("hashTopInitial", {
        header: () => "Hash Top Initial",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("hashIndex", {
        header: () => "Hash Index",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("lifeCycle", {
        header: () => "Life Cycle",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("type", {
        header: () => "Type",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("assetAccount", {
        header: () => "Asset Account",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("description", {
        header: () => "Description",
        cell: (info) => info.getValue(),
      }),
      assetColumnHelper.accessor("codeHistory", {
        header: () => "Code History",
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

  React.useEffect(() => {
    resetPagination();
  }, [itemsPerPage, resetPagination]);

  const calculateStartIndex = () => {
    if (!itemsData?.getAllClientItems?.pageData) return 0;
    return cursorHistory.length * itemsPerPage + 1;
  };

  const calculateEndIndex = () => {
    if (!itemsData?.getAllClientItems?.pageData) return 0;
    const startIndex = calculateStartIndex();
    const currentPageItemCount = itemsData.getAllClientItems.page.edges.length;
    return startIndex + currentPageItemCount - 1;
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
        <header className="px-5 py-4">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">
            Invoices{" "}
            <span className="text-gray-400 dark:text-gray-500 font-medium">
              67
            </span>
          </h2>
        </header>
        <div>
          <ReusableTable<AssetItems>
            columns={itemColumns}
            data={assetItems}
            loading={loading}
            error={error}
            pageIndex={0}
            setPageIndex={() => {}}
            searchTerm=""
            pageSize={pageSize} // Pass pageSize
            setPageSize={setPageSize} // Pass setPageSize
          />
        </div>
      </div>
      <div className="mt-8 flex justify-between align-items-center">
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
            {itemsData?.getAllClientItems?.pageData?.count || 0}
          </span>{" "}
          results
        </div>
        <div className="flex gap-3 mt-4">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
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
                itemsData?.getAllClientItems?.page?.pageInfo?.endCursor
              )
            }
            disabled={
              !itemsData?.getAllClientItems?.page?.pageInfo?.hasNextPage ||
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
