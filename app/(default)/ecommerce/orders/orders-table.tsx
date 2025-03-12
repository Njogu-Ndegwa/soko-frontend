"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { GET_ALL_ASSET_ACCOUNTS } from "@/lib/queries";
import { useAuth } from "@/lib/auth-context";
import { ReusableTable } from "@/components/utils/reusable-table"; // Adjust the import path as needed

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

export default function AssetAccountsTable() {
  const { distributorId } = useAuth();
  const [pageIndex, setPageIndex] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

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

  return (
    <ReusableTable<AssetAccount>
      columns={assetColumns}
      data={filteredData}
      loading={assetLoading}
      error={assetError}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
  );
}
