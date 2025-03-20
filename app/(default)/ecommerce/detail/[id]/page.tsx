"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SPECIFIC_ASSET_ACCOUNT } from "@/lib/queries";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function AssetAccountDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState(0);

  console.log("the id is ....", id);

  const { loading, error, data } = useQuery(GET_SPECIFIC_ASSET_ACCOUNT, {
    variables: { id },
  });

  console.log(" the data is", data);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">Error: {error.message}</div>
    );

  const assetAccount = data?.getSpecificAssetAccount;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        {/* Header with Back Button */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 text-blue-600 dark:text-blue-400"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Asset Account Details
          </h1>
        </div>

        <div className="flex">
          {/* Vertical Tabs */}
          <div className="w-64 bg-blue-50 dark:bg-gray-700 p-4">
            <nav className="space-y-2">
              {["Basic Info", "Technical", "Management", "Metadata"].map(
                (tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(index)}
                    className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      activeTab === index
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8">
            {activeTab === 0 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Basic Information
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DetailItem
                      label="OEM Item ID"
                      value={assetAccount.asset.oemItemID}
                    />
                    <DetailItem
                      label="Owner Name"
                      value={
                        assetAccount.manager?.orgContactPerson?.name || "N/A"
                      }
                    />
                    <DetailItem
                      label="Balance"
                      value={assetAccount.credit.balance}
                    />
                    <DetailItem
                      label="Currency"
                      value={assetAccount.credit.currency}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 0 && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-400 dark:text-gray-500 text-lg">
                    {
                      [
                        "Technical Details",
                        "Management Information",
                        "Metadata Content",
                      ][activeTab - 1]
                    }
                    <br />
                    <span className="text-sm">(Coming Soon)</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
      {label}
    </p>
    <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
      {value || "N/A"}
    </p>
  </div>
);
